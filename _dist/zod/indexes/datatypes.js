import { z } from "zod";
// TODO: refine into an enum() of *only* the datatypes we actually have
export const datatype = z.string().describe("A datatype's name, as it appears in the JSON data itself.").min(1);
export const datatypes = z.array(datatype).describe("A list of datatypes used by pf2ools-data.").min(1);
