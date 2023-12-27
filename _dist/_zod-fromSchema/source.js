import { z } from "zod";
export const source = z
    .object({
    type: z.literal("source"),
    ID: z
        .string()
        .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
        .min(2)
        .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
        message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
    }),
    title: z
        .object({
        full: z
            .string()
            .min(1)
            .describe("The source's full, human-readable name. Title case is preferred but anything can be used within reason.")
            .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message: 'These are reserved filenames in Windows. At some point, someone will save a source file and/or its content as "<name>.json" and won\'t realise the hell this causes for Windows users. Unlikely any source is named this, though ¯\\_(ツ)_/¯',
        }),
        short: z
            .string()
            .min(1)
            .max(8)
            .describe("An abbreviation or other shortening of the source's name for display purposes."),
    })
        .strict()
        .describe("An object representing the source's name."),
    data: z
        .object({
        released: z
            .string()
            .describe("The source's publication date (YYYY-MM-DD). For content with a staggered release or early-access program, use the date the source was first made publicly available."),
        version: z
            .string()
            .min(1)
            .describe("The target version for the converted data (if any). This value serves akin to a `specifier` in case multiple distinct versions of the same source are maintained. Leave undefined if there has only ever been one version.")
            .optional(),
        errataed: z
            .string()
            .describe("The date (YYYY-MM-DD) of the source's most recent errata applied to Pf2ools' content. Leave undefined if the source has never been errataed.")
            .optional(),
        added: z
            .string()
            .describe("The date (YYYY-MM-DD) the source was first made available on the Pf2ools ecosystem (complete or otherwise)."),
        modified: z
            .string()
            .describe("The date (YYYY-MM-DD) the source's content-data as maintained by the Pf2ools project was last modified."),
        URL: z
            .string()
            .describe('A website on which the content can be legally and publicly viewed, downloaded, or purchased. A first-party website (i.e. one controlled by the authors) is preferred. If the Pf2ools source is the authoritative version for distribution, you can use "https://github.com/pf2ools/pf2ools-data".')
            .optional(),
        groupIDs: z
            .array(z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }))
            .min(1)
            .describe('A list of `ID`s of the source\'s parent groups (if any). This is used for a source that is one piece of a larger, clearly defined, multi-part series. For instance, "Extinction Curse 1: The Show Must Go On" belongs to the "Extinction Curse" series ("EC"), and "Lost Omens: Travel Guide" belongs to the "Lost Omens" series ("LO").')
            .optional(),
        requiredSourceIDs: z
            .array(z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }))
            .min(1)
            .describe("A list of `ID`s of other homebrew sources that this source requires. The requirement is strict: a source that adds a subclass to another, external homebrew class would list that class' source ID; sources that merely add complementary subclasses to the same core class should be instead linked via a `sourceGroup`.")
            .optional(),
        licenseID: z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }),
        copyright: z
            .array(z.union([
            z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."),
            z
                .object({ type: z.string().min(1) })
                .describe("A paragraph with a header or some particular formatting."),
        ]))
            .min(1)
            .describe("Pf2ools' entry value (string or object).")
            .optional(),
        authors: z
            .array(z
            .string()
            .min(2)
            .describe("An author's name. Online handles should be reasonably indicated."))
            .min(1)
            .describe("A list of unique authors as credited by the source itself.")
            .optional(),
        publisher: z
            .string()
            .min(2)
            .describe("The name of the source's publishing company or group (if any).")
            .optional(),
        converters: z
            .array(z
            .string()
            .min(2)
            .describe("A converter's name. Discord usernames are strongly prefered; other online handles should be reasonably indicated."))
            .min(1)
            .describe("A list of unique Pf2ools contributors who converted this source. If multiple converters exist, choose one 'principal' to go first in the case of questions or bug reports. This is particularly used for homebrew, both to attribute work done and to help organise updates.")
            .optional(),
    })
        .strict(),
    tags: z
        .object({
        publicationType: z
            .object({
            Comic: z
                .literal(true)
                .describe("The source is content bundled with a comic.")
                .optional(),
            "Blog post": z
                .literal(true)
                .describe("The source is a blog post or another similar type of short, online article.")
                .optional(),
        })
            .strict()
            .describe("An object representing the type of publication the source can be categorised as. This is most relevant when the game content is bundled along with something that isn't a typical Pathfinder rulebook.")
            .optional(),
        status: z
            .object({
            "Missing content": z
                .literal(true)
                .describe("This source is only partially converted right now (i.e. it lacks some content), but, one day, could be completely up-to-date.")
                .optional(),
            "Missing tags": z
                .literal(true)
                .describe("The converted content this source contains isn't completely tagged, even if it all displays correctly.")
                .optional(),
            Invalid: z
                .literal(true)
                .describe("This source's data is invalid and either contains serious schema errors or is generally malformed. It exists for archival purposes only and is unmaintained.")
                .optional(),
        })
            .strict()
            .describe("An object representing the source's conversion status, if it is at all imperfect.")
            .optional(),
        misc: z
            .object({
            Official: z
                .literal(true)
                .describe("This source was created and published by Paizo as 'official' Pathfinder 2e content (that is, it's official insofar that something can be 'official').")
                .optional(),
            "GM-facing": z
                .literal(true)
                .describe("This source is intended to be GM-facing. This is typically due to it being an adventure, module, one-shot, scenario, or the like.")
                .optional(),
            "PFS-legal": z
                .literal(true)
                .describe("This source is legal for Pathfinder Society play.")
                .optional(),
            Playtest: z
                .literal(true)
                .describe("This source contains playtest, early-access, or otherwise 'unfinished' content.")
                .optional(),
            Ongoing: z
                .literal(true)
                .describe("This source is being continually expanded. The data only reflects content only up until the `errataed` date. This is used for 'monster a day' projects and the like, where the content may entail a substantial lag behind the present.")
                .optional(),
            Deprecated: z
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
