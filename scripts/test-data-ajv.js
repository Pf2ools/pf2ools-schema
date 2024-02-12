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
const dataValidator = ajv.getSchema("pf2ools-schema/_schema.json");
const bundleValidator = ajv.getSchema("pf2ools-schema/bundle.json");

function validationReporter(result, validator) {
	if (result === true) return { success: true };

	const errors = validator.errors.filter((obj) => obj.instancePath !== "" && obj.instancePath !== "/type");

	let errorMessage;
	if (errors.length) {
		if (errors.length === 1) {
			// TODO
			errorMessage = "Unknown error.";
		} else {
			// TODO
			errorMessage = "Unknown error.";
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

export function validateData(obj) {
	return validationReporter(dataValidator(obj), dataValidator);
}
export function validateBundle(obj) {
	return validationReporter(bundleValidator(obj), bundleValidator);
}
