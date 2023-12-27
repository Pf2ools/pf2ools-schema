import { z } from "zod";
export declare const skill: z.ZodObject<{
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
    tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    type: z.ZodLiteral<"skill">;
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
}, "strict", z.ZodTypeAny, {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    tags?: {} | undefined;
}, {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    tags?: {} | undefined;
}>;
