import { z } from "zod";
import { ID } from "../../source.js";
import { uniqueObjects } from "../../utils/uniqueObjects.js";
export const reference = z
	.object({
		type: z
			.enum(["reprint", "variant", "replacement", "extension"])
			.describe(
				"`reprint`: The statblock is (near) identical to another one, and is intended to be as such.\n`variant`: The statblock is dependent on but distinct to the target (e.g. unique NPCs based on generic monsters).\n`replacement`: The statblock replaces the target entirely everywhere.\n`extension`: The statblock adds additional content to the target but doesn't supersede it (e.g. a new option added to a spell).",
			),
		target: z
			.object({
				name: z.string().min(1),
				specifier: z.string().min(1).optional(),
				source: ID,
			})
			.describe("The content being referenced."),
		modifications: z
			.array(
				z.object({
					type: z.string().describe("The type of modification being applied.").min(1), // Will become .enum() later
					target: z.object({
						property: z
							.string()
							.describe(
								'A dot-separated hierarchy of properties leading to the target from the top-level `data` (e.g. "castingTime.unit").',
							)
							.regex(/^\w+(\.\w+)+&/, "Invalid property accessor"),
						name: z
							.string()
							.describe("The `name` of the target object, if it is found in an array.")
							.min(1)
							.optional(),
					}),
					value: z
						.union([z.string(), z.number(), z.object({}).passthrough(), z.array(z.any()), z.boolean()])
						.describe("The modification value.")
						.optional(),
				}),
			)
			.describe(
				"An array of changes which, when applied consecutively, transforms the target content into the referring content.",
			)
			.min(1)
			.refine(...uniqueObjects)
			.optional(),
	})
	.describe(
		"An explicit reference to some other content, possibly with modifications applied on top. The referenced content's type is always assumed to be the same as the referring content.",
	)
	.strict();
