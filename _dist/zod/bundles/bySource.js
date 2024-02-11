import { z } from "zod";
import { dataTypesArray } from "../indexes/datatypes.js";
import * as data from "../_index.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { source } from "../source.js";
const bySourceObject = { source: z.array(source) };
const dataTypesArrayOmitSource = dataTypesArray.filter((datatype) => datatype !== "source");
dataTypesArrayOmitSource.forEach((datatype) => {
    bySourceObject[datatype] = z.array(z.array(data[datatype]).min(1)).optional();
});
export const bySource = z
    .object(bySourceObject)
    .describe("A bundle of all content in a given source. Keys map from a datatype to an array of objects of that datatype. The `source` key is required.")
    .refine(...nonEmpty);
