import { z } from "zod";
export declare const UUIDs: z.ZodRecord<z.ZodString, z.ZodString>;
export type UUIDsInfer = z.infer<typeof UUIDs>;
