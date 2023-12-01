import { z } from "zod";
import { resolveRefs } from "json-refs";
import { format } from "prettier";
import jsonSchemaToZod from "json-schema-to-zod";
import { writeFileSync } from "fs";

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
	return item && typeof item === "object" && !Array.isArray(item);
}

/**
 * Deep merge two objects.
 * @param target
 * @param ...sources
 */
export function mergeDeep(target, ...sources) {
	if (!sources.length) return target;
	const source = sources.shift();

	if (isObject(target) && isObject(source)) {
		for (const key in source) {
			if (isObject(source[key])) {
				if (!target[key]) Object.assign(target, { [key]: {} });
				mergeDeep(target[key], source[key]);
			} else {
				Object.assign(target, { [key]: source[key] });
			}
		}
	}

	return mergeDeep(target, ...sources);
}

import jsonSchema from "../schema/_schema.json" assert { type: "json" };

// Grab the entire schema into a single mega-object.
const { resolved } = await resolveRefs(jsonSchema, { location: "schema/_schema.json" });

const mergedContent = resolved.anyOf.find((obj) => obj.$id === "pf2ools-schema/content.json");
if (!mergedContent) throw new Error("Couldn't find content schema");
const other = resolved.anyOf.filter((obj) => obj.$id !== "pf2ools-schema/content.json");

const splitContent = mergedContent.anyOf.map((obj) => {
	return mergeDeep(
		{
			properties: mergedContent.properties,
			required: mergedContent.required,
			additionalProperties: mergedContent.additionalProperties,
		},
		obj,
	);
});

const dataTypes = [...other, ...splitContent];

dataTypes.forEach(async (obj) => {
	const name = obj.$id.split("/").pop().replace(".json", "");
	const code = jsonSchemaToZod(obj, {
		module: "esm",
		name,
		parserOverride: (schema, refs) => {
			if (schema.not && schema.type === "string") {
				const zodWithoutNot = jsonSchemaToZod({ ...schema, not: undefined }, { module: "esm" });
				const cleanZod = zodWithoutNot.replace('import { z } from "zod"', "").replace("export default", "");

				const sanityCheck = z
					.object({
						pattern: z.string(),
						$comment: z.string().optional(),
					})
					.strict();

				if (sanityCheck.parse(schema.not)) {
                    const pattern = schema.not.pattern;
                    const comment = JSON.stringify(schema.not.$comment || `Must not match the pattern /${pattern}/`);
					return `${cleanZod}.refine((val) => !val.match(/${pattern}/g), { message: ${comment} })`;
				}
			}
		},
	});
	const formatted = await format(code, { parser: "typescript" });

	writeFileSync(`zod/${name}.ts`, formatted);
});
