import { z } from "zod";

import { contentTemplate } from "../contentTemplate.js";
import { entries } from "./common/entries.js";

export const skill = contentTemplate
	.extend({
		type: z.literal("skill"),
		data: z
			.object({
				entries: entries,
			})
			.strict(),
	})
	.describe("A skill")
	.strict();
