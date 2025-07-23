import { z } from "zod";
export declare const shortNames: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodObject<{
    type: z.ZodString;
    fullTitle: z.ZodString;
    path: z.ZodString;
    official: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>>>;
export type shortNamesInfer = z.infer<typeof shortNames>;
