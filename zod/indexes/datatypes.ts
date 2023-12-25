import { z } from "zod";

export const datatypes = z
	.array(z.string().describe("A datatype's name, as it appears in the JSON data itself.").min(1))
	.describe("A list of datatypes used by pf2ools-data.")
	.min(1);
