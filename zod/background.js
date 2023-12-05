"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.background = void 0;
var zod_1 = require("zod");
exports.background = zod_1.z
    .object({
    type: zod_1.z.literal("background"),
    name: zod_1.z
        .object({
        primary: zod_1.z
            .string()
            .min(1)
            .describe("The full name of the statblock or header, exactly as it appears in the source. The only exception is when the source uses stylistic all-caps or no-caps, in which case you should use your judgement and possibly convert it to title-case.")
            .refine(function (val) { return !val.match(/@/g); }, {
            message: "To weed out `@tag`s.",
        }),
        aliases: zod_1.z
            .array(zod_1.z
            .string()
            .min(1)
            .describe("An alternative name for the entity.")
            .refine(function (val) { return !val.match(/@/g); }, {
            message: "To weed out `@tag`s.",
        }))
            .min(1)
            .describe('An array of alternative names of an entity. Some entities have multiple common names, whether defined in the statblock itself or the surrounding text. Alternative names may also be provided to ease searching, sorting, and filtering with common mistakes (e.g. calling the Aid action "Help").')
            .optional(),
        specifier: zod_1.z
            .string()
            .min(1)
            .describe('A string to meaningfully disambiguate identically named entities (by necessity if they\'re from the same source). This often occurs, for example, with feats common to multiple classes (e.g. "Attack of Opportunity"). It can also occur when one entity in the source effectively defines multiple entities in data, each of which need to be disambiguated.')
            .refine(function (val) { return !val.match(/@/g); }, {
            message: "To weed out `@tag`s.",
        })
            .optional(),
        variantOf: zod_1.z
            .object({
            name: zod_1.z.string().min(1).optional(),
            sourceID: zod_1.z.string().min(1).optional(),
        })
            .strict()
            .describe("???")
            .optional(),
    })
        .strict()
        .describe("A combined object to describe an entity's name."),
    source: zod_1.z
        .object({
        ID: zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }),
        page: zod_1.z
            .number()
            .int()
            .gte(1)
            .describe("The page number (if any) on which the content begins.")
            .optional(),
        reprintOf: zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        })
            .optional(),
        expansionOf: zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        })
            .optional(),
        originalOf: zod_1.z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        })
            .optional(),
    })
        .describe("Source object for a content entity."),
    data: zod_1.z
        .object({
        traits: zod_1.z
            .array(zod_1.z
            .object({
            trait: zod_1.z
                .string()
                .regex(new RegExp("^[a-z]"))
                .min(1)
                .describe('The bare, keyworded name of the trait (e.g. the "versatile" in "versatile P").'),
            variables: zod_1.z
                .array(zod_1.z
                .string()
                .min(1)
                .describe('A trait\'s variable (e.g. "B", "P", and "S" in "modular B, P, or S").'))
                .min(1)
                .describe("The variable elements of a trait in an array.")
                .optional(),
            display: zod_1.z
                .string()
                .regex(new RegExp("^[a-z]"))
                .min(1)
                .describe("How the trait should display, if it cannot be trivially inferred from `trait` and `variables`.")
                .optional(),
        })
            .strict()
            .describe("A trait with both keyword and variable elements."))
            .min(1)
            .describe("An array of objects representing a list of traits")
            .optional(),
        entries: zod_1.z
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
            .describe("Pf2ools' entry value (string or object)."),
    })
        .strict(),
    tags: zod_1.z
        .object({
        abilityBoosts: zod_1.z
            .object({
            abilities: zod_1.z
                .object({
                Strength: zod_1.z.literal(true).optional(),
                Dexterity: zod_1.z.literal(true).optional(),
                Constitution: zod_1.z.literal(true).optional(),
                Intelligence: zod_1.z.literal(true).optional(),
                Wisdom: zod_1.z.literal(true).optional(),
                Charisma: zod_1.z.literal(true).optional(),
                Free: zod_1.z.literal(true).optional(),
            })
                .strict()
                .describe("An object containing the types of boost that the background can grant."),
            count: zod_1.z
                .number()
                .int()
                .gte(1)
                .lte(3)
                .describe("The total number of boosts the background can grant."),
        })
            .strict()
            .describe("The ability boosts the background grants.")
            .optional(),
        trainedSkills: zod_1.z
            .object({
            skills: zod_1.z
                .record(zod_1.z.literal(true))
                .describe("A list of skills in which the background can grant proficiency."),
            count: zod_1.z
                .number()
                .int()
                .gte(1)
                .lte(4)
                .describe("The total number of distinct skill proficiencies the background can grant."),
        })
            .strict()
            .describe("The skills in which the background can grant proficiency.")
            .optional(),
        gainedFeats: zod_1.z
            .object({
            options: zod_1.z
                .array(zod_1.z
                .object({
                name: zod_1.z.string().min(1),
                sourceID: zod_1.z.string().min(1),
            })
                .strict())
                .min(1)
                .describe("A list of feats the background can grant."),
            count: zod_1.z
                .number()
                .int()
                .gte(1)
                .lte(2)
                .describe("The total number of feats the background can grant."),
        })
            .strict()
            .describe("The feats the background grants.")
            .optional(),
        gainedSpells: zod_1.z
            .object({
            options: zod_1.z
                .array(zod_1.z
                .object({
                name: zod_1.z.string().min(1),
                sourceID: zod_1.z.string().min(1),
            })
                .strict())
                .min(1)
                .describe("A list of spells the background can grant."),
            count: zod_1.z
                .number()
                .int()
                .gte(1)
                .lte(2)
                .describe("The total number of spells the background can grant."),
        })
            .strict()
            .describe("The spells the background grants.")
            .optional(),
        misc: zod_1.z
            .object({
            "Grants ability": zod_1.z
                .literal(true)
                .describe("The background background grants an active, voluntary ability.")
                .optional(),
            "Grants equipment": zod_1.z
                .literal(true)
                .describe("The background grants a free item (not just access or proficiency—the actual concrete thing).")
                .optional(),
            "Grants language": zod_1.z
                .literal(true)
                .describe("The background grants a language.")
                .optional(),
            "Grants resistance": zod_1.z
                .literal(true)
                .describe("The background grants a damage resistance.")
                .optional(),
            "Grants sense": zod_1.z
                .literal(true)
                .describe("The background grants a sense (e.g. darkvision, scent).")
                .optional(),
            "Grants situational benefit": zod_1.z
                .literal(true)
                .describe("The background grants a passive benefit that isn't otherwise categorisable. For example, this would apply if the background grants a +1 circumstance bonus to Seek on cloudy days.")
                .optional(),
            "Has drawback": zod_1.z
                .literal(true)
                .describe("The background comes with an objective, mandatory drawback, such as a penalty to some check or the inability to use an item or spell; not something that is both good and bad.")
                .optional(),
            "GM influence": zod_1.z
                .literal(true)
                .describe("The GM determines some mechanical aspect of the background. For instance, this would apply if the background specifies that the GM alone chooses one of the boosts or the type of Lore skill it grants.")
                .optional(),
        })
            .strict()
            .describe("Miscellaneous tags")
            .optional(),
    })
        .strict()
        .optional(),
})
    .strict()
    .describe("Pf2ools' background object.");
