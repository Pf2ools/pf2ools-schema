export const deity: z.ZodObject<{
    type: z.ZodLiteral<"deity">;
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
        category: z.ZodOptional<z.ZodString>;
        pantheonMembers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        alignment: z.ZodOptional<z.ZodObject<{
            deity: z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>;
            follower: z.ZodOptional<z.ZodArray<z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>, "many">>;
        }, "strict", z.ZodTypeAny, {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        }, {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        }>>;
        areasOfConcern: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        divineFont: z.ZodOptional<z.ZodObject<{
            harm: z.ZodOptional<z.ZodLiteral<true>>;
            heal: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            harm?: true;
            heal?: true;
        }, {
            harm?: true;
            heal?: true;
        }>>;
        divineAbility: z.ZodOptional<z.ZodObject<{
            abilities: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            abilities?: Record<string, true>;
            entry?: string;
        }, {
            abilities?: Record<string, true>;
            entry?: string;
        }>>;
        divineSkill: z.ZodOptional<z.ZodObject<{
            skills: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skills?: Record<string, true>;
            entry?: string;
        }, {
            skills?: Record<string, true>;
            entry?: string;
        }>>;
        domains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        alternateDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        clericSpells: z.ZodOptional<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">, z.ZodNever]>>, Record<string, {
            name?: string;
            sourceID?: string;
        }[]>, Record<string, {
            name?: string;
            sourceID?: string;
        }[]>>>;
        edicts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        anathema: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        favoredWeapon: z.ZodOptional<z.ZodObject<{
            weapons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">>;
            unarmedAttacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        }, {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
    }, {
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
    }>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    type?: "deity";
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
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
    };
    tags?: Record<string, any>;
}, {
    type?: "deity";
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
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
    };
    tags?: Record<string, any>;
}>;
import { z } from "zod";
