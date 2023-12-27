import { z } from "zod";
export declare const shortNames: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    fullTitle: z.ZodString;
    path: z.ZodString;
    official: z.ZodNullable<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    type: string;
    path: string;
    fullTitle: string;
    official: boolean | null;
}, {
    type: string;
    path: string;
    fullTitle: string;
    official: boolean | null;
}>, "many">>;
