import { z } from "zod";
import { resolveRefs } from "json-refs";
import { format } from "prettier";
import jsonSchemaToZod from "json-schema-to-zod";

import jsonSchema from "../schema/_schema.json" assert { type: "json" };

// Grab the entire schema into a single mega-object.
const { resolved } = await resolveRefs(jsonSchema, {location: "schema/_schema.json"});

console.log(resolved)

// const code = jsonSchemaToZod(resolved);
// const formatted = await format(code, { parser: "typescript" });


