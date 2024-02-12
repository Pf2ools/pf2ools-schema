#! /usr/bin/env node

import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import { sep as localPathSeparator } from "path";
import path from "path/posix";
import { getJSONsRecursively } from "./utils/getFilesRecursively.js";

// Define CLI
const program = new Command()
	.summary("validate data for Pf2ools")
	.description(
		`Validates a file or directory of files against the Pf2ools schema. Only JSON files will be tested. Tests can be performed using:\n\t- JSON Schema via Ajv ${chalk.dim(
			"(--test ajv)",
		)}\n\t- Zod ${chalk.dim(
			"(--test zod)",
		)}\nAll methods are roughly equivalent, but some may have more or less specific validation for certain edge cases.`,
	)
	.argument("<paths...>", "File or directory paths to test")
	.option("-a, --all", `Test all files ${chalk.dim("(default: break at first validation failure)")}`)
	.option("-b, --bundle", "Test data-bundle files rather than data files")
	.option("-e, --error", "Print only the validation status of failing files")
	.option("-r, --recurse", "Recursively test files in directories")
	.option(
		"-s, --summary",
		`Suppress printing of validation status for all files and only summarise results ${chalk.dim(
			"(note: implies --all)",
		)}`,
	)
	.option("-t, --test <methods...>", `Define validation methods ${chalk.dim("(default: Zod only)")}`)
	.parse(process.argv);

// Load and validate arguments
const opts = program.opts();
if (opts.summary) opts.all = true;
const testMethods = ["ajv", "zod"];
if (opts.test) {
	opts.test.forEach((method) => {
		if (!testMethods.includes(method))
			program.error(
				chalk.red(
					`"${method}" is not a valid test method\n${chalk.dim(
						`Available methods: "${testMethods.join('", "')}"`,
					)}`,
				),
				{
					exitCode: 1,
					code: "invalid.testMethod",
				},
			);
	});
} else opts.test = ["zod"];
let files = [];
for (const arg of program.args) {
	const argClean = path.join(...arg.toString().split(localPathSeparator));
	let filePoint;
	try {
		filePoint = fs.statSync(argClean);
	} catch {
		program.error(chalk.red(`"${argClean}" not found`), {
			exitCode: 1,
			code: "invalid.path",
		});
	}
	if (filePoint.isDirectory()) {
		if (opts.recurse) {
			files = files.concat(getJSONsRecursively(argClean));
		} else {
			files = files.concat(
				fs
					.readdirSync(argClean)
					.filter((file) => path.extname(file) === ".json")
					.map((file) => path.join(argClean, file)),
			);
		}
	} else if (path.extname(argClean) !== ".json") {
		program.error(chalk.red(`"${argClean}" is not a JSON file`), {
			exitCode: 1,
			code: "invalid.file",
		});
	} else {
		files.push(argClean);
	}
}
if (!files.length) {
	console.log(chalk.blue("No JSON files to test"));
	process.exit();
}

// Get validation functions
import * as ajv from "./test-data-ajv.js";
import * as zod from "./test-data-zod.js";
const methods = {
	ajv: {
		data: ajv.validateData,
		bundle: ajv.validateBundle,
	},
	zod: {
		data: zod.validateData,
		bundle: zod.validateBundle,
	},
};

// Validate files
const failed = `\t${chalk.red("[Failed]")}  `;
const passed = `\t${chalk.green("[Passed]")}  `;
let failCount = 0;
for (const file of files) {
	let testJSON;
	try {
		testJSON = JSON.parse(fs.readFileSync(file, { encoding: "utf8" }));
	} catch {
		console.error(failed + file);
		if (opts.all) {
			failCount++;
			continue;
		} else {
			program.error(`"${file}" contains improper JSON syntax`, {
				exitCode: 1,
				code: "improper.file",
			});
		}
	}
	opts.test.forEach((method) => {
		const testResult = methods[method][opts.bundle ? "bundle" : "data"](testJSON);
		if (testResult.success) {
			if (!opts.error && !opts.summary) console.log(chalk.dim(passed + file));
		} else {
			console.log(failed + file);
			if (!opts.all) {
				throw testResult.error;
			}
			failCount++;
		}
	});
}

// Summarise
if (opts.summary || files.length > 1) {
	if (failCount === 0) {
		console.log(
			chalk.green(`All ${chalk.bold(files.length)} file${files.length !== 1 ? "s" : ""} passed validation.`),
		);
	} else {
		program.error(
			chalk.red(
				`${chalk.bold(failCount)} file${failCount !== 1 ? "s" : ""} (${
					Math.round((1000 * failCount) / files.length) / 10
				}%) failed validation.`,
			),
			{
				exitCode: 1,
				code: "validation.failure",
			},
		);
	}
}
