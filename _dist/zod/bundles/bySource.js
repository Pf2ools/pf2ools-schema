import { ZodArray, z } from "zod";
import { dataTypesArray } from "../indexes/datatypes.js";
import * as data from "../_index.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { source } from "../source.js";
const bySourceObj = new Map(dataTypesArray.map((datatype) => {
    return [
        datatype,
        datatype === "source" ? z.array(data[datatype]).min(1) : z.array(data[datatype]).min(1).optional(),
    ];
}));
export const bySource = z
    .object(Object.fromEntries(bySourceObj))
    .describe("A bundle of all content in a given source. Keys map from a datatype to an array of objects of that datatype. The `source` key is required.")
    .refine(...nonEmpty);
