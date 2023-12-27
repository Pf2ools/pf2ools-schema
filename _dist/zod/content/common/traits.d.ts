import { z } from "zod";
export declare const traits: z.ZodEffects<z.ZodArray<z.ZodObject<{
    trait: z.ZodString;
    variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
    display: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    trait: string;
    variables?: string[] | undefined;
    display?: string | undefined;
}, {
    trait: string;
    variables?: string[] | undefined;
    display?: string | undefined;
}>, "many">, {
    trait: string;
    variables?: string[] | undefined;
    display?: string | undefined;
}[], {
    trait: string;
    variables?: string[] | undefined;
    display?: string | undefined;
}[]>;
