import { z } from "zod";

export const listOfSkills = z
	.enum([
		"Acrobatics",
		"Arcana",
		"Athletics",
		"Crafting",
		"Deception",
		"Diplomacy",
		"Intimidation",
		"Lore",
		"Medicine",
		"Nature",
		"Occultism",
		"Performance",
		"Religion",
		"Society",
		"Stealth",
		"Survival",
		"Thievery",
	])
	.describe("A skill in title case.");
