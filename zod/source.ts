import { z } from "zod";

import { date } from "./utils/date.js";
import { uniqueStrings } from "./utils/uniqueStrings.js";
import { nonEmpty } from "./utils/nonEmpty.js";
import { entries } from "./content/common/entries.js";

export const ID = z
	.string()
	// Format derives from the following logic: 1) the ID should be URI-safe to ensure, well, maximum safety; 2) the ID should not include \".\" because that looks confusing in a URI; 3) the ID should not include \"_\" because that is reserved for use by the Pf2ools' website; 4) \"~\" and initial/terminal \"-\" is confusing and looks ugly. The minimum length is just to ensure a modicum of variety and meaningfulness.
	.regex(
		/^[a-z0-9][a-z0-9-]*[a-z0-9]$/i,
		"Use alphanumeric characters only (minimum length 2), along with hyphens that aren't in first or last position",
	)
	// These are reserved filenames in Windows. At some point, someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\_(ツ)_/¯
	.refine((str) => !str.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/i), "This ID is reserved");

export const sourceData = z
	.object({
		released: date.describe(
			"The source's publication date (YYYY-MM-DD). For content with a staggered release or early-access program, use the date the source was first made publicly available.",
		),
		version: z
			.string()
			.describe(
				'The target version for the converted data (if any). This value serves akin to a `specifier` in case multiple distinct versions of the same source are maintained. Leave undefined if there has only ever been one version. (Examples: "2nd Printing", "2.0.1", "Revised 2023")',
			)
			.min(1)
			.optional(),
		errataed: date
			.describe(
				"The date (YYYY-MM-DD) of the source's most recent errata applied to Pf2ools' content. Leave undefined if the source has never been errataed.",
			)
			.optional(),
		added: date.describe(
			"The date (YYYY-MM-DD) the source was first made available on the Pf2ools ecosystem (complete or otherwise).",
		),
		modified: date.describe(
			"The date (YYYY-MM-DD) the source's content-data as maintained by the Pf2ools project was last modified.",
		),
		URL: z
			.string()
			.describe(
				'A website on which the content can be legally and publicly viewed, downloaded, or purchased. A first-party website (i.e. one controlled by the authors) is preferred. If the Pf2ools source is the authoritative version for distribution, you can use "https://github.com/pf2ools/pf2ools-data".',
			)
			.url(),
		groupIDs: z
			.array(ID.describe("The `ID` of a source group."))
			.describe(
				'A list of `ID`s of the source\'s parent groups (if any). This is used for a source that is one piece of a larger, clearly defined, multi-part series. For instance, "Extinction Curse 1: The Show Must Go On" belongs to the "Extinction Curse" series ("EC"), and "Lost Omens: Travel Guide" belongs to the "Lost Omens" series ("LO").',
			)
			.nonempty()
			.refine(...uniqueStrings)
			.optional(),
		requiredSourceIDs: z
			.array(ID.describe("The `ID` of the dependent homebrew source."))
			.describe(
				"A list of `ID`s of other homebrew sources that this source requires. The requirement is strict: a source that adds a subclass to another, external homebrew class would list that class' source ID; sources that merely add complementary subclasses to the same core class should be instead linked via a `sourceGroup`.",
			)
			.nonempty()
			.refine(...uniqueStrings)
			.optional(),
		licenseID: ID.describe("The `ID` of the source's license."),
		copyright: entries
			.describe(
				"Any additional copyright text associated with the source. For instance, the copyright notice that accompanies the OGLv1.0a license would be entered here (but not the license itself). Formatting may be used where it doesn't detract from its interpretation.",
			)
			.optional(),
		authors: z
			.array(
				z
					.string()
					.describe(
						'An author\'s name. Online handles should be reasonably indicated (e.g. "Twitter: @ThatVauxs", "Discord: @spap").',
					),
			)
			.describe("A list of unique authors as credited by the source itself.")
			.nonempty()
			.refine(...uniqueStrings)
			.optional(),
		publisher: z
			.string()
			.describe(
				'The name of the source\'s publishing company or group (e.g. "Paizo" or "Roll for Combat", but not a general marketplace like "Pathfinder Infinite").',
			)
			.min(2)
			.optional(),
		converters: z
			.array(
				z
					.string()
					.describe(
						"A converter's name. Discord usernames are strongly prefered; other online handles should be reasonably indicated.",
					)
					.min(2),
			)
			.describe(
				"A list of unqiue Pf2ools contributors who converted this source. If multiple converters exist, choose one 'principal' to go first in the case of questions or bug reports. This is particularly used for homebrew, both for attributing work done and to help organise updates.",
			)
			.nonempty()
			.refine(...uniqueStrings)
			.optional(),
	})
	.strict();

