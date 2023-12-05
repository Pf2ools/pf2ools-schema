"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deity = void 0;
var zod_1 = require("zod");
exports.deity = zod_1.z
    .object({
    type: zod_1.z.literal("deity"),
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
        category: zod_1.z
            .string()
            .min(1)
            .describe('The broad-scale category for the deity, such as its predominant region (e.g. "Mwangi Gods" for those dominant in the Mwangi Expanse), creature type (e.g. "Archdevils" for archdevil divinities), or religious construct (i.e. "Pantheon" or "Philosophy"). Follow precedent where possible.')
            .optional(),
        pantheonMembers: zod_1.z
            .array(zod_1.z
            .object({ name: zod_1.z.string().min(1), sourceID: zod_1.z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(2)
            .describe("A list of objects representing the deities that compose the pantheon (if it is one).")
            .optional(),
        alignment: zod_1.z
            .object({
            deity: zod_1.z.enum([
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
            follower: zod_1.z
                .array(zod_1.z.enum([
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
        areasOfConcern: zod_1.z
            .array(zod_1.z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Areas of Concern" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        divineFont: zod_1.z
            .object({
            harm: zod_1.z.literal(true).optional(),
            heal: zod_1.z.literal(true).optional(),
        })
            .strict()
            .describe('An object representing the "Divine Font" header of the statblock.')
            .optional(),
        divineAbility: zod_1.z
            .object({
            abilities: zod_1.z
                .record(zod_1.z.literal(true))
                .describe("An object containing the abilities the deity can boost.")
                .optional(),
            entry: zod_1.z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
                .optional(),
        })
            .strict()
            .describe('An object representing the "Divine Ability" header of the statblock.')
            .optional(),
        divineSkill: zod_1.z
            .object({
            skills: zod_1.z
                .record(zod_1.z.literal(true))
                .describe("An object containing the skills the deity can boost.")
                .optional(),
            entry: zod_1.z
                .string()
                .min(1)
                .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.")
                .optional(),
        })
            .strict()
            .describe('An object representing the "Divine Skill" header of the statblock.')
            .optional(),
        domains: zod_1.z
            .array(zod_1.z
            .object({ name: zod_1.z.string().min(1), sourceID: zod_1.z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(1)
            .describe("A list of objects describing the domains a deity encompasses.")
            .optional(),
        alternateDomains: zod_1.z
            .array(zod_1.z
            .object({ name: zod_1.z.string().min(1), sourceID: zod_1.z.string().min(1) })
            .strict()
            .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
            .min(1)
            .describe("A list of objects describing the alternate domains a deity encompasses.")
            .optional(),
        clericSpells: zod_1.z
            .record(zod_1.z.union([
            zod_1.z
                .array(zod_1.z
                .object({
                name: zod_1.z.string().min(1),
                sourceID: zod_1.z.string().min(1),
            })
                .strict()
                .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                .min(1),
            zod_1.z.never(),
        ]))
            .superRefine(function (value, ctx) {
            for (var key in value) {
                var evaluated = false;
                if (key.match(new RegExp("^([1-9]|10)$"))) {
                    evaluated = true;
                    var result = zod_1.z
                        .array(zod_1.z
                        .object({
                        name: zod_1.z.string().min(1),
                        sourceID: zod_1.z.string().min(1),
                    })
                        .strict()
                        .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                        .min(1)
                        .safeParse(value[key]);
                    if (!result.success) {
                        ctx.addIssue({
                            path: __spreadArray(__spreadArray([], ctx.path, true), [key], false),
                            code: "custom",
                            message: "Invalid input: Key matching regex /".concat(key, "/ must match schema"),
                            params: {
                                issues: result.error.issues,
                            },
                        });
                    }
                }
                if (!evaluated) {
                    var result = zod_1.z.never().safeParse(value[key]);
                    if (!result.success) {
                        ctx.addIssue({
                            path: __spreadArray(__spreadArray([], ctx.path, true), [key], false),
                            code: "custom",
                            message: "Invalid input: must match catchall schema",
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
        edicts: zod_1.z
            .array(zod_1.z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Edicts" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        anathema: zod_1.z
            .array(zod_1.z
            .string()
            .min(1)
            .describe("Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s."))
            .min(1)
            .describe('The deities "Anathema" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.')
            .optional(),
        favoredWeapon: zod_1.z
            .object({
            weapons: zod_1.z
                .array(zod_1.z
                .object({
                name: zod_1.z.string().min(1),
                sourceID: zod_1.z.string().min(1),
            })
                .strict()
                .describe("A reference to another statblock. The `type` of the content is typically inferred from the context."))
                .min(1)
                .describe("A list of weapons the deity favours.")
                .optional(),
            unarmedAttacks: zod_1.z
                .array(zod_1.z.string().min(1))
                .min(1)
                .describe("A list of unarmed attacks the deity favours as if they were weapons.")
                .optional(),
            entry: zod_1.z
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
    tags: zod_1.z
        .record(zod_1.z.any())
        .describe("An object describing the content for filtering, searching, and sorting.")
        .optional(),
})
    .strict()
    .describe("Pf2ools' deity, pantheon, and philosophy object.");
