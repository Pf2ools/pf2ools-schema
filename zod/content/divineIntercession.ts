import { z } from "zod";

import { contentTemplate } from "../contentTemplate.js";
import { entries } from "./common/entries.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { referenceTarget } from "./common/referenceTarget.js";

export const divineIntercession = contentTemplate.merge(
	z
		.object({
			type: z.literal("divineIntercession"),
			data: z
				.object({
					deity: referenceTarget.describe("The deity whose intercessions are being described."),
					preamble: entries
						.describe("The flavour text or GM guidance that precedes the boons/curses themselves.")
						.optional(),
					"Minor Boon": entries.optional(),
					"Moderate Boon": entries.optional(),
					"Major Boon": entries.optional(),
					"Minor Curse": entries.optional(),
					"Moderate Curse": entries.optional(),
					"Major Curse": entries.optional(),
				})
				.strict()
				.refine(...nonEmpty),
		})
		.describe("A set of divine intercessions")
		.strict(),
);
