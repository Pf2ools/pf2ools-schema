import { z } from "zod";
export declare const referenceTarget: z.ZodObject<{
    name: z.ZodString;
    specifier: z.ZodOptional<z.ZodString>;
    sourceID: z.ZodString;
}, z.core.$strict>;
