"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.source = void 0;
var zod_1 = require("zod");
exports.source = zod_1.z
    .object({
    type: zod_1.z.literal("source"),
    ID: zod_1.z
        .string()
        .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
        .min(2)
        .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
        message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
    }),
    title: zod_1.z
        .object({
        full: zod_1.z
            .string()
            .min(1)
            .describe("The source's full, human-readable name. Title case is preferred but anything can be used within reason."),
        short: zod_1.z
            .string()
            .min(1)
            .max(8)
            .describe("An abbreviation or other shortening of the source's name for display purposes."),
    })
        .strict()
        .describe("An object representing the source's name."),
    data: zod_1.z
        .object({
        released: zod_1.z
            .string()
            .describe("The source's publication date (YYYY-MM-DD). For content with a staggered release or early-access program, use the date the source was first made publicly available."),
        version: zod_1.z
            .string()
            .min(1)
            .describe("The target version for the converted data (if any). This value serves akin to a `specifier` in case multiple distinct versions of the same source are maintained. Leave undefined if there has only ever been one version.")
            .optional(),
        errataed: zod_1.z
            .string()
            .describe("The date (YYYY-MM-DD) of the source's most recent errata applied to Pf2ools' content. Leave undefined if the source has never been errataed.")
            .optional(),
        added: zod_1.z
            .string()
            .describe("The date (YYYY-MM-DD) the source was first made available on the Pf2ools ecosystem (complete or otherwise)."),
        modified: zod_1.z
            .string()
            .describe("The date (YYYY-MM-DD) the source's content-data as maintained by the Pf2ools project was last modified."),
        url: zod_1.z
            .string()
            .describe('A website on which the content can be legally and publicly viewed, downloaded, or purchased. A first-party website (i.e. one controlled by the authors) is preferred. If the Pf2ools source is the authoritative version for distribution, you can use "https://github.com/pf2ools/pf2ools-data".')
            .optional(),
        groupIDs: zod_1.z
            .array(zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }))
            .min(1)
            .describe('A list of `id`s of the source\'s parent groups (if any). This is used for a source that is one piece of a larger, clearly defined, multi-part series. For instance, "Extinction Curse 1: The Show Must Go On" belongs to the "Extinction Curse" series ("EC"), and "Lost Omens: Travel Guide" belongs to the "Lost Omens" series ("LO").')
            .optional(),
        copyright: zod_1.z
            .array(zod_1.z.union([
            zod_1.z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."),
            zod_1.z
                .object({ type: zod_1.z.string().min(1) })
                .describe("A paragraph with a header or some particular formatting."),
        ]))
            .min(1)
            .describe("Pf2ools' entry value (string or object).")
            .optional(),
        license: zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }),
        authors: zod_1.z
            .array(zod_1.z
            .string()
            .min(2)
            .describe("An author's name. Online handles should be reasonably indicated."))
            .min(1)
            .describe("A list of authors as credited by the source itself.")
            .optional(),
        publisher: zod_1.z
            .string()
            .min(2)
            .describe("The name of the source's publishing company or group (if any).")
            .optional(),
        converters: zod_1.z
            .array(zod_1.z
            .string()
            .min(2)
            .describe("A converter's name. Online handles should be reasonably indicated; Discord usernames are strongly prefered."))
            .min(1)
            .describe("A list of Pf2ools contributors who converted this source. If multiple converters exist, choose one 'principal' to go first in the case of questions or bug reports. This is particularly used for homebrew.")
            .optional(),
    })
        .strict(),
    tags: zod_1.z
        .object({
        publicationType: zod_1.z
            .object({
            Comic: zod_1.z
                .literal(true)
                .describe("The source is content bundled with a comic.")
                .optional(),
            "Blog post": zod_1.z
                .literal(true)
                .describe("The source is a blog post or another similar type of short, online article.")
                .optional(),
        })
            .strict()
            .describe("An object representing the type of publication the source can be categorised as. This is most relevant when the game content is bundled along with something that isn't a typical Pathfinder rulebook.")
            .optional(),
        status: zod_1.z
            .object({
            "Missing content": zod_1.z
                .literal(true)
                .describe("This source is only partially converted right now (i.e. it lacks some content), but, one day, could be completely up-to-date.")
                .optional(),
            "Missing tags": zod_1.z
                .literal(true)
                .describe("The converted content this source contains isn't completely tagged, even if it all displays correctly.")
                .optional(),
            Invalid: zod_1.z
                .literal(true)
                .describe("This source's data is invalid and either contains serious schema errors or is generally malformed. It exists for archival purposes only and is unmaintained.")
                .optional(),
        })
            .strict()
            .describe("An object representing the source's conversion status, if it is at all imperfect.")
            .optional(),
        misc: zod_1.z
            .object({
            Official: zod_1.z
                .literal(true)
                .describe("This source was created and published by Paizo as 'official' Pathfinder 2e content (that is, it's official insofar that something can be 'official').")
                .optional(),
            "GM-facing": zod_1.z
                .literal(true)
                .describe("This source is intended to be GM-facing. This is typically due to it being an adventure, module, one-shot, scenario, or the like.")
                .optional(),
            "PFS-legal": zod_1.z
                .literal(true)
                .describe("This source is legal for Pathfinder Society play.")
                .optional(),
            Playtest: zod_1.z
                .literal(true)
                .describe("This source contains playtest, early-access, or otherwise 'unfinished' content.")
                .optional(),
            Ongoing: zod_1.z
                .literal(true)
                .describe("This source is being continually expanded. The data only reflects content only up until the `errataed` date. This is used for 'monster a day' projects and the like, where the content may entail a substantial lag behind the present.")
                .optional(),
            Deprecated: zod_1.z
                .literal(true)
                .describe("This source has been wholly superseded by another version of the same content. This applies when a completely rewritten, revised version of the source exists; simple, minor modifications via errata do not.")
                .optional(),
        })
            .strict()
            .optional(),
    })
        .strict()
        .describe("This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.")
        .optional(),
})
    .strict()
    .describe("Pf2ools' source object.");
