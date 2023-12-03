export const background: z.ZodObject<{
    type: z.ZodLiteral<"background">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        variantOf: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
        reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }>;
    data: z.ZodObject<{
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait?: string;
            variables?: string[];
            display?: string;
        }, {
            trait?: string;
            variables?: string[];
            display?: string;
        }>, "many">>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
    }, {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
    }>;
    tags: z.ZodOptional<z.ZodObject<{
        abilityBoosts: z.ZodOptional<z.ZodObject<{
            abilities: z.ZodObject<{
                Strength: z.ZodOptional<z.ZodLiteral<true>>;
                Dexterity: z.ZodOptional<z.ZodLiteral<true>>;
                Constitution: z.ZodOptional<z.ZodLiteral<true>>;
                Intelligence: z.ZodOptional<z.ZodLiteral<true>>;
                Wisdom: z.ZodOptional<z.ZodLiteral<true>>;
                Charisma: z.ZodOptional<z.ZodLiteral<true>>;
                Free: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            }, {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            }>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        }, {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        }>>;
        trainedSkills: z.ZodOptional<z.ZodObject<{
            skills: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            skills?: Record<string, true>;
            count?: number;
        }, {
            skills?: Record<string, true>;
            count?: number;
        }>>;
        gainedFeats: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }>>;
        gainedSpells: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }>>;
        misc: z.ZodOptional<z.ZodObject<{
            "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants equipment": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants language": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants resistance": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants sense": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants situational benefit": z.ZodOptional<z.ZodLiteral<true>>;
            "Has drawback": z.ZodOptional<z.ZodLiteral<true>>;
            "GM influence": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        }, {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        }>>;
    }, "strict", z.ZodTypeAny, {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        };
    }, {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        };
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "background";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        };
    };
}, {
    type?: "background";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
        };
    };
}>;
import { z } from "zod";
