import { z } from "zod";
import { entries } from "./common/entries.js";
export const skill = z
	.object({
		type: z.literal("skill"),
		data: z
			.object({
				entries: entries,
			})
			.strict(),
	})
	.describe("A skill")
	.strict();
