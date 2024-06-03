import { z } from "zod";
import { entryString } from "./entryString.js";

const time = z
	.object({
		quantity: z.number().describe("The quantity of units that make up the duration.").int().nonnegative(),
		unit: z
			.string()
			.describe("The duration's given unit (e.g. 'minute', 'hour', 'day'). Use the singular form where possible."),
	})
	.strict();

export const duration = time
	.partial()
	.extend({
		entry: entryString
			.describe('Used if the intended display is more complex than "<quantity> <unit>s".')
			.optional(),
	})
	.describe("A generic duration.")
	.strict()
	.refine(
		(obj) => (obj.quantity && obj.unit) || obj.entry,
		"You must define the duration by either both its `quantity` and `unit`, or by an `entry` string.",
	);

export const frequency = z
	.object({
		quantity: z.number().int().min(1).describe("The 'quantity' in \"<quantity> per <duration>\".").optional(),
		duration: time.describe("The 'duration' in \"<quantity> per <duration>\".").optional(),
		entry: entryString.describe("Used if the intended display cannot be extrapolated from the data.").optional(),
	})
	.describe("A generic frequency.")
	.strict()
	.refine(
		(obj) => (obj.quantity && obj.duration) || obj.entry,
		"You must define the frequency either by both its `quantity` and `duration`, or by an `entry` string.",
	);
