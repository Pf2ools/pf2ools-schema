import { z } from "zod";
import { entryString } from "./entryString.js";

const distance = z
	.object({
		quantity: z.number().int().min(1).describe("The quantity of units that make up the range."),
		unit: z
			.string()
			.describe("The range's given unit (e.g. 'touch', 'feet', 'miles'). Use the singular form where possible."),
	})
	.strict();

export const range = distance
	.partial()
	.extend({
		entry: entryString
			.optional()
			.describe('Used if the intended display is more complex than "<quantity> <unit>s".'),
	})
	.describe("A generic range.")
	.strict()
	.refine(
		(obj) => obj.entry || (obj.quantity && obj.unit) || obj.unit,
		"You must define the range either by its `unit` (with `quantity` if possible), or by an `entry` string.",
	);

export const area = z
	.object({
		shape: z
			.enum(["emanation", "burst", "cone", "line"])
			.optional()
			.describe("The type of area. Leave `shape` and `size` `undefined` if a non-standard area-shape is used."),
		size: distance.optional().describe("The primary dimension of the area."),
		entry: entryString.optional().describe("Used if the intended display cannot be extrapolated from the data."),
	})
	.partial()
	.describe("A generic area.")
	.strict()
	.refine(
		(obj) => obj.entry || (obj.shape && obj.size) || obj.shape,
		"You must define the range either by its `shape` (with `size` if possible), or by an `entry` string.",
	);
