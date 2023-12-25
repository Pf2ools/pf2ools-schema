import { z } from "zod";
export declare const byDatatype: z.ZodEffects<
	z.ZodRecord<z.ZodString, z.ZodArray<z.ZodString, "many">>,
	Record<string, string[]>,
	Record<string, string[]>
>;
