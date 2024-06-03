import { z } from "zod";

import { contentTemplate } from "../contentTemplate.js";
import { traits } from "./common/traits.js";
import { duration } from "./common/timings.js";
import { cost } from "./common/cost.js";
import { entryString } from "./common/entryString.js";
import { skillType } from "./common/skillType.js";
import { entries } from "./common/entries.js";
import { listOfProficiencies } from "./constants/listOfProficiencies.js";
import { heightened } from "./common/heightened.js";
import { area, range } from "./common/distances.js";

export const ritual = contentTemplate
	.extend({
		type: z.literal("ritual"),
		data: z
			.object({
				level: z.number().int().min(-1).max(30),
				traits: traits.optional(),
				cast: duration,
				cost: cost.optional(),
				secondaryCasters: z.number().int().min(1).optional(),
				requirements: entryString.optional(),
				primaryCheck: z
					.object({
						skills: z.array(
							z
								.object({
									skill: skillType,
									minimumProficiency: listOfProficiencies.exclude(["untrained"]).optional(),
								})
								.strict(),
						),
						creatureType: entryString
							.describe(
								"Some rituals are only available to a specific kind of creature (especially extraplanars). Use this property to describe them, using `@tag`s as necessary.",
							)
							.optional(),
						entry: entryString
							.describe(
								'Use if the intended text is not trivially reconstructable as "<skill1> (<minimumProficiency1>), <skill2> (<minimumProficiency2>), or <skill3> (<minimumProficiency3>)".',
							)
							.optional(),
					})
					.strict(),
				secondaryCheck: z
					.object({
						skills: z.array(skillType),
						entry: entryString
							.describe('Use if the intended text is not reconstructable as "<skill1>, <skill2>, or <skill3>".')
							.optional(),
					})
					.strict()
					.optional(),
				range: range.optional(),
				area: area.optional(),
				targets: entryString.optional(),
				duration: duration.optional(),
				entries: entries,
				heightened: heightened.optional(),
			})
			.strict()
			.optional(),
	})
	.describe("A ritual")
	.strict();
