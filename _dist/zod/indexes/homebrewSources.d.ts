import { z } from "zod";
export declare const homebrewSourceSummary: z.ZodObject<
	{
		released: z.ZodString;
		added: z.ZodString;
		modified: z.ZodString;
		URL: z.ZodString;
		path: z.ZodString;
		fullTitle: z.ZodString;
		publisherAuthors: z.ZodString;
		datatypes: z.ZodArray<z.ZodString, "many">;
		sourceURL: z.ZodOptional<z.ZodString>;
	},
	"strict",
	z.ZodTypeAny,
	{
		path: string;
		released: string;
		added: string;
		modified: string;
		URL: string;
		fullTitle: string;
		publisherAuthors: string;
		datatypes: string[];
		sourceURL?: string | undefined;
	},
	{
		path: string;
		released: string;
		added: string;
		modified: string;
		URL: string;
		fullTitle: string;
		publisherAuthors: string;
		datatypes: string[];
		sourceURL?: string | undefined;
	}
>;
export declare const homebrewSources: z.ZodRecord<
	z.ZodEffects<z.ZodString, string, string>,
	z.ZodObject<
		{
			released: z.ZodString;
			added: z.ZodString;
			modified: z.ZodString;
			URL: z.ZodString;
			path: z.ZodString;
			fullTitle: z.ZodString;
			publisherAuthors: z.ZodString;
			datatypes: z.ZodArray<z.ZodString, "many">;
			sourceURL: z.ZodOptional<z.ZodString>;
		},
		"strict",
		z.ZodTypeAny,
		{
			path: string;
			released: string;
			added: string;
			modified: string;
			URL: string;
			fullTitle: string;
			publisherAuthors: string;
			datatypes: string[];
			sourceURL?: string | undefined;
		},
		{
			path: string;
			released: string;
			added: string;
			modified: string;
			URL: string;
			fullTitle: string;
			publisherAuthors: string;
			datatypes: string[];
			sourceURL?: string | undefined;
		}
	>
>;
