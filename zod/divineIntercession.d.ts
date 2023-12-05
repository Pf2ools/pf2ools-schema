import { z } from "zod";
export declare const divineIntercession: z.ZodObject<{
    type: z.ZodLiteral<"divineIntercession">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        variantOf: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string | undefined;
            sourceID?: string | undefined;
        }, {
            name?: string | undefined;
            sourceID?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
        reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    }, {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
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
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
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
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    };
    tags?: Record<string, any> | undefined;
}, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
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
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    };
    tags?: Record<string, any> | undefined;
}>;
