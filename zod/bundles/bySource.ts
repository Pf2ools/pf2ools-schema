import { z } from "zod";

import { datatypeSansSource } from "../indexes/datatypes.js";
import { data } from "../_data.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { source } from "../source.js";

export const bySource = z
	.object({ source: z.array(source) })
	.and(z.record(datatypeSansSource, z.array(data).min(1)))
	.describe(
		"A bundle of all content in a given source. Keys map from a datatype to an array of objects of that datatype. The `source` key is required.",
	)
	.refine(...nonEmpty);
