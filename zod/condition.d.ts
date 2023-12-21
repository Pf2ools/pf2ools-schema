import { z } from "zod";
export declare const condition: z.ZodObject<
	{
		type: z.ZodLiteral<"condition">;
		name: z.ZodObject<
			{
				primary: z.ZodEffects<z.ZodString, string, string>;
				aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
				specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
			},
			"strict",
			z.ZodTypeAny,
			{
				primary: string;
				aliases?: string[] | undefined;
				specifier?: string | undefined;
			},
			{
				primary: string;
				aliases?: string[] | undefined;
				specifier?: string | undefined;
			}
		>;
		source: z.ZodObject<
			{
				ID: z.ZodEffects<z.ZodString, string, string>;
				page: z.ZodOptional<z.ZodNumber>;
				reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
				expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
				originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
			},
			"strip",
			z.ZodTypeAny,
			{
				ID: string;
				page?: number | undefined;
				reprintOf?: string | undefined;
				expansionOf?: string | undefined;
				originalOf?: string | undefined;
			},
			{
				ID: string;
				page?: number | undefined;
				reprintOf?: string | undefined;
				expansionOf?: string | undefined;
				originalOf?: string | undefined;
			}
		>;
		data: z.ZodObject<
			{
				entries: z.ZodArray<
					z.ZodUnion<
						[
							z.ZodString,
							z.ZodObject<
								{
									type: z.ZodString;
								},
								"strip",
								z.ZodTypeAny,
								{
									type: string;
								},
								{
									type: string;
								}
							>,
						]
					>,
					"many"
				>;
			},
			"strict",
			z.ZodTypeAny,
			{
				entries: (
					| string
					| {
							type: string;
					  }
				)[];
			},
			{
				entries: (
					| string
					| {
							type: string;
					  }
				)[];
			}
		>;
		tags: z.ZodOptional<
			z.ZodObject<
				{
					group: z.ZodOptional<
						z.ZodObject<
							{
								Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
								"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
								"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
								"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
								Senses: z.ZodOptional<z.ZodLiteral<true>>;
							},
							"strip",
							z.ZodLiteral<true>,
							z.objectOutputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
							>,
							z.objectInputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
							>
						>
					>;
				},
				"strict",
				z.ZodTypeAny,
				{
					group?:
						| z.objectOutputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
				},
				{
					group?:
						| z.objectInputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
				}
			>
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
		};
		type: "condition";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
		};
		source: {
			ID: string;
			page?: number | undefined;
			reprintOf?: string | undefined;
			expansionOf?: string | undefined;
			originalOf?: string | undefined;
		};
		tags?:
			| {
					group?:
						| z.objectOutputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
			  }
			| undefined;
	},
	{
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
		};
		type: "condition";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
		};
		source: {
			ID: string;
			page?: number | undefined;
			reprintOf?: string | undefined;
			expansionOf?: string | undefined;
			originalOf?: string | undefined;
		};
		tags?:
			| {
					group?:
						| z.objectInputType<
								{
									Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
									"Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
									"Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
									"Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
									Senses: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
			  }
			| undefined;
	}
>;
