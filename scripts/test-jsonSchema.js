#! /usr/bin/env node

/*
  NOTE
  This script is nearly identical to `test-data.js`. The only substantial difference is that the schema-loading
  lines are vacant, and `validator` is switched out with instances of `ajv`. This is due to limitations in the
  ajv package.
*/

import Ajv from "ajv";
import chalk from "chalk";
import { Command } from "commander";
import * as fs from "fs";
import path from "path";
import { getJSONsRecursively } from "./utils/getFilesRecursively.js";

// Define CLI
const program = new Command()
	.summary("validate data for Pf2ools")
	.description(
		"Validates a file or directory of files against the Pf2ools schema. Only JSON files will be tested.",
	)
	.argument("<paths...>", "File or directory paths to test")
	.option("-a, --all", "Test all files (default: break at first validation failure)")
	.option("-e, --error", "Suppress printing of validation status for passing files")
	.option("-r, --recurse", "Recursively test files in directories")
	.option(
		"-s, --summary",
		"Suppress printing of validation status for all files and only summarise results (note: implies --all)",
	)
	.parse(process.argv);

// Load and validate arguments
const opts = program.opts();
if (opts.summary) opts.all = true;
let files = [];
for (const arg of program.args) {
	const argClean = path.join(...arg.toString().split(path.sep));
	let filePoint;
	try {
		filePoint = fs.statSync(argClean);
	} catch {
		program.error(`"${argClean}" not found`, {
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
		program.error(`"${argClean}" is not a JSON file`, {
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

// Validate files
const ajv = new Ajv();
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
	const test = ajv.validateSchema(testJSON);
	if (test) {
		if (!opts.error && !opts.summary) console.log(chalk.dim(passed + file));
	} else {
		console.log(failed + file);
		if (!opts.all) {
			const errors = ajv.errors.filter((obj) => obj.instancePath !== "" && obj.instancePath !== "/type");
			let errorMessage;
			if (errors.length) {
				if (errors.length === 1) {
					// TODO
				} else {
					// TODO
				}
			} else {
				errorMessage = `${chalk.bold(
					"Unknown error.",
				)} Check that your top-level properties (\`type\`, \`data\`, etc.) are named correctly and that they have the correct types. Also ensure that the value of \`type\` is valid.`;
			}
			program.error(errorMessage, {
				exitCode: 1,
				code: "validation.failure",
			});
		}
		failCount++;
	}
}

// Summarise
if (opts.summary || files.length > 1) {
	if (failCount === 0) {
		console.log(chalk.green(`All ${chalk.bold(files.length)} files passed validation.`));
	} else {
		program.error(
			chalk.red(
				`${chalk.bold(failCount)} file${failCount > 1 ? "s" : ""} (${
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
