import { z } from "zod";
export declare const dataSummary: z.ZodObject<
	{
		type: z.ZodString;
		fullTitle: z.ZodString;
		path: z.ZodString;
		official: z.ZodNullable<z.ZodBoolean>;
	},
	"strip",
	z.ZodTypeAny,
	{
		type: string;
		path: string;
		fullTitle: string;
		official: boolean | null;
	},
	{
		type: string;
		path: string;
		fullTitle: string;
		official: boolean | null;
	}
>;
export declare const IDs: z.ZodRecord<
	z.ZodEffects<z.ZodString, string, string>,
	z.ZodObject<
		{
			type: z.ZodString;
			fullTitle: z.ZodString;
			path: z.ZodString;
			official: z.ZodNullable<z.ZodBoolean>;
		},
		"strip",
		z.ZodTypeAny,
		{
			type: string;
			path: string;
			fullTitle: string;
			official: boolean | null;
		},
		{
			type: string;
			path: string;
			fullTitle: string;
			official: boolean | null;
		}
	>
>;
