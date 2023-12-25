import { z } from "zod";

import { listOfSkills } from "../constants/listOfSkills.js";
import { uniqueStrings } from "../../utils/uniqueStrings.js";

export const skill = z
	.object({
		skill: listOfSkills.describe("The name of the skill (title case)."),
		variables: z
			.array(
				z
					.string()
					.min(1)
					.regex(/^[A-Z]/), // Enforces title case
			)
			.describe(
				'A skill\'s variable element (e.g. "Accounting" and "Midwifery" in "Accounting or Midwifery Lore").',
			)
			.min(1)
			.refine(...uniqueStrings)
			.optional(),
		display: z
			.string()
			.describe(
				'How the skill should display, if it cannot be trivially inferred from `skill` and `variables`. (Example: "Accounting and Midwifery Lore".)',
			)
			.min(1)
			.optional(),
	})
	.describe("A combined object to describe a skill.")
	.strict();
