import { z } from "zod";
export declare const divineIntercession: z.ZodObject<z.objectUtil.extendShape<{
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
    type: z.ZodLiteral<"divineIntercession">;
    data: z.ZodEffects<z.ZodObject<{
        deity: z.ZodObject<{
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
        preamble: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Minor Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Moderate Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Major Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Minor Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Moderate Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
        "Major Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
    }, "strict", z.ZodTypeAny, {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
    }, {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
    }>, {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
    }, {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
    }>;
}>, "strict", z.ZodTypeAny, {
    type: "divineIntercession";
    data: {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
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
    tags?: {} | undefined;
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
    type: "divineIntercession";
    data: {
        deity: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: (string | {
            type: string;
        })[] | undefined;
        "Minor Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Major Boon"?: (string | {
            type: string;
        })[] | undefined;
        "Minor Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Moderate Curse"?: (string | {
            type: string;
        })[] | undefined;
        "Major Curse"?: (string | {
            type: string;
        })[] | undefined;
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
    tags?: {} | undefined;
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
