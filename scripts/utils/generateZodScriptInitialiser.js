import chalk from "chalk";
import fs from "fs";
import { sep as localPathSeparator } from "path";
import path from "path/posix";
import { getTSsRecursively } from "./getFilesRecursively.js";

// This function extracts a `generate-zod-*.js` command's arguments and options, validates them, and returns the relevant data to be used.
export function generateZodScriptInitialiser(program) {
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
	relativeFiles = relativeFiles.filter((file) => path.basename(file) !== "_index.ts");
	if (!relativeFiles.length) {
		console.log(chalk.blue("No TypeScript files found"));
		process.exit();
	}

	return {
		relativeFiles: relativeFiles,
		zodDir: zodDir,
	};
}
