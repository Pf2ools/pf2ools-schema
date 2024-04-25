#! /usr/bin/env node

import chalk from "chalk";
import fs from "fs";

const _dist = fs.statSync("./_dist", { throwIfNoEntry: false });
if (_dist) {
	fs.rmSync("./_dist", { recursive: true });
	console.log(chalk.green("Cleared distribution files"));
}
