import { readFileSync as fsReadFileSync } from "fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { getJSONsRecursively } from "./utils/getFilesRecursively.js";
import chalk from "chalk";

const JSONSchemas = getJSONsRecursively("schema").map((file) =>
	JSON.parse(fsReadFileSync(file, { encoding: "utf8" })),
);
const ajv = new Ajv({
	schemas: JSONSchemas,
	verbose: true,
});
addFormats(ajv);
const validator = ajv.getSchema("pf2ools-schema/_schema.json");

export function validateAjv(obj) {
	const result = validator(obj);

	if (result === true) return { success: true };

	const errors = validator.errors.filter((obj) => obj.instancePath !== "" && obj.instancePath !== "/type");

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
	return {
		success: false,
		error: errorMessage,
	};
}
