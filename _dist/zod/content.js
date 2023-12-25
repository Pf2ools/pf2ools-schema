import { z } from "zod";
import { name } from "./content/common/name.js";
import { contentSource } from "./content/common/contentSource.js";
export const content = z
    .object({
    type: z.string().describe("The type of data described."),
    name: name,
    source: contentSource,
    data: z.object({}).describe("An object representing the data itself.").optional(),
    //reference: reference.optional(),
    tags: z
        .object({})
        .describe("An object describing the content for filtering, searching, and sorting.")
        .optional(),
})
    .describe("This is the general form of 'content' files (e.g. statblocks).")
    .strict();
//	.refine(...nonEmpty)
// At least one of `data` and `reference` must exist
//.refine((content) => content.data || content.reference);
