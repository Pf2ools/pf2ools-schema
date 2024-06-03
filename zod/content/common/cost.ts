import { z } from "zod";
import { entryString } from "./entryString.js";

export const cost = z
	.object({
		quantity: z.number().int().min(1).optional().describe("The number of coins."),
		unit: z.enum(["cp", "sp", "gp", "pp"]).optional().describe("The type of coin."),
		entry: entryString.optional().describe("Use if the cost is more complex than trivial coinage."),
	})
	.describe("A generic material cost.")
	.strict()
	.refine(
		(obj) => (obj.quantity && obj.unit) || obj.entry,
		"You must define the cost either by its coinage, or by using an `entry` string.",
	);
