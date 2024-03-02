#! /usr/bin/env node

import chalk from "chalk";
import fs from "fs";

const _dist = fs.statSync("./_dist", { throwIfNoEntry: false });
if (_dist) {
	fs.rmSync("./_dist", { recursive: true });
	console.log(chalk.green("Cleared distribution files"));
}

let deleteCounter = 0;
fs.readdirSync("./zod")
	.filter((file) => file.startsWith("aaa") && file.endsWith(".js"))
	.forEach((file) => {
		fs.rmSync(`./scripts/${file}`);
		deleteCounter++;
	});

if (deleteCounter) {
	console.log(chalk.green(`Cleared ${deleteCounter} generated file${deleteCounter > 1 ? "s" : ""}`));
}

if (!_dist && !deleteCounter) console.log(chalk.blue("Nothing to delete"));
