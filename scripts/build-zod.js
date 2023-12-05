import { z } from "zod";
import { resolveRefs } from "json-refs";
import { format } from "prettier";
import jsonSchemaToZod from "json-schema-to-zod";
import { writeFileSync, appendFileSync, readdirSync, readFileSync } from "fs";

const dataTypes = await Promise.all(
	readdirSync("./schema/content", { withFileTypes: true })
		.filter((item) => !item.isDirectory())
		.map(async (file) => {
			const res = await resolveRefs(JSON.parse(readFileSync(`${file.path}/${file.name}`, "utf8")), {
				location: `${file.path}/${file.name}`,
			});
			return res.resolved;
		}),
);

const metaSchema = await Promise.all(
	readdirSync("./schema", { withFileTypes: true })
		.filter((item) => !item.isDirectory())
		.filter((item) => item.name !== "content.json")
		.filter((item) => item.name !== "_schema.json")
		.map(async (file) => {
			const res = await resolveRefs(JSON.parse(readFileSync(`${file.path}/${file.name}`, "utf8")), {
				location: `${file.path}/${file.name}`,
			});
			return res.resolved;
		}),
);

const contentFile = await resolveRefs(JSON.parse(readFileSync("./schema/content.json", "utf8")), {
	location: "./schema/content.json",
});
const template = { ...contentFile.resolved, anyOf: undefined };

const dataSchema = dataTypes.map((obj) => ({
	...template,
	...obj,
	properties: { ...template.properties, ...obj.properties },
}));

writeFileSync(`zod/mega-schema.json`, JSON.stringify(dataSchema, null, "\t"));

const all = [...dataSchema, ...metaSchema];

writeFileSync(`zod/index.ts`, `// This file is generated by scripts/build-zod.js\n\n`);

all.forEach((obj) => {
	const name = obj.$id.split("/").pop().replace(".json", "");
	let addImports = false;
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
					return `${cleanZod}.refine((val: any) => !val.match(/${pattern}/g), { message: ${comment} })`;
				}
			}

			// TODO: Re-enable when I add back entries optimization
			//
			// if (schema.$id === "pf2ools-schema/content/common/entries.json" && !schema.original) {
			// 	addImports = true; // Add the import statement to the top of the file
			// 	return "entries";
			// }
		},
	});

	const imports = ['import { entries } from "./entries"'].join(" ");

	const fullcode = `${addImports ? imports : ""}\n${code}`;
	format(fullcode, { parser: "typescript" }).then((formatted) => {
		writeFileSync(`zod/${name}.ts`, formatted);
		console.log(`Wrote ${name}.ts`);

		appendFileSync(`zod/index.ts`, `export { ${name} } from "./${name}.js"\n`);
	});
});
