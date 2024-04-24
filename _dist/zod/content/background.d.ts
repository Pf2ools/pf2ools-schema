import { z } from "zod";
export declare const background: z.ZodObject<{
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
    name: z.ZodObject<{
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
    }>;
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
    type: z.ZodLiteral<"background">;
    data: z.ZodObject<{
        traits: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }>, "many">, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[], {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
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
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
    }>;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
    }, {
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
    }>, {
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
    }, {
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
    }>>;
}, "strict", z.ZodTypeAny, {
    type: "background";
    data: {
        entries: (string | {
            type: string;
        })[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
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
    tags?: {
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
    } | undefined;
}, {
    type: "background";
    data: {
        entries: (string | {
            type: string;
        })[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
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
    tags?: {
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
    } | undefined;
}>;
