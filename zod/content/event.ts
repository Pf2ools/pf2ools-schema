import { z } from "zod";

import { traits } from "./common/traits.js";
import { skillType } from "./common/skillType.js";
import { entries } from "./common/entries.js";
import { uniqueObjects } from "../utils/uniqueObjects.js";

export const event = z
	.object({
		type: z.literal("event"),
		data: z
			.object({
				level: z.number().int().describe("The event's level").min(-1),
				traits: traits.optional(),
				applicableSkills: z
					.array(skillType)
					.describe("An array of objects representing the event's applicable skills.")
					.min(1)
					.refine(...uniqueObjects)
					.optional(),
				entries: entries,
			})
			.strict(),
	})
	.describe("An event")
	.strict();
