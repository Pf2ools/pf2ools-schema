import { z } from "zod";
export declare const name: z.ZodEffects<z.ZodObject<{
    primary: z.ZodEffects<z.ZodString, string, string>;
    aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
    specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strict", z.ZodTypeAny, {
    primary: string;
    aliases?: string[] | undefined;
    specifier?: string | undefined;
}, {
    primary: string;
    aliases?: string[] | undefined;
    specifier?: string | undefined;
}>, {
    primary: string;
    aliases?: string[] | undefined;
    specifier?: string | undefined;
}, {
    primary: string;
    aliases?: string[] | undefined;
    specifier?: string | undefined;
}>;
