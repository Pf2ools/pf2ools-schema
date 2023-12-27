import { z } from "zod";
import { datatype } from "../indexes/datatypes.js";
import { data } from "../_data.js";
import { nonEmpty } from "../utils/nonEmpty.js";
export const bySource = z
	.record(datatype, z.array(data).min(1))
	.describe(
		"A bundle of all content in a given source. Keys map from a datatype to an array of objects of that datatype. The `source` key is required.",
	)
	.refine(...nonEmpty)
	.refine((obj) => obj.source);
