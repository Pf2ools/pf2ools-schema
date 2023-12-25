import { z } from "zod";
import { entryString } from "./common/entryString.js";
import { directReference } from "./common/directReference.js";
export const domain = z
	.object({
		type: z.literal("domain"),
		data: z
			.object({
				preamble: entryString
					.describe(
						"The typically brief sentence or two of flavour text that describes the domain or otherwise provides guidance on its use.",
					)
					.optional(),
				domainSpell: directReference,
				advancedDomainSpell: directReference,
				apocryphalSpell: directReference.optional(),
				advancedApocryphalSpell: directReference.optional(),
			})
			.strict(),
	})
	.describe("A domain (for a deity)")
	.strict();
