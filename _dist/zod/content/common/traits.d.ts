import { z } from "zod";
export declare const traits: z.ZodEffects<z.ZodArray<z.ZodObject<{
    trait: z.ZodString;
    variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
    display: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    trait: string;
    display?: string | undefined;
    variables?: string[] | undefined;
}, {
    trait: string;
    display?: string | undefined;
    variables?: string[] | undefined;
}>, "many">, {
    trait: string;
    display?: string | undefined;
    variables?: string[] | undefined;
}[], {
    trait: string;
    display?: string | undefined;
    variables?: string[] | undefined;
}[]>;
