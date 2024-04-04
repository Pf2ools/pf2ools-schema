import { z } from "zod";

import { contentTemplate } from "../contentTemplate.js";
import { entries } from "./common/entries.js";
import { nonEmpty } from "../utils/nonEmpty.js";

export const familiarAbility = contentTemplate
	.extend({
		type: z.literal("familiarAbility"),
		data: z
			.object({
				abilityType: z.enum(["Familiar", "Master"]).describe("The familiar ability's type."),
				entries: entries,
				_tags: z
					.object({
						misc: z
							.object({
								affectsCommunication: z
									.literal(true)
									.describe(
										"The ability affects the familiar's capacity to communicate (e.g. by granting it languages).",
									)
									.optional(),
								affectsSenses: z
									.literal(true)
									.describe(
										"The ability affects the familiar's senses or grants a new sense (e.g. darkvision, scent).",
									)
									.optional(),
								affectsMovement: z
									.literal(true)
									.describe("The ability affects the familiar's capacity to move or grants a new Speed.")
									.optional(),
								hasRequirement: z
									.literal(true)
									.describe("You or the familiar must satisfy a certain requirement to choose this ability.")
									// This might become a proper `requirements` array/object in the `data` at some point
									.optional(),
								grantsAbility: z
									.literal(true)
									.describe("The ability grants you or the familiar an active, voluntary ability.")
									.optional(),
								repeatable: z.literal(true).describe("You can select this ability multiple times.").optional(),
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
			.describe("An object describing the content for filtering, searching, and sorting.")
			.strict()
			.optional(),
	})
	.describe("A familiar ability")
	.strict();
