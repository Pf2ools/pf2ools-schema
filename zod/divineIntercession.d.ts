export const divineIntercession: z.ZodObject<{
    type: z.ZodLiteral<"divineIntercession">;
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
        preamble: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Minor Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Moderate Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Major Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Minor Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Moderate Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Major Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
    }, "strict", z.ZodTypeAny, {
        preamble?: (string | {
            type?: string;
        })[];
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
    }, {
        preamble?: (string | {
            type?: string;
        })[];
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
    }>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    type?: "divineIntercession";
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
        preamble?: (string | {
            type?: string;
        })[];
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
    };
    tags?: Record<string, any>;
}, {
    type?: "divineIntercession";
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
        preamble?: (string | {
            type?: string;
        })[];
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
    };
    tags?: Record<string, any>;
}>;
import { z } from "zod";
