import { z } from "zod";

import { ID } from "./source.js";
import { entries } from "./content/common/entries.js";

export const license = z
	.object({
		type: z.literal("license"),
		ID: ID.describe(
			"The license's identifying string for the computer. This must be only composed of alphanumeric characters and non-initial, non-terminal hyphens. It must be globally and case-insensitively unique across the Pf2ools ecosystem.",
		),
		title: z
			.object({
				full: z
					.string()
					.describe("An abbreviation or other shortening of the license's `name` for display purposes.")
					.min(1),
				short: z
					.string()
					.describe("An abbreviation or other shortening of the source's name for display purposes.")
					.min(1),
			})
			.describe("An object representing the license's name")
			.strict(),
		data: z
			.object({
				entries: entries.describe(
					"The full text of the license. Formatting may be used where it doesn't detract from its interpretation.",
				),
			})
			.strict(),
		// Licenses don't have `tags` because Pf2ools isn't a law organisation. It's probably not a good idea to be making judgements about legal stuff; there are better services out there for that.
	})
	.strict();
