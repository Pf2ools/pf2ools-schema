"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.relicGift = void 0;
var zod_1 = require("zod");
exports.relicGift = zod_1.z
    .object({
    type: zod_1.z.literal("relicGift"),
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
        tier: zod_1.z
            .string()
            .regex(new RegExp("^[A-Z]"))
            .min(1)
            .describe("The relic gift's tier (title case)."),
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
        aspects: zod_1.z
            .array(zod_1.z
            .object({
            name: zod_1.z.string().min(1).describe("The aspect's name."),
            note: zod_1.z
                .string()
                .min(1)
                .describe('A bracketed note qualifying the aspect (e.g. the "azata-themed" in "celestial (azata-themed)").')
                .optional(),
        })
            .strict()
            .describe("An object representing an aspect."))
            .min(1)
            .describe("An array of objects representing the relic gift's aspects."),
        prerequisites: zod_1.z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
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
        itemTypes: zod_1.z
            .object({
            Armor: zod_1.z
                .literal(true)
                .describe("The relic must be a piece or suit of armour to have this gift.")
                .optional(),
            "Worn Item": zod_1.z
                .literal(true)
                .describe("The relic must be a worn item to have this gift.")
                .optional(),
            Weapon: zod_1.z
                .literal(true)
                .describe("The relic must be a weapon to have this gift.")
                .optional(),
        })
            .catchall(zod_1.z.literal(true))
            .describe("An object containing the types of item the relic must be in order to have this gift. The properties should be in title case.")
            .optional(),
        misc: zod_1.z
            .object({
            "Alters relic": zod_1.z
                .literal(true)
                .describe("The gift permanently changes the relic's nature in some way.")
                .optional(),
            "Grants ability": zod_1.z
                .literal(true)
                .describe("The gift grants the character a new, activatable ability (including spells).")
                .optional(),
            "Grants passive attribute": zod_1.z
                .literal(true)
                .describe("The gift grants the character a new Speed, a damage resistance, an automatic bonus, or another always-active ability.")
                .optional(),
            "Is rune": zod_1.z
                .literal(true)
                .describe("The gift mimics the effect of a rune.")
                .optional(),
            "Soul seed": zod_1.z
                .literal(true)
                .describe('The gift is "particularly appropriate" for soul seeds (SoM p230).')
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
    .describe("Pf2ools' relic gift object.");
