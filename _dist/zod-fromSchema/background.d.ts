import { z } from "zod";
export declare const background: z.ZodObject<{
    type: z.ZodLiteral<"background">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
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
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodObject<{
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }>, "many">>;
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
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        }, {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodEffects<z.ZodAny, any, any>>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    }>>;
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
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            }, {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            }>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        }, {
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        }>>;
        trainedSkills: z.ZodOptional<z.ZodObject<{
            skills: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            count: number;
            skills: Record<string, true>;
        }, {
            count: number;
            skills: Record<string, true>;
        }>>;
        gainedFeats: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
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
            options: z.ZodArray<z.ZodObject<{
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
            }>, "many">;
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
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        } | undefined;
        trainedSkills?: {
            count: number;
            skills: Record<string, true>;
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
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        } | undefined;
        trainedSkills?: {
            count: number;
            skills: Record<string, true>;
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
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
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
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    } | undefined;
    tags?: {
        abilityBoosts?: {
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        } | undefined;
        trainedSkills?: {
            count: number;
            skills: Record<string, true>;
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
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
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
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    } | undefined;
    tags?: {
        abilityBoosts?: {
            abilities: {
                Strength?: true | undefined;
                Dexterity?: true | undefined;
                Constitution?: true | undefined;
                Intelligence?: true | undefined;
                Wisdom?: true | undefined;
                Charisma?: true | undefined;
                Free?: true | undefined;
            };
            count: number;
        } | undefined;
        trainedSkills?: {
            count: number;
            skills: Record<string, true>;
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