export const sourceTags = z
	.object({
		publicationType: z
			.object({
				Comic: z.literal(true).describe("The source is content bundled with a comic.").optional(),
				"Blog post": z
					.literal(true)
					.describe("The source is a blog post or another similar type of short, online article.")
					.optional(),
			})
			.describe(
				"An object representing the type of publication the source can be categorised as. This is most relevant when the game content is bundled along with something that isn't a typical Pathfinder rulebook.",
			)
			.strict()
			.refine(...nonEmpty)
			.optional(),
		status: z
			.object({
				"Missing content": z
					.literal(true)
					.describe(
						"This source is only partially converted right now (i.e. it lacks some content), but, one day, could be completely up-to-date.",
					)
					.optional(),
				"Missing tags": z
					.literal(true)
					.describe(
						"The converted content this source contains isn't completely tagged, even if it all displays correctly.",
					)
					.optional(),
				Invalid: z
					.literal(true)
					.describe(
						"This source's data is invalid and either contains serious schema errors or is generally malformed. It exists for archival purposes only and is unmaintained.",
					)
					.optional(),
			})
			.strict()
			.refine(...nonEmpty)
			.optional(),
		misc: z
			.object({
				legacyRuleset: z
					.literal(true)
					.describe(
						"This source targets the original Pathfinder 2e ruleset, as published in the Core Rulebook (2019), and not as published in Player Core (2023).",
					)
					.optional(),
				Official: z
					.literal(true)
					.describe(
						"This source was created and published by Paizo as 'official' Pathfinder 2e content (that is, it's official insofar that something can be 'official').",
					)
					.optional(),
				"GM-facing": z
					.literal(true)
					.describe(
						"This source is intended to be GM-facing. This is typically due to it being an adventure, module, one-shot, scenario, or the like.",
					)
					.optional(),
				"PFS-legal": z.literal(true).describe("This source is legal for Pathfinder Society play.").optional(),
				Playtest: z
					.literal(true)
					.describe("This source contains playtest, early-access, or otherwise 'unfinished' content.")
					.optional(),
				Ongoing: z
					.literal(true)
					.describe(
						"This source is being continually expanded. The data only reflects content only up until the `errataed` date. This is used for 'monster a day' projects and the like, where the content may entail a substantial lag behind the present.",
					)
					.optional(),
				Deprecated: z
					.literal(true)
					.describe(
						"This source has been wholly superseded by another version of the same content. This applies when a completely rewritten, revised version of the source exists; simple, minor modifications via errata do not.",
					)
					.optional(),
				NSFW: z
					.literal(true)
					.describe(
						"This source contains content of a particularly provocative, unsavoury, or otherwise adult-oriented nature.",
					)
					.optional(),
			})
			.strict()
			.refine(...nonEmpty)
			.optional(),
	})
	.describe(
		"This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.",
	)
	.strict()
	.refine(...nonEmpty)
	.optional();

export const source = z
	.object({
		type: z.literal("source"),
		ID: ID.describe(
			'The source\'s identifying string for the computer. This must be only composed of alphanumeric characters and non-initial, non-terminal hyphens. It must be globally and case-insensitively uniqueStrings across the Pf2ools ecosystem. For multi-part adventures, the standard is to use "<groupID>0" for the player\'s guide (if any), and then "<groupID>#" for each part, where "#" is the part\'s number.',
		),
		title: z
			.object({
				full: z
					.string()
					.describe(
						"The source's full, human-readable name. Title case is preferred but anything can be used within reason.",
					)
					.min(1)
					// These are reserved filenames in Windows. At some point, someone will save a source file and/or its content as \"<name>.json\" and won't realise the hell this causes for Windows users. Unlikely any source is named this, though ¯\_(ツ)_/¯
					.refine((str) => !str.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/i), "This title is prohibited."),
				short: z
					.string()
					.describe("An abbreviation or other shortening of the source's name for display purposes.")
					.min(1)
					.max(8), // Max length for display purposes
			})
			.describe("An object representing the source's name")
			.strict(),
		data: sourceData,
		tags: sourceTags,
	})
	.strict();
