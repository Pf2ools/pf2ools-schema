import { z } from "zod";
export declare const contentSource: z.ZodObject<{
    ID: z.ZodString;
    page: z.ZodOptional<z.ZodNumber>;
}, z.core.$strict>;
