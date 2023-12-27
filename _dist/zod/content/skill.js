import { z } from "zod";
import { content } from "../content.js";
import { entries } from "./common/entries.js";
export const skill = content.merge(
	z
		.object({
			type: z.literal("skill"),
			data: z
				.object({
					entries: entries,
				})
				.strict(),
		})
		.describe("A skill")
		.strict(),
);
