#! /usr/bin/env node

const OUTPUT_DIRECTORY = "./_dist/schema";

import chalk from "chalk";
import { zodToJsonSchema as zodToJSONSchema } from "zod-to-json-schema";
import { data } from "../_dist/zod/_data.js";
import { bundle } from "../_dist/zod/_bundle.js";
import fs from "fs";

const outputDirectory = fs.statSync(OUTPUT_DIRECTORY, { throwIfNoEntry: false });
if (!outputDirectory) fs.mkdirSync(OUTPUT_DIRECTORY);

const options = {
	dateStrategy: "format:date",
	//errorMessages: true,   // Seems to be causing problems for VSC?
	markdownDescription: true,
	removeAdditionalStrategy: "strict",
};

const dataSchema = zodToJSONSchema(data, options);
const bundleSchema = zodToJSONSchema(bundle, options);

fs.writeFileSync(`${OUTPUT_DIRECTORY}/data.json`, JSON.stringify(dataSchema), {
	encoding: "utf8",
});
console.log(chalk.green(`Generated ${chalk.italic("data")} JSON schema`));

fs.writeFileSync(`${OUTPUT_DIRECTORY}/bundle.json`, JSON.stringify(bundleSchema), {
	encoding: "utf8",
});
console.log(chalk.green(`Generated ${chalk.italic("bundle")} JSON schema`));
