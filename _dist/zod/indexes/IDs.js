import { z } from "zod";
import { ID } from "../source.js";
export const dataSummary = z
    .object({
    type: z.string().describe("The data's type.").min(1),
    fullTitle: z
        .string()
        .describe("The data's `title.full` property, which corresponds to the data's complete, proper name.")
        .min(1),
    path: z
        .string()
        .describe("A relative Unix path from the `pf2ools-data` top-level directory to the file itself.")
        .regex(/\.\/data\/(.+\/)*.+\.json/, "Must be a valid relative Unix path"),
    official: z
        .boolean()
        .nullable()
        .describe("Whether the source is official (i.e. Paizo-made) or not. `null` is used for non-`source` datatypes."),
})
    .describe("An object containing basic data about some data.");
export const IDs = z
    .record(ID, dataSummary)
    .describe("An object mapping IDs as keys to an object containing some basic information about the data assigned that ID.");
