import { z } from "zod";
export const background = z
    .object({
    type: z.literal("background"),
    name: z
        .object({
        primary: z
            .string()
            .min(1)
            .describe("The full name of the statblock or header, exactly as it appears in the source. The only exception is when the source uses stylistic all-caps or no-caps, in which case you should use your judgement and possibly convert it to title-case.")
            .refine((val) => !val.match(/@/g), {
            message: "To weed out `@tag`s.",
        }),
        aliases: z
            .array(z
            .string()
            .min(1)
            .describe("An alternative name for the entity.")
            .refine((val) => !val.match(/@/g), {
            message: "To weed out `@tag`s.",
        }))
            .min(1)
            .describe('An array of alternative names of an entity. Some entities have multiple common names, whether defined in the statblock itself or the surrounding text. Alternative names may also be provided to ease searching, sorting, and filtering with common mistakes (e.g. calling the Aid action "Help").')
            .optional(),
        specifier: z
            .string()
            .min(1)
            .describe('A string to meaningfully disambiguate identically named entities (by necessity if they\'re from the same source). This often occurs, for example, with feats common to multiple classes (e.g. "Attack of Opportunity"). It can also occur when one entity in the source effectively defines multiple entities in data, each of which need to be disambiguated.')
            .refine((val) => !val.match(/@/g), {
            message: "To weed out `@tag`s.",
        })
            .optional(),
    })
        .strict()
        .describe("A combined object to describe an entity's name."),
    source: z
        .object({
        ID: z
            .string()
            .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
            .min(2)
            .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
        }),
        page: z
            .number()
            .int()
            .gte(1)
            .describe("The page number (if any) on which the content begins.")
            .optional(),
    })
        .describe("Source object for a content entity."),
    data: z
        .object({
        traits: z
            .array(z
            .object({
            trait: z
                .string()
                .regex(new RegExp("^[a-z]"))
                .min(1)
                .describe('The bare, keyworded name of the trait (e.g. the "versatile" in "versatile P").'),
            variables: z
                .array(z
                .string()
                .min(1)
                .describe('A trait\'s variable (e.g. "B", "P", and "S" in "modular B, P, or S").'))
                .min(1)
                .describe("The variable elements of a trait in an array.")
                .optional(),
            display: z
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
        entries: z
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
            .describe("Pf2ools' entry value (string or object)."),
    })
        .strict(),
    reference: z
        .object({
        type: z
            .enum(["reprint", "variant", "replacement", "extension"])
            .describe("`reprint`: The statblock is (near) identical to another one, and is intended to be as such.\n`variant`: The statblock is dependent on but distinct to the target (e.g. unique NPCs based on generic monsters).\n`replacement`: The statblock replaces the target entirely everywhere.\n`extension`: The statblock adds additional content to the target but doesn't supersede it (e.g. a new option added to a spell)."),
        target: z
            .object({
            name: z.string().min(1),
            specifier: z.string().min(1).optional(),
            source: z.any(),
        })
            .strict()
            .describe("The content being referenced."),
        modifications: z
            .array(z
            .object({
            type: z
                .string()
                .min(1)
                .describe("The type of modification being applied."),
            target: z
                .object({
                property: z
                    .string()
                    .regex(new RegExp("^\\w+(\\.\\w+)+&"))
                    .describe('A dot-separated hierarchy of properties leading to the target from the top-level `data` (e.g. "castingTime.unit").'),
                name: z
                    .string()
                    .min(1)
                    .describe("The `name` of the target object, if it is found in an array.")
                    .optional(),
            })
                .strict(),
            value: z
                .any()
                .refine((value) => !z.null().safeParse(value).success, "Invalid input: Should NOT be valid against schema")
                .describe("The modification value.")
                .optional(),
        })
            .strict())
            .min(1)
            .describe("An array of changes which, when applied consecutively, transforms the target content into the referring content.")
            .optional(),
    })
        .strict()
        .describe("An explicit reference to some other content, possibly with modifications applied on top. The referenced content's type is always assumed to be the same as the referring content.")
        .optional(),
    tags: z
        .object({
        abilityBoosts: z
            .object({
            abilities: z
                .object({
                Strength: z.literal(true).optional(),
                Dexterity: z.literal(true).optional(),
                Constitution: z.literal(true).optional(),
                Intelligence: z.literal(true).optional(),
                Wisdom: z.literal(true).optional(),
                Charisma: z.literal(true).optional(),
                Free: z.literal(true).optional(),
            })
                .strict()
                .describe("An object containing the types of boost that the background can grant."),
            count: z
                .number()
                .int()
                .gte(1)
                .lte(3)
                .describe("The total number of boosts the background can grant."),
        })
            .strict()
            .describe("The ability boosts the background grants.")
            .optional(),
        trainedSkills: z
            .object({
            skills: z
                .record(z.literal(true))
                .describe("A list of skills in which the background can grant proficiency."),
            count: z
                .number()
                .int()
                .gte(1)
                .lte(4)
                .describe("The total number of distinct skill proficiencies the background can grant."),
        })
            .strict()
            .describe("The skills in which the background can grant proficiency.")
            .optional(),
        gainedFeats: z
            .object({
            options: z
                .array(z
                .object({
                name: z.string().min(1),
                source: z.string().min(1),
            })
                .strict())
                .min(1)
                .describe("A list of feats the background can grant."),
            count: z
                .number()
                .int()
                .gte(1)
                .lte(2)
                .describe("The total number of feats the background can grant."),
        })
            .strict()
            .describe("The feats the background grants.")
            .optional(),
        gainedSpells: z
            .object({
            options: z
                .array(z
                .object({
                name: z.string().min(1),
                source: z.string().min(1),
            })
                .strict())
                .min(1)
                .describe("A list of spells the background can grant."),
            count: z
                .number()
                .int()
                .gte(1)
                .lte(2)
                .describe("The total number of spells the background can grant."),
        })
            .strict()
            .describe("The spells the background grants.")
            .optional(),
        misc: z
            .object({
            "Grants ability": z
                .literal(true)
                .describe("The background background grants an active, voluntary ability.")
                .optional(),
            "Grants equipment": z
                .literal(true)
                .describe("The background grants a free item (not just access or proficiency—the actual concrete thing).")
                .optional(),
            "Grants language": z
                .literal(true)
                .describe("The background grants a language.")
                .optional(),
            "Grants resistance": z
                .literal(true)
                .describe("The background grants a damage resistance.")
                .optional(),
            "Grants sense": z
                .literal(true)
                .describe("The background grants a sense (e.g. darkvision, scent).")
                .optional(),
            "Grants situational benefit": z
                .literal(true)
                .describe("The background grants a passive benefit that isn't otherwise categorisable. For example, this would apply if the background grants a +1 circumstance bonus to Seek on cloudy days.")
                .optional(),
            "Has drawback": z
                .literal(true)
                .describe("The background comes with an objective, mandatory drawback, such as a penalty to some check or the inability to use an item or spell; not something that is both good and bad.")
                .optional(),
            "GM influence": z
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
