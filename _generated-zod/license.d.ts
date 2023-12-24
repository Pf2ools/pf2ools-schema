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
        entries: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        entries?: (string | {
            type: string;
        })[] | undefined;
    }, {
        entries?: (string | {
            type: string;
        })[] | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "license";
    data: {
        entries?: (string | {
            type: string;
        })[] | undefined;
    };
    ID: string;
    title: {
        short: string;
        full: string;
    };
}, {
    type: "license";
    data: {
        entries?: (string | {
            type: string;
        })[] | undefined;
    };
    ID: string;
    title: {
        short: string;
        full: string;
    };
}>;
