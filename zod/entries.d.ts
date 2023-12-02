export const entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
    type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type?: string;
}, {
    type?: string;
}>]>, "many">;
import { z } from "zod";
