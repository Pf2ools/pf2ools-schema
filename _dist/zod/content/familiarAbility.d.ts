import { z } from "zod";
export declare const familiarAbility: z.ZodObject<z.objectUtil.extendShape<{
    type: z.ZodString;
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
    tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, {
    type: z.ZodLiteral<"familiarAbility">;
    data: z.ZodObject<{
        abilityType: z.ZodEnum<["Familiar", "Master"]>;
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
        abilityType: "Familiar" | "Master";
    }, {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
    }>;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
}>, "strict", z.ZodTypeAny, {
    type: "familiarAbility";
    data: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
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
    tags?: {
        misc?: {
            affectsCommunication?: true | undefined;
            affectsSenses?: true | undefined;
            affectsMovement?: true | undefined;
            hasRequirement?: true | undefined;
            grantsAbility?: true | undefined;
            repeatable?: true | undefined;
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
    data: {
        entries: (string | {
            type: string;
        })[];
        abilityType: "Familiar" | "Master";
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
    tags?: {
        misc?: {
            affectsCommunication?: true | undefined;
            affectsSenses?: true | undefined;
            affectsMovement?: true | undefined;
            hasRequirement?: true | undefined;
            grantsAbility?: true | undefined;
            repeatable?: true | undefined;
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
}>;
