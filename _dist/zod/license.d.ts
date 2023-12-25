import { z } from "zod";
export declare const license: z.ZodObject<{
    type: z.ZodLiteral<"license">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        short: string;
        full: string;
    }, {
        short: string;
        full: string;
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
}, "strict", z.ZodTypeAny, {
    type: "license";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    ID: string;
    title: {
        short: string;
        full: string;
    };
}, {
    type: "license";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
    ID: string;
    title: {
        short: string;
        full: string;
    };
}>;
