import { z } from "zod";

import { datatypes } from "../indexes/datatypes.js";
import { source } from "../source.js";
import { content } from "../content.js";
import { nonEmpty } from "../utils/nonEmpty.js";

export const bySource = z
	.object({ source: source })
	// TODO: Replace z.string() with proper datatype keys.
	.and(z.record(z.string(), z.array(content)))
	.describe(
		"A bundle of all data in a given source. The `source` key is required and maps to the `source` object; all other keys map from a datatype present in the source to an array of objects of that datatype.",
	)
	.refine(...nonEmpty);
