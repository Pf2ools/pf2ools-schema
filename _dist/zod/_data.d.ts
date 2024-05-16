import { z } from "zod";
export declare const data: z.ZodUnion<[z.ZodEffects<z.ZodDiscriminatedUnion<"type", [z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"background">;
    data: z.ZodOptional<z.ZodObject<{
        traits: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }>, "many">, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[], {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[]>>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            abilityBoosts: z.ZodOptional<z.ZodObject<{
                abilities: z.ZodEffects<z.ZodRecord<z.ZodUnion<[z.ZodEnum<["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]>, z.ZodLiteral<"free">]>, z.ZodLiteral<true>>, Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>, Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>>;
                count: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            }, {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            }>>;
            trainedSkills: z.ZodOptional<z.ZodObject<{
                skills: z.ZodEffects<z.ZodRecord<z.ZodUnion<[z.ZodEnum<["Acrobatics", "Arcana", "Athletics", "Crafting", "Deception", "Diplomacy", "Intimidation", "Lore", "Medicine", "Nature", "Occultism", "Performance", "Religion", "Society", "Stealth", "Survival", "Thievery"]>, z.ZodLiteral<"Any">]>, z.ZodLiteral<true>>, Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>, Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>>;
                count: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            }, {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            }>>;
            gainedFeats: z.ZodOptional<z.ZodObject<{
                options: z.ZodEffects<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodOptional<z.ZodString>;
                    sourceID: z.ZodEffects<z.ZodString, string, string>;
                }, "strict", z.ZodTypeAny, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }>, "many">, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[], {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[]>;
                count: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            }, {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            }>>;
            gainedSpells: z.ZodOptional<z.ZodObject<{
                options: z.ZodEffects<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodOptional<z.ZodString>;
                    sourceID: z.ZodEffects<z.ZodString, string, string>;
                }, "strict", z.ZodTypeAny, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }>, "many">, {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[], {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[]>;
                count: z.ZodNumber;
            }, "strict", z.ZodTypeAny, {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            }, {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            }>>;
            misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants equipment": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants language": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants resistance": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants sense": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants situational benefit": z.ZodOptional<z.ZodLiteral<true>>;
                "Has drawback": z.ZodOptional<z.ZodLiteral<true>>;
                "GM influence": z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            }, {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            }>, {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            }, {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        }, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        }>, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        }, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "background";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "background";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"condition">;
    data: z.ZodOptional<z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            group: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodObject<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>, z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>, z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>>;
        }, "strict", z.ZodTypeAny, {
            group?: z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }, {
            group?: z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }>, {
            group?: z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }, {
            group?: z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "condition";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "condition";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"domain">;
    data: z.ZodOptional<z.ZodObject<{
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    }, {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "domain";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "domain";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"event">;
    data: z.ZodOptional<z.ZodObject<{
        level: z.ZodNumber;
        traits: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }>, "many">, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[], {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[]>>;
        applicableSkills: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            skill: z.ZodEnum<["Acrobatics", "Arcana", "Athletics", "Crafting", "Deception", "Diplomacy", "Intimidation", "Lore", "Medicine", "Nature", "Occultism", "Performance", "Religion", "Society", "Stealth", "Survival", "Thievery"]>;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }>, "many">, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[], {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[]>>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "event";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "event";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"familiarAbility">;
    data: z.ZodOptional<z.ZodObject<{
        abilityType: z.ZodEnum<["Familiar", "Master"]>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                affectsCommunication: z.ZodOptional<z.ZodLiteral<true>>;
                affectsSenses: z.ZodOptional<z.ZodLiteral<true>>;
                affectsMovement: z.ZodOptional<z.ZodLiteral<true>>;
                hasRequirement: z.ZodOptional<z.ZodLiteral<true>>;
                grantsAbility: z.ZodOptional<z.ZodLiteral<true>>;
                repeatable: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            }, {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            }>, {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            }, {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        }, {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        }>, {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        }, {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "familiarAbility";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "familiarAbility";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"relicGift">;
    data: z.ZodOptional<z.ZodObject<{
        tier: z.ZodString;
        traits: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }>, "many">, {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[], {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[]>>;
        aspects: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            note?: string | undefined;
        }, {
            name: string;
            note?: string | undefined;
        }>, "many">;
        prerequisites: z.ZodOptional<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            itemTypes: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodObject<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>, z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>, z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip">>>;
            misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                "Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
                "Is rune": z.ZodOptional<z.ZodLiteral<true>>;
                "Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            }, {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            }>, {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            }, {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }>, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }, {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    }>>;
}>, "strict", z.ZodTypeAny, {
    type: "relicGift";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "relicGift";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
    name: z.ZodEffects<z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodUnion<[z.ZodString, z.ZodNumber, z.ZodObject<{}, "passthrough", z.ZodTypeAny, z.objectOutputType<{}, z.ZodTypeAny, "passthrough">, z.objectInputType<{}, z.ZodTypeAny, "passthrough">>, z.ZodArray<z.ZodAny, "many">, z.ZodBoolean]>>;
        }, "strip", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }>, "many">, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[], {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[]>>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    }>>;
}, {
    type: z.ZodLiteral<"skill">;
    data: z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
    }, {
        entries: (string | {
            type: string;
        })[];
    }>;
}>, "strict", z.ZodTypeAny, {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>]>, {
    type: "background";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "condition";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectOutputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "domain";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "event";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "familiarAbility";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "relicGift";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectOutputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectOutputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}, {
    type: "background";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Grants equipment"?: true | undefined;
                "Grants language"?: true | undefined;
                "Grants resistance"?: true | undefined;
                "Grants sense"?: true | undefined;
                "Grants situational benefit"?: true | undefined;
                "Has drawback"?: true | undefined;
                "GM influence"?: true | undefined;
            } | undefined;
            abilityBoosts?: {
                abilities: Partial<Record<"Strength" | "Dexterity" | "Constitution" | "Intelligence" | "Wisdom" | "Charisma" | "free", true>>;
                count: number;
            } | undefined;
            trainedSkills?: {
                count: number;
                skills: Partial<Record<"Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery" | "Any", true>>;
            } | undefined;
            gainedFeats?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
            gainedSpells?: {
                options: {
                    name: string;
                    sourceID: string;
                    specifier?: string | undefined;
                }[];
                count: number;
            } | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "condition";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        _tags?: {
            group?: z.objectInputType<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "domain";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "event";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "familiarAbility";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
        _tags?: {
            misc?: {
                affectsCommunication?: true | undefined;
                affectsSenses?: true | undefined;
                affectsMovement?: true | undefined;
                hasRequirement?: true | undefined;
                grantsAbility?: true | undefined;
                repeatable?: true | undefined;
            } | undefined;
        } | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "relicGift";
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    data?: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        _tags?: {
            misc?: {
                "Grants ability"?: true | undefined;
                "Alters relic"?: true | undefined;
                "Grants passive attribute"?: true | undefined;
                "Is rune"?: true | undefined;
                "Soul seed"?: true | undefined;
            } | undefined;
            itemTypes?: z.objectInputType<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.ZodLiteral<true>, "strip"> | undefined;
        } | undefined;
        traits?: {
            trait: string;
            display?: string | undefined;
            variables?: string[] | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    } | undefined;
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
} | {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: string | number | boolean | any[] | z.objectInputType<{}, z.ZodTypeAny, "passthrough"> | undefined;
        }[] | undefined;
    } | undefined;
}>, z.ZodDiscriminatedUnion<"type", [z.ZodObject<{
    type: z.ZodLiteral<"license">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        short: string;
        full: string;
    }, {
        short: string;
        full: string;
    }>;
    data: z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
    }, {
        entries: (string | {
            type: string;
        })[];
    }>;
}, "strict", z.ZodTypeAny, {
    type: "license";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    title: {
        short: string;
        full: string;
    };
    ID: string;
}, {
    type: "license";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    title: {
        short: string;
        full: string;
    };
    ID: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"source">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodEffects<z.ZodString, string, string>;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        short: string;
        full: string;
    }, {
        short: string;
        full: string;
    }>;
    data: z.ZodObject<{
        released: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        errataed: z.ZodOptional<z.ZodString>;
        added: z.ZodString;
        modified: z.ZodString;
        URL: z.ZodString;
        groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        licenseID: z.ZodEffects<z.ZodString, string, string>;
        copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        publisher: z.ZodOptional<z.ZodString>;
        converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                Comic: z.ZodOptional<z.ZodLiteral<true>>;
                "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            }, {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            }>, {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            }, {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            }>>;
            status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
                "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
                Invalid: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            }, {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            }>, {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            }, {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            }>>;
            misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
                Official: z.ZodOptional<z.ZodLiteral<true>>;
                "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
                "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
                Playtest: z.ZodOptional<z.ZodLiteral<true>>;
                Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
                NSFW: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            }, {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            }>, {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            }, {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        }, {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        }>, {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        }, {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        released: string;
        added: string;
        modified: string;
        URL: string;
        licenseID: string;
        version?: string | undefined;
        errataed?: string | undefined;
        groupIDs?: [string, ...string[]] | undefined;
        requiredSourceIDs?: [string, ...string[]] | undefined;
        copyright?: (string | {
            type: string;
        })[] | undefined;
        authors?: [string, ...string[]] | undefined;
        publisher?: string | undefined;
        converters?: [string, ...string[]] | undefined;
        _tags?: {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        } | undefined;
    }, {
        released: string;
        added: string;
        modified: string;
        URL: string;
        licenseID: string;
        version?: string | undefined;
        errataed?: string | undefined;
        groupIDs?: [string, ...string[]] | undefined;
        requiredSourceIDs?: [string, ...string[]] | undefined;
        copyright?: (string | {
            type: string;
        })[] | undefined;
        authors?: [string, ...string[]] | undefined;
        publisher?: string | undefined;
        converters?: [string, ...string[]] | undefined;
        _tags?: {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        } | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "source";
    data: {
        released: string;
        added: string;
        modified: string;
        URL: string;
        licenseID: string;
        version?: string | undefined;
        errataed?: string | undefined;
        groupIDs?: [string, ...string[]] | undefined;
        requiredSourceIDs?: [string, ...string[]] | undefined;
        copyright?: (string | {
            type: string;
        })[] | undefined;
        authors?: [string, ...string[]] | undefined;
        publisher?: string | undefined;
        converters?: [string, ...string[]] | undefined;
        _tags?: {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        } | undefined;
    };
    title: {
        short: string;
        full: string;
    };
    ID: string;
}, {
    type: "source";
    data: {
        released: string;
        added: string;
        modified: string;
        URL: string;
        licenseID: string;
        version?: string | undefined;
        errataed?: string | undefined;
        groupIDs?: [string, ...string[]] | undefined;
        requiredSourceIDs?: [string, ...string[]] | undefined;
        copyright?: (string | {
            type: string;
        })[] | undefined;
        authors?: [string, ...string[]] | undefined;
        publisher?: string | undefined;
        converters?: [string, ...string[]] | undefined;
        _tags?: {
            status?: {
                "Missing content"?: true | undefined;
                "Missing tags"?: true | undefined;
                Invalid?: true | undefined;
            } | undefined;
            publicationType?: {
                Comic?: true | undefined;
                "Blog post"?: true | undefined;
            } | undefined;
            misc?: {
                legacyRuleset?: true | undefined;
                Official?: true | undefined;
                "GM-facing"?: true | undefined;
                "PFS-legal"?: true | undefined;
                Playtest?: true | undefined;
                Ongoing?: true | undefined;
                Deprecated?: true | undefined;
                NSFW?: true | undefined;
            } | undefined;
        } | undefined;
    };
    title: {
        short: string;
        full: string;
    };
    ID: string;
}>, z.ZodObject<{
    type: z.ZodLiteral<"sourceGroup">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        short: string;
        full: string;
    }, {
        short: string;
        full: string;
    }>;
    data: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        publisher: z.ZodString;
        _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            misc: z.ZodEffects<z.ZodObject<{
                Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            }, {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            }>, {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            }, {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            }>;
        }, "strict", z.ZodTypeAny, {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        }, {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        }>, {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        }, {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        }>>;
    }, "strict", z.ZodTypeAny, {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    }, {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    }>, {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    }, {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    type: "sourceGroup";
    title: {
        short: string;
        full: string;
    };
    ID: string;
    data?: {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    } | undefined;
}, {
    type: "sourceGroup";
    title: {
        short: string;
        full: string;
    };
    ID: string;
    data?: {
        publisher: string;
        _tags?: {
            misc: {
                Ongoing?: true | undefined;
                Adventure?: true | undefined;
            };
        } | undefined;
    } | undefined;
}>]>]>;
