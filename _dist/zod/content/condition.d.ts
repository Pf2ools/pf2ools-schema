import { z } from "zod";
export declare const condition: z.ZodObject<
	{
		source: z.ZodObject<
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
		name: z.ZodObject<
			{
				primary: z.ZodEffects<z.ZodString, string, string>;
				aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
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
		type: z.ZodLiteral<"condition">;
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
			z.ZodEffects<
				z.ZodObject<
					{
						group: z.ZodOptional<
							z.ZodEffects<
								z.ZodEffects<
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
									>,
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
								>,
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
				>,
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
		};
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
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
		};
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
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
