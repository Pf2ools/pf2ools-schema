import chalk from "chalk";
import { Command } from "commander";
import fs from "fs";
import { sep as localPathSeparator } from "path";
import path from "path/posix";

// Define CLI
const program = new Command()
	.summary("generate combined zod files for pf2ools-schema")
	.description(
		"Generates various TypeScript files from the base Zod types. All `.ts` files in a directory are included, even if they aren't zod declarations. The schema export is assumed to have the same name as its file.",
	)
	.argument("<path>", "Directory")
	.option("-r, --recurse", "Find zod files recursively")
	.option("-e, --exclude <paths...>", "Paths to files or directories that should be excluded")
	.parse(process.argv);

// File-tree-walker to find .ts files
function getTSsRecursively(targetPath) {
	let fileList = [];
	fs.readdirSync(targetPath).forEach((file) => {
		const filePath = path.join(targetPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			fileList = fileList.concat(getTSsRecursively(filePath));
		} else if (isTS(filePath)) {
			fileList.push(filePath);
		}
	});
	return fileList;
}
function isTS(filename) {
	return path.extname(filename) === ".ts";
}

const opts = program.opts();
const [zodDir] = program.args.map((arg) => path.join(...arg.toString().split(localPathSeparator)));

let zodDirFilePoint;
try {
	zodDirFilePoint = fs.statSync(zodDir);
} catch {
	program.error(chalk.red(`"${zodDir}" not found`), {
		exitCode: 1,
		code: "invalid.path",
	});
}
if (!zodDirFilePoint.isDirectory())
	program.error(chalk.red(`"${zodDir} is not a directory`), { exitCode: 1, code: "invalid.path" });

let files = [];
if (opts.recurse) {
	files = files.concat(getTSsRecursively(zodDir));
} else {
	files = files.concat(
		fs
			.readdirSync(zodDir)
			.filter((file) => isTS(file))
			.map((file) => path.join(zodDir, file)),
	);
}

let relativeFiles = files
	.map((file) => path.relative(zodDir, file))
	.sort((a, b) => path.dirname(a).length - path.dirname(b).length);

opts.exclude.forEach((exclusion) => {
	exclusion = path.relative(zodDir, exclusion.split(localPathSeparator).join(path.sep));
	relativeFiles = relativeFiles.filter((file) => !file.match(new RegExp(`^${exclusion}(?=$|\/)`, "i")));
});
relativeFiles = relativeFiles.filter((file) => !path.basename(file).match(/^_/));
if (!relativeFiles.length) {
	console.log(chalk.blue("No TypeScript files found"));
	process.exit();
}

import { generateZodStatblockType } from "./generate-zod-statblockType.js";
generateZodStatblockType(zodDir, relativeFiles);

import { generateZodIndex } from "./generate-zod-index.js";
generateZodIndex(zodDir, relativeFiles);
