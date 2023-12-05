import { z } from "zod";
export declare const skill: z.ZodObject<{
    type: z.ZodLiteral<"skill">;
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
    }, {
        entries: (string | {
            type: string;
        })[];
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
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
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
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
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
