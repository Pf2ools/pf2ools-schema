import { z } from "zod";
export declare const deity: z.ZodObject<{
    type: z.ZodLiteral<"deity">;
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
        category: z.ZodOptional<z.ZodString>;
        pantheonMembers: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        alignment: z.ZodOptional<z.ZodObject<{
            deity: z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>;
            follower: z.ZodOptional<z.ZodArray<z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>, "many">>;
        }, "strict", z.ZodTypeAny, {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        }, {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        }>>;
        areasOfConcern: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        divineFont: z.ZodOptional<z.ZodObject<{
            harm: z.ZodOptional<z.ZodLiteral<true>>;
            heal: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            harm?: true | undefined;
            heal?: true | undefined;
        }, {
            harm?: true | undefined;
            heal?: true | undefined;
        }>>;
        divineAbility: z.ZodOptional<z.ZodObject<{
            abilities: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        }, {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        }>>;
        divineSkill: z.ZodOptional<z.ZodObject<{
            skills: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        }, {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        }>>;
        domains: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        alternateDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }>, "many">>;
        clericSpells: z.ZodOptional<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodObject<{
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
        }>, "many">, z.ZodNever]>>, Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]>, Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]>>>;
        edicts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        anathema: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        favoredWeapon: z.ZodOptional<z.ZodObject<{
            weapons: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            }>, "many">>;
            unarmedAttacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        }, {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        category?: string | undefined;
        pantheonMembers?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alignment?: {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        } | undefined;
        areasOfConcern?: string[] | undefined;
        divineFont?: {
            harm?: true | undefined;
            heal?: true | undefined;
        } | undefined;
        divineAbility?: {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        divineSkill?: {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        domains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alternateDomains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        clericSpells?: Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]> | undefined;
        edicts?: string[] | undefined;
        anathema?: string[] | undefined;
        favoredWeapon?: {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        } | undefined;
    }, {
        category?: string | undefined;
        pantheonMembers?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alignment?: {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        } | undefined;
        areasOfConcern?: string[] | undefined;
        divineFont?: {
            harm?: true | undefined;
            heal?: true | undefined;
        } | undefined;
        divineAbility?: {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        divineSkill?: {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        domains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alternateDomains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        clericSpells?: Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]> | undefined;
        edicts?: string[] | undefined;
        anathema?: string[] | undefined;
        favoredWeapon?: {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        } | undefined;
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
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    type: "deity";
    data: {
        category?: string | undefined;
        pantheonMembers?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alignment?: {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        } | undefined;
        areasOfConcern?: string[] | undefined;
        divineFont?: {
            harm?: true | undefined;
            heal?: true | undefined;
        } | undefined;
        divineAbility?: {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        divineSkill?: {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        domains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alternateDomains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        clericSpells?: Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]> | undefined;
        edicts?: string[] | undefined;
        anathema?: string[] | undefined;
        favoredWeapon?: {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        } | undefined;
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
    tags?: Record<string, any> | undefined;
}, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    type: "deity";
    data: {
        category?: string | undefined;
        pantheonMembers?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alignment?: {
            deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
        } | undefined;
        areasOfConcern?: string[] | undefined;
        divineFont?: {
            harm?: true | undefined;
            heal?: true | undefined;
        } | undefined;
        divineAbility?: {
            abilities?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        divineSkill?: {
            skills?: Record<string, true> | undefined;
            entry?: string | undefined;
        } | undefined;
        domains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        alternateDomains?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[] | undefined;
        clericSpells?: Record<string, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }[]> | undefined;
        edicts?: string[] | undefined;
        anathema?: string[] | undefined;
        favoredWeapon?: {
            weapons?: {
                name: string;
                sourceID: string;
                specifier?: string | undefined;
            }[] | undefined;
            unarmedAttacks?: string[] | undefined;
            entry?: string | undefined;
        } | undefined;
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
    tags?: Record<string, any> | undefined;
}>;
