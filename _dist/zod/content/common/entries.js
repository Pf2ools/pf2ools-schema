import { z } from "zod";
import { entryString } from "./entryString.js";
export const entries = z
    .array(z.union([
    entryString,
    z.object({
        type: z.string().min(1),
    }),
]))
    .min(1);
