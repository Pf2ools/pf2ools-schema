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
		"Validates a file or directory of files against the Pf2ools schema. Only JSON files will be tested.",
	)
	.argument("<paths...>", "File or directory paths to test")
	.option("-a, --all", `Test all files ${chalk.dim("(default: break at first validationResult failure)")}`)
	.option("-b, --bundle", "Test data-bundle files rather than data files")
	.option("-e, --error", "Print only the validationResult status of failing files")
	.option("-r, --recurse", "Recursively test files in directories")
	.option(
		"-s, --summary",
		`Suppress printing of validationResult status for all files and only summarise results ${chalk.dim(
			"(note: implies --all)",
		)}`,
	)
	.parse(process.argv);

// Load and validate arguments
const opts = program.opts();
if (opts.summary) opts.all = true;
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

// Set validationResult function
import { data } from "../_dist/zod/_data.js";
import { bundle } from "../_dist/zod/_bundle.js";
function validate(schema, test) {
	const result = schema.safeParse(test);
	if (result.success) return { success: true };
	return { success: false, error: result.error.issues };
}

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
	const validationResult = validate(opts.bundle ? bundle : data, testJSON);
	if (validationResult.success) {
		if (!opts.error && !opts.summary) console.log(chalk.dim(passed + file));
	} else {
		console.log(failed + file);
		if (!opts.all) throw validationResult.error;
		failCount++;
	}
}

// Summarise
if (opts.summary || files.length > 1) {
	if (failCount === 0) {
		console.log(
			chalk.green(`All ${chalk.bold(files.length)} file${files.length !== 1 ? "s" : ""} passed validationResult.`),
		);
	} else {
		program.error(
			chalk.red(
				`${chalk.bold(failCount)} file${failCount !== 1 ? "s" : ""} (${
					Math.round((1000 * failCount) / files.length) / 10
				}%) failed validationResult.`,
			),
			{
				exitCode: 1,
				code: "validationResult.failure",
			},
		);
	}
}
