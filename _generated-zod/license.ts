import { z } from "zod";

export const license = z
	.object({
		type: z.literal("license"),
		ID: z
			.string()
			.regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
			.min(2)
			.refine((val: any) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
				message:
					"These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
			}),
		title: z
			.object({
				full: z
					.string()
					.min(1)
					.describe(
						"The license's full, human-readable name. Title case is preferred but anything can be used within reason.",
					),
				short: z
					.string()
					.min(1)
					.describe("An abbreviation or other shortening of the license's `name` for display purposes."),
			})
			.strict()
			.describe("An object representing the license's name."),
		data: z.object({
			entries: z
				.array(
					z.union([
						z
							.string()
							.min(1)
							.describe(
								"Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
							),
						z
							.object({ type: z.string().min(1) })
							.describe("A paragraph with a header or some particular formatting."),
					]),
				)
				.min(1)
				.describe("Pf2ools' entry value (string or object).")
				.optional(),
		}),
	})
	.strict()
	.describe("Pf2ools' license object.");
