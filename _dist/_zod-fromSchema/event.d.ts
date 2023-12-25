import { z } from "zod";
export declare const event: z.ZodObject<
	{
		type: z.ZodLiteral<"event">;
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
				level: z.ZodNumber;
				traits: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								trait: z.ZodString;
								variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
								display: z.ZodOptional<z.ZodString>;
							},
							"strict",
							z.ZodTypeAny,
							{
								trait: string;
								variables?: string[] | undefined;
								display?: string | undefined;
							},
							{
								trait: string;
								variables?: string[] | undefined;
								display?: string | undefined;
							}
						>,
						"many"
					>
				>;
				applicableSkills: z.ZodOptional<z.ZodArray<z.ZodAny, "many">>;
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
				level: number;
				traits?:
					| {
							trait: string;
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
				applicableSkills?: any[] | undefined;
			},
			{
				entries: (
					| string
					| {
							type: string;
					  }
				)[];
				level: number;
				traits?:
					| {
							trait: string;
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
				applicableSkills?: any[] | undefined;
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
		tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
	},
	"strict",
	z.ZodTypeAny,
	{
		type: "event";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			level: number;
			traits?:
				| {
						trait: string;
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
			applicableSkills?: any[] | undefined;
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
		tags?: Record<string, any> | undefined;
	},
	{
		type: "event";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			level: number;
			traits?:
				| {
						trait: string;
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
			applicableSkills?: any[] | undefined;
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
		tags?: Record<string, any> | undefined;
	}
>;
