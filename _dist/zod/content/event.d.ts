import { z } from "zod";
export declare const event: z.ZodObject<z.objectUtil.extendShape<{
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
    reference: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
    }>, {
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
}>;
