import { z } from "zod";
export const deity = z
    .object({
    type: z.literal("deity"),
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
        category: z
            .string()
            .min(1)
            .describe('The broad-scale category for the deity, such as its predominant region (e.g. "Mwangi Gods" for those dominant in the Mwangi Expanse), creature type (e.g. "Archdevils" for archdevil divinities), or religious construct (i.e. "Pantheon" or "Philosophy"). Follow precedent where possible.')
            .optional(),
        pantheonMembers: z
            .array(z
            .object({ name: z.string().min(1), source: z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(2)
            .describe("A list of objects representing the deities that compose the pantheon (if it is one).")
            .optional(),
        alignment: z
            .object({
            deity: z.enum([
                "LG",
                "NG",
                "CG",
                "LN",
                "N",
                "CN",
                "LE",
                "NE",
                "CE",
                "U",
            ]),
            follower: z
                .array(z.enum([
                "LG",
                "NG",
                "CG",
                "LN",
                "N",
                "CN",
                "LE",
                "NE",
                "CE",
                "U",
            ]))
                .min(1)
                .optional(),
        })
            .strict()
            .optional(),
        areasOfConcern: z
            .array(z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Areas of Concern" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        divineFont: z
            .object({
            harm: z.literal(true).optional(),
            heal: z.literal(true).optional(),
        })
            .strict()
            .describe('An object representing the "Divine Font" header of the statblock.')
            .optional(),
        divineAbility: z
            .object({
            abilities: z
                .record(z.literal(true))
                .describe("An object containing the abilities the deity can boost.")
                .optional(),
            entry: z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
                .optional(),
        })
            .strict()
            .describe('An object representing the "Divine Ability" header of the statblock.')
            .optional(),
        divineSkill: z
            .object({
            skills: z
                .record(z.literal(true))
                .describe("An object containing the skills the deity can boost.")
                .optional(),
            entry: z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
                .optional(),
        })
            .strict()
            .describe('An object representing the "Divine Skill" header of the statblock.')
            .optional(),
        domains: z
            .array(z
            .object({ name: z.string().min(1), source: z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(1)
            .describe("A list of objects describing the domains a deity encompasses.")
            .optional(),
        alternateDomains: z
            .array(z
            .object({ name: z.string().min(1), source: z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(1)
            .describe("A list of objects describing the alternate domains a deity encompasses.")
            .optional(),
        clericSpells: z
            .record(z.union([
            z
                .array(z
                .object({
                name: z.string().min(1),
                source: z.string().min(1),
            })
                .strict()
                .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                .min(1),
            z.never(),
        ]))
            .superRefine((value, ctx) => {
            for (const key in value) {
                let evaluated = false;
                if (key.match(new RegExp("^([1-9]|10)$"))) {
                    evaluated = true;
                    const result = z
                        .array(z
                        .object({
                        name: z.string().min(1),
                        source: z.string().min(1),
                    })
                        .strict()
                        .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                        .min(1)
                        .safeParse(value[key]);
                    if (!result.success) {
                        ctx.addIssue({
                            path: [...ctx.path, key],
                            code: "custom",
                            message: `Invalid input: Key matching regex /${key}/ must match schema`,
                            params: {
                                issues: result.error.issues,
                            },
                        });
                    }
                }
                if (!evaluated) {
                    const result = z.never().safeParse(value[key]);
                    if (!result.success) {
                        ctx.addIssue({
                            path: [...ctx.path, key],
                            code: "custom",
                            message: `Invalid input: must match catchall schema`,
                            params: {
                                issues: result.error.issues,
                            },
                        });
                    }
                }
            }
        })
            .describe("An object representing the cleric spells this deity grants. The properties represent the spell levels.")
            .optional(),
        edicts: z
            .array(z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Edicts" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        anathema: z
            .array(z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Anathema" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        favoredWeapon: z
            .object({
            weapons: z
                .array(z
                .object({
                name: z.string().min(1),
                source: z.string().min(1),
            })
                .strict()
                .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                .min(1)
                .describe("A list of weapons the deity favours.")
                .optional(),
            unarmedAttacks: z
                .array(z.string().min(1))
                .min(1)
                .describe("A list of unarmed attacks the deity favours as if they were weapons.")
                .optional(),
            entry: z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
                .optional(),
        })
            .strict()
            .describe('An object representing the "Favored Weapon" header of the statblock.')
            .optional(),
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
        .record(z.any())
        .describe("An object describing the content for filtering, searching, and sorting.")
        .optional(),
})
    .strict()
    .describe("Pf2ools' deity, pantheon, and philosophy object.");
