import { z } from "zod";

import { date } from "../utils/date.js";
import { sourceTags, ID } from "../source.js";
import { datatypes } from "./datatypes.js";

export const homebrewSourceSummary = z.object({
	path: z
		.string()
		.describe("A relative Unix path from the top-level `pf2ools-data` directory to the source's file.")
		.regex(/bundles\/bySource\/homebrew\/.+\.json/, "Must be a valid relative Unix path"),
	fullTitle: z
		.string()
		.describe("The source's `title.full` property, which corresponds to the source's complete, proper name")
		.min(1),
	publisherAuthors: z
		.string()
		.describe(
			"The homebrew source's publisher. If it doesn't have a publisher, this value is instead a comma-separated list of the homebrew source's authors (truncated by \"et al.\" after 3 names).",
		)
		.min(1),
	released: date.describe(
		"The homebrew source's publication date (YYYY-MM-DD). For content with a staggered release or early-access program, use the date the source was first made publicly available.",
	),
	added: date.describe(
		"The date (YYYY-MM-DD) the homebrew source was first made available on the Pf2ools ecosystem (complete or otherwise).",
	),
	modified: date.describe(
		"The date (YYYY-MM-DD) the homebrew source's content-data as maintained by the Pf2ools project was last modified.",
	),
	tags: sourceTags,
	datatypes: datatypes.describe("A list of the datatypes this homebrew source contains."),
	sourceURL: z
		.string()
		.url()
		.optional()
		.describe(
			"The root URL of the homebrew source's website, which prepends the `path` property to form a full URL to the source's file. If absent, `pf2ools-app` will assume the URL to be the same as that of the index this is being read from.",
		),
});

export const homebrewSources = z
	.record(ID, homebrewSourceSummary)
	.describe(
		"An object mapping IDs as keys to an object containing some summary data about the homebrew source assigned that ID. This is primarily used by `pf2ools-app`.",
	);
