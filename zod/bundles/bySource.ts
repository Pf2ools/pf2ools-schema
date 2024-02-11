import { z } from "zod";

import { nonEmpty } from "../utils/nonEmpty.js";
import { schemaIndex } from "../_data.js";

export const bySource = z
	.object({ ...schemaIndex, source: schemaIndex.source.unwrap() })
	.describe(
		"A bundle of all content in a given source. Keys map from a datatype to an array of objects of that datatype. The `source` key is required.",
	)
	.refine(...nonEmpty);
