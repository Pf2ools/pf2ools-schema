import { z } from "zod";
export declare const traits: z.ZodArray<z.ZodObject<{
    trait: z.ZodString;
    variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
    display: z.ZodOptional<z.ZodString>;
}, z.core.$strict>>;
