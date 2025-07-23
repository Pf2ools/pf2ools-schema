import { z } from "zod";
export declare const license: z.ZodObject<{
    type: z.ZodLiteral<"license">;
    ID: z.ZodString;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, z.core.$strict>;
    data: z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
    }, z.core.$strict>;
}, z.core.$strict>;
