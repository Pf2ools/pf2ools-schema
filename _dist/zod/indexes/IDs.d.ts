import { z } from "zod";
export declare const dataSummary: z.ZodObject<{
    type: z.ZodString;
    fullTitle: z.ZodString;
    path: z.ZodString;
    official: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
export declare const IDs: z.ZodRecord<z.ZodString, z.ZodObject<{
    type: z.ZodString;
    fullTitle: z.ZodString;
    path: z.ZodString;
    official: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>>;
