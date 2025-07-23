import { z } from "zod";
export declare const entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
    type: z.ZodString;
}, z.core.$strip>]>>;
