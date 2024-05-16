import { z } from "zod";
import { name } from "./content/common/name.js";
import { contentSource } from "./content/common/contentSource.js";
import { reference } from "./content/common/reference.js";
export const contentTemplate = z
    .object({
    type: z.string().describe("The type of data described."),
    name: name,
    source: contentSource,
    data: z.object({}).describe("An object representing the data itself.").optional(),
    reference: reference.optional(),
})
    .describe("This is the general form of 'content' files (e.g. statblocks).")
    .strict();
