import { z } from "zod";
export const listOfAbilities = z
    .enum(["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"])
    .describe("An ability in title case.");
