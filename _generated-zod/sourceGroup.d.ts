import { z } from "zod";
export declare const sourceGroup: z.ZodObject<
	{
		type: z.ZodOptional<z.ZodLiteral<"sourceGroup">>;
		ID: z.ZodEffects<z.ZodString, string, string>;
		title: z.ZodObject<
			{
				full: z.ZodString;
				short: z.ZodString;
			},
			"strict",
			z.ZodTypeAny,
			{
				short: string;
				full: string;
			},
			{
				short: string;
				full: string;
			}
		>;
		data: z.ZodOptional<
			z.ZodObject<
				{
					publisher: z.ZodOptional<z.ZodString>;
				},
				"strict",
				z.ZodTypeAny,
				{
					publisher?: string | undefined;
				},
				{
					publisher?: string | undefined;
				}
			>
		>;
		tags: z.ZodOptional<
			z.ZodObject<
				{
					misc: z.ZodOptional<
						z.ZodObject<
							{
								Adventure: z.ZodOptional<z.ZodLiteral<true>>;
								Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
							},
							"strict",
							z.ZodTypeAny,
							{
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
							},
							{
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
							}
						>
					>;
				},
				"strict",
				z.ZodTypeAny,
				{
					misc?:
						| {
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
						  }
						| undefined;
				},
				{
					misc?:
						| {
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
						  }
						| undefined;
				}
			>
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		ID: string;
		title: {
			short: string;
			full: string;
		};
		type?: "sourceGroup" | undefined;
		data?:
			| {
					publisher?: string | undefined;
			  }
			| undefined;
		tags?:
			| {
					misc?:
						| {
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
						  }
						| undefined;
			  }
			| undefined;
	},
	{
		ID: string;
		title: {
			short: string;
			full: string;
		};
		type?: "sourceGroup" | undefined;
		data?:
			| {
					publisher?: string | undefined;
			  }
			| undefined;
		tags?:
			| {
					misc?:
						| {
								Adventure?: true | undefined;
								Ongoing?: true | undefined;
						  }
						| undefined;
			  }
			| undefined;
	}
>;
