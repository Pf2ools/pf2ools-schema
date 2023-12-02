export const license: z.ZodObject<{
    type: z.ZodLiteral<"license">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        full?: string;
        short?: string;
    }, {
        full?: string;
        short?: string;
    }>;
    data: z.ZodObject<{
        entries: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        entries?: (string | {
            type?: string;
        })[];
    }, {
        entries?: (string | {
            type?: string;
        })[];
    }>;
}, "strict", z.ZodTypeAny, {
    type?: "license";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        entries?: (string | {
            type?: string;
        })[];
    };
}, {
    type?: "license";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        entries?: (string | {
            type?: string;
        })[];
    };
}>;
import { z } from "zod";
