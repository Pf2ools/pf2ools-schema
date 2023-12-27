import { z } from "zod";
import { datatype } from "../indexes/datatypes.js";
import { source } from "../source.js";
import { content } from "../content.js";
import { nonEmpty } from "../utils/nonEmpty.js";
export const bySource = z
	.record(datatype, z.array(content).min(1).or(source))
	.describe(
		"A bundle of all content in a given source. The `source` key is required and maps to the `source` object; all other keys map from a datatype present in the source to an array of objects of that datatype.",
	)
	.refine(...nonEmpty);
