import { z } from "zod";
import { entries } from "./entries.js";
import { uniqueObjects } from "../../utils/uniqueObjects.js";

export const heightened = z
	.array(
		z
			.object({
				level: z
					.enum(["fixed", "increment"])
					.describe(
						"`fixed`: The heightened effects occur at level `value` and higher.\n`increment`: The heightened effects occur for every `value` levels.",
					),
				value: z.number().int().min(0).describe("The numerical value of the heightened `level`."),
				entries: entries,
			})
			.describe("A single heightened effect entry.")
			.strict(),
	)
	.min(1)
	.describe("An array of heightened effects, as typically used for spells and rituals.")
	.refine(...uniqueObjects);
