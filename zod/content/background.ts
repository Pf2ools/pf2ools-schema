import { z } from "zod";

import { content } from "../content.js";
import { traits } from "./common/traits.js";
import { entries } from "./common/entries.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { listOfAbilities } from "./constants/listOfAbilities.js";
import { listOfSkills } from "./constants/listOfSkills.js";
import { directReference } from "./common/directReference.js";
import { uniqueObjects } from "../utils/uniqueObjects.js";

export const background = content.merge(
	z
		.object({
			type: z.literal("background"),
			data: z
				.object({
					traits: traits.optional(),
					entries: entries,
				})
				.strict(),
			tags: z
				.object({
					abilityBoosts: z
						.object({
							abilities: z
								.record(listOfAbilities.or(z.literal("Free")), z.literal(true))
								.describe("An object containing the types of boost that the background can grant.")
								.refine(...nonEmpty),
							count: z
								.number()
								.int()
								.describe("The total number of boosts the background can grant.")
								.min(1)
								.max(3), // Maximum only exists as an extra guard against typos; if anything official or homebrew would legitimately break it, it can be removed.
						})
						.describe("The ability boosts the background grants.")
						.strict()
						.optional(),
					trainedSkills: z
						.object({
							skills: z
								.record(listOfSkills.or(z.literal("Any")), z.literal(true))
								.describe("A list of skills in which the background can grant proficiency.")
								.refine(...nonEmpty),
							count: z
								.number()
								.int()
								.describe("The total number of distinct skill proficiencies the background can grant.")
								.min(1)
								.max(4), // Maximum only exists as an extra guard against typos; if anything official or homebrew would legitimately break it, it can be removed.
						})
						.describe("The skills in which the background can grant proficiency.")
						.strict()
						.optional(),
					gainedFeats: z
						.object({
							options: z
								.array(directReference)
								.describe("A list of feats the background can grant.")
								.min(1)
								.refine(...uniqueObjects),
							count: z
								.number()
								.int()
								.describe("The total number of feats the background can grant.")
								.min(1)
								.max(2), // Maximum only exists as an extra guard against typos; if anything official or homebrew would legitimately break it, it can be removed.
						})
						.describe("The feats the background grants.")
						.strict()
						.optional(),
					gainedSpells: z
						.object({
							options: z
								.array(directReference)
								.describe("A list of spells the background can grant.")
								.min(1)
								.refine(...uniqueObjects),
							count: z
								.number()
								.int()
								.describe("The total number of feats the background can grant.")
								.min(1)
								.max(2), // Maximum only exists as an extra guard against typos; if anything official or homebrew would legitimately break it, it can be removed.
						})
						.describe("The spells the background grants.")
						.strict()
						.optional(),
					misc: z
						.object({
							"Grants ability": z
								.literal(true)
								.describe("The background background grants an active, voluntary ability.")
								.optional(),
							"Grants equipment": z
								.literal(true)
								.describe(
									"The background grants a free item (not just access or proficiency—the actual concrete thing).",
								)
								.optional(),
							"Grants language": z.literal(true).describe("The background grants a language.").optional(),
							"Grants resistance": z
								.literal(true)
								.describe("The background grants a damage resistance.")
								.optional(),
							"Grants sense": z
								.literal(true)
								.describe("The background grants a sense (e.g. darkvision, scent).")
								.optional(),
							"Grants situational benefit": z
								.literal(true)
								.describe(
									"The background grants a passive benefit that isn't otherwise categorisable. For example, this would apply if the background grants a +1 circumstance bonus to Seek on cloudy days.",
								)
								.optional(),
							"Has drawback": z
								.literal(true)
								.describe(
									"The background comes with an objective, mandatory drawback, such as a penalty to some check or the inability to use an item or spell; not something that is both good and bad.",
								)
								.optional(),
							"GM influence": z
								.literal(true)
								.describe(
									"The GM determines some mechanical aspect of the background. For instance, this would apply if the background specifies that the GM alone chooses one of the boosts or the type of Lore skill it grants.",
								)
								.optional(),
						})
						.describe("Miscellaneous tags")
						.strict()
						.refine(...nonEmpty)
						.optional(),
				})
				.strict()
				.refine(...nonEmpty)
				.optional(),
		})
		.describe("A condition")
		.strict(),
);
