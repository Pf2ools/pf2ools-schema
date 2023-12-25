import { z } from "zod";
export declare const skill: z.ZodObject<{
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
}, {
    type: "skill";
    data: {
        entries: (string | {
            type: string;
        })[];
    };
}>;
