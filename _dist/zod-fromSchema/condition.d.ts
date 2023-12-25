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
			},
			"strip",
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
		reference: z.ZodOptional<
			z.ZodObject<
				{
					type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
					target: z.ZodObject<
						{
							name: z.ZodString;
							specifier: z.ZodOptional<z.ZodString>;
							sourceID: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
						},
						"strict",
						z.ZodTypeAny,
						{
							name: string;
							specifier?: string | undefined;
							sourceID?: string | undefined;
						},
						{
							name: string;
							specifier?: string | undefined;
							sourceID?: string | undefined;
						}
					>;
					modifications: z.ZodOptional<
						z.ZodArray<
							z.ZodObject<
								{
									type: z.ZodString;
									target: z.ZodObject<
										{
											property: z.ZodString;
											name: z.ZodOptional<z.ZodString>;
										},
										"strict",
										z.ZodTypeAny,
										{
											property: string;
											name?: string | undefined;
										},
										{
											property: string;
											name?: string | undefined;
										}
									>;
									value: z.ZodOptional<z.ZodEffects<z.ZodAny, any, any>>;
								},
								"strict",
								z.ZodTypeAny,
								{
									type: string;
									target: {
										property: string;
										name?: string | undefined;
									};
									value?: any;
								},
								{
									type: string;
									target: {
										property: string;
										name?: string | undefined;
									};
									value?: any;
								}
							>,
							"many"
						>
					>;
				},
				"strict",
				z.ZodTypeAny,
				{
					type: "variant" | "reprint" | "replacement" | "extension";
					target: {
						name: string;
						specifier?: string | undefined;
						sourceID?: string | undefined;
					};
					modifications?:
						| {
								type: string;
								target: {
									property: string;
									name?: string | undefined;
								};
								value?: any;
						  }[]
						| undefined;
				},
				{
					type: "variant" | "reprint" | "replacement" | "extension";
					target: {
						name: string;
						specifier?: string | undefined;
						sourceID?: string | undefined;
					};
					modifications?:
						| {
								type: string;
								target: {
									property: string;
									name?: string | undefined;
								};
								value?: any;
						  }[]
						| undefined;
				}
			>
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
		reference?:
			| {
					type: "variant" | "reprint" | "replacement" | "extension";
					target: {
						name: string;
						specifier?: string | undefined;
						sourceID?: string | undefined;
					};
					modifications?:
						| {
								type: string;
								target: {
									property: string;
									name?: string | undefined;
								};
								value?: any;
						  }[]
						| undefined;
			  }
			| undefined;
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
		reference?:
			| {
					type: "variant" | "reprint" | "replacement" | "extension";
					target: {
						name: string;
						specifier?: string | undefined;
						sourceID?: string | undefined;
					};
					modifications?:
						| {
								type: string;
								target: {
									property: string;
									name?: string | undefined;
								};
								value?: any;
						  }[]
						| undefined;
			  }
			| undefined;
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
