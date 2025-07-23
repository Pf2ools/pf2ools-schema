import { z } from "zod";
export declare const sourceGroup: z.ZodObject<{
    type: z.ZodLiteral<"sourceGroup">;
    ID: z.ZodString;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, z.core.$strict>;
    data: z.ZodOptional<z.ZodObject<{
        publisher: z.ZodString;
        _tags: z.ZodOptional<z.ZodObject<{
            misc: z.ZodObject<{
                Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type sourceGroupInfer = z.infer<typeof sourceGroup>;
