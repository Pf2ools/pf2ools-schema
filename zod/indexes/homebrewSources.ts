import { z } from "zod";

import { source, ID } from "../source.js";
import { datatypes } from "./datatypes.js";

export const homebrewSourceSummary = source
	.pick({ URL: true, released: true, added: true, modified: true, tags: true })
	.extend({
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
