import { z } from "zod";
export declare const condition: z.ZodObject<z.objectUtil.extendShape<{
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
}>;
