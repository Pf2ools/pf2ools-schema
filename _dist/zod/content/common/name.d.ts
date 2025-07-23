import { z } from "zod";
export declare const name: z.ZodObject<{
    primary: z.ZodString;
    aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
    specifier: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
