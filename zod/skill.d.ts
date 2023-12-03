export const skill: z.ZodObject<{
    type: z.ZodLiteral<"skill">;
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
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries?: (string | {
            type?: string;
        })[];
    }, {
        entries?: (string | {
            type?: string;
        })[];
    }>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    type?: "skill";
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
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: Record<string, any>;
}, {
    type?: "skill";
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
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: Record<string, any>;
}>;
import { z } from "zod";
