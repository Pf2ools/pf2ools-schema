import { z } from "zod";

export const listOfProficiencies = z
	.enum(["untrained", "trained", "expert", "master", "legendary"])
	.describe("A proficiency in lower case.");
