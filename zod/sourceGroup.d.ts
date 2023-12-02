export const sourceGroup: z.ZodObject<{
    type: z.ZodOptional<z.ZodLiteral<"sourceGroup">>;
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
    data: z.ZodOptional<z.ZodObject<{
        publisher: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        publisher?: string;
    }, {
        publisher?: string;
    }>>;
    tags: z.ZodOptional<z.ZodObject<{
        misc: z.ZodOptional<z.ZodObject<{
            Adventure: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Adventure?: true;
            Ongoing?: true;
        }, {
            Adventure?: true;
            Ongoing?: true;
        }>>;
    }, "strict", z.ZodTypeAny, {
        misc?: {
            Adventure?: true;
            Ongoing?: true;
        };
    }, {
        misc?: {
            Adventure?: true;
            Ongoing?: true;
        };
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "sourceGroup";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        publisher?: string;
    };
    tags?: {
        misc?: {
            Adventure?: true;
            Ongoing?: true;
        };
    };
}, {
    type?: "sourceGroup";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        publisher?: string;
    };
    tags?: {
        misc?: {
            Adventure?: true;
            Ongoing?: true;
        };
    };
}>;
import { z } from "zod";
