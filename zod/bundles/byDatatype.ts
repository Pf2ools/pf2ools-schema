import { z } from "zod";

import { schemaIndex } from "../_data.js";
import { nonEmpty } from "../utils/nonEmpty.js";

export const byDatatype = z
	.object({ ...schemaIndex, source: schemaIndex.source.unwrap() })
	.describe(
		"A bundle of all data of a given datatype (and possibly a given family—either `core` or `homebrew`). Each key maps from a given datatype to an array of data with that datatype.",
	)
	.refine(...nonEmpty);
