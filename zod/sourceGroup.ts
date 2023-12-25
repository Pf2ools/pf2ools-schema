import { z } from "zod";

import { nonEmpty } from "./utils/nonEmpty.js";
import { ID } from "./source.js";

export const sourceGroup = z
	.object({
		type: z.literal("sourceGroup"),
		ID: ID.describe(
			"The source group's identifying string for the computer. This must be only composed of alphanumeric characters and non-initial, non-terminal hyphens. It must be globally and case-insensitively unique across the Pf2ools ecosystem (both sources and source groups).",
		),
		title: z
			.object({
				full: z
					.string()
					.describe(
						"The source group's full, human-readable name. Title case is preferred but anything can be used within reason.",
					)
					.min(1),
				short: z
					.string()
					.describe("An abbreviation or other shortening of the source's name for display purposes.")
					.min(1)
					.max(8), // Max length for display purposes
			})
			.describe("An object representing the source group's name")
			.strict(),
		data: z
			.object({
				publisher: z
					.string()
					.describe(
						"The name of the original, first-party publisher of the source group. Sources with publishers not matching this value are considered 'third-party' contributors to the source group.",
					)
					.min(2),
			})
			.strict()
			.refine(...nonEmpty)
			.optional(),
		tags: z
			.object({
				misc: z
					.object({
						Adventure: z.literal(true).describe("This source group is an adventure path or the like.").optional(),
						Ongoing: z
							.literal(true)
							.describe(
								"This source group is being continually expanded. Not all member-sources may exist on Pf2ools.",
							)
							.optional(),
					})
					.strict()
					.refine(...nonEmpty),
			})
			.describe(
				"This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.",
			)
			.strict()
			.refine(...nonEmpty)
			.optional(),
	})
	.describe(
		"A `sourceGroup` object defines the existence of a group of sources. Tautology aside, this is used to describe adventure paths, book series, and the like.",
	)
	.strict();
