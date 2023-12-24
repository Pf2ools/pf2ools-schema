import { z } from "zod";
export declare const divineIntercession: z.ZodObject<{
    type: z.ZodLiteral<"divineIntercession">;
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
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            source: z.ZodAny;
        }, "strict", z.ZodTypeAny, {
            name: string;
            specifier?: string | undefined;
            source?: any;
        }, {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
            source?: any;
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
            source?: any;
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
    type: "divineIntercession";
    data: {
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
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
    type: "divineIntercession";
    data: {
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
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
