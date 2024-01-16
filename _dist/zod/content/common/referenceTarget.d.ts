import { z } from "zod";
export declare const referenceTarget: z.ZodObject<{
    name: z.ZodString;
    specifier: z.ZodOptional<z.ZodString>;
    sourceID: z.ZodEffects<z.ZodString, string, string>;
}, "strict", z.ZodTypeAny, {
    name: string;
    sourceID: string;
    specifier?: string | undefined;
}, {
    name: string;
    sourceID: string;
    specifier?: string | undefined;
}>;
