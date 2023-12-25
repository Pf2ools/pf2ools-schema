import { z } from "zod";
export declare const contentSource: z.ZodObject<
	{
		ID: z.ZodEffects<z.ZodString, string, string>;
		page: z.ZodOptional<z.ZodNumber>;
	},
	"strict",
	z.ZodTypeAny,
	{
		ID: string;
		page?: number | undefined;
	},
	{
		ID: string;
		page?: number | undefined;
	}
>;
