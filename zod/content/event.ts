import { z } from "zod";

import { contentTemplate } from "../contentTemplate.js";
import { traits } from "./common/traits.js";
import { skillType } from "./common/skillType.js";
import { entries } from "./common/entries.js";
import { uniqueObjects } from "../utils/uniqueObjects.js";

export const event = contentTemplate
	.extend({
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
			.strict()
			.optional(),
	})
	.describe("An event")
	.strict();
