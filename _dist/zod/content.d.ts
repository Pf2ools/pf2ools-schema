import { z } from "zod";
export declare const content: z.ZodObject<{
    type: z.ZodString;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
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
    tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strict", z.ZodTypeAny, {
    type: string;
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    data?: {} | undefined;
    tags?: {} | undefined;
}, {
    type: string;
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    data?: {} | undefined;
    tags?: {} | undefined;
}>;
