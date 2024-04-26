#! /usr/bin/env node

// Clears generated files

const DISTRIBUTION_PATH = "./_dist";

import chalk from "chalk";
import fs from "fs";

const _dist = fs.statSync(DISTRIBUTION_PATH, { throwIfNoEntry: false });
if (_dist) {
	fs.rmSync(DISTRIBUTION_PATH, { recursive: true });
	console.log(chalk.green("Cleared distribution files"));
}
