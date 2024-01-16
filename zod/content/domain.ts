import { z } from "zod";

import { content } from "../content.js";
import { entryString } from "./common/entryString.js";
import { referenceTarget } from "./common/referenceTarget.js";

export const domain = content.merge(
	z
		.object({
			type: z.literal("domain"),
			data: z
				.object({
					preamble: entryString
						.describe(
							"The typically brief sentence or two of flavour text that describes the domain or otherwise provides guidance on its use.",
						)
						.optional(),
					domainSpell: referenceTarget,
					advancedDomainSpell: referenceTarget,
					apocryphalSpell: referenceTarget.optional(),
					advancedApocryphalSpell: referenceTarget.optional(),
				})
				.strict(),
		})
		.describe("A domain (for a deity)")
		.strict(),
);
