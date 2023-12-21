import { z } from "zod";
export declare const relicGift: z.ZodObject<
	{
		type: z.ZodLiteral<"relicGift">;
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
				tier: z.ZodString;
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
				aspects: z.ZodArray<
					z.ZodObject<
						{
							name: z.ZodString;
							note: z.ZodOptional<z.ZodString>;
						},
						"strict",
						z.ZodTypeAny,
						{
							name: string;
							note?: string | undefined;
						},
						{
							name: string;
							note?: string | undefined;
						}
					>,
					"many"
				>;
				prerequisites: z.ZodOptional<z.ZodString>;
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
				tier: string;
				aspects: {
					name: string;
					note?: string | undefined;
				}[];
				traits?:
					| {
							trait: string;
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
				prerequisites?: string | undefined;
			},
			{
				entries: (
					| string
					| {
							type: string;
					  }
				)[];
				tier: string;
				aspects: {
					name: string;
					note?: string | undefined;
				}[];
				traits?:
					| {
							trait: string;
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
				prerequisites?: string | undefined;
			}
		>;
		tags: z.ZodOptional<
			z.ZodObject<
				{
					itemTypes: z.ZodOptional<
						z.ZodObject<
							{
								Armor: z.ZodOptional<z.ZodLiteral<true>>;
								"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
								Weapon: z.ZodOptional<z.ZodLiteral<true>>;
							},
							"strip",
							z.ZodLiteral<true>,
							z.objectOutputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
							>,
							z.objectInputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
							>
						>
					>;
					misc: z.ZodOptional<
						z.ZodObject<
							{
								"Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
								"Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
								"Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
								"Is rune": z.ZodOptional<z.ZodLiteral<true>>;
								"Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
							},
							"strict",
							z.ZodTypeAny,
							{
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
							},
							{
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
							}
						>
					>;
				},
				"strict",
				z.ZodTypeAny,
				{
					itemTypes?:
						| z.objectOutputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
					misc?:
						| {
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
						  }
						| undefined;
				},
				{
					itemTypes?:
						| z.objectInputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
					misc?:
						| {
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
						  }
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
		type: "relicGift";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			tier: string;
			aspects: {
				name: string;
				note?: string | undefined;
			}[];
			traits?:
				| {
						trait: string;
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
			prerequisites?: string | undefined;
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
					itemTypes?:
						| z.objectOutputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
					misc?:
						| {
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
						  }
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
		type: "relicGift";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			tier: string;
			aspects: {
				name: string;
				note?: string | undefined;
			}[];
			traits?:
				| {
						trait: string;
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
			prerequisites?: string | undefined;
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
					itemTypes?:
						| z.objectInputType<
								{
									Armor: z.ZodOptional<z.ZodLiteral<true>>;
									"Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
									Weapon: z.ZodOptional<z.ZodLiteral<true>>;
								},
								z.ZodLiteral<true>,
								"strip"
						  >
						| undefined;
					misc?:
						| {
								"Alters relic"?: true | undefined;
								"Grants ability"?: true | undefined;
								"Grants passive attribute"?: true | undefined;
								"Is rune"?: true | undefined;
								"Soul seed"?: true | undefined;
						  }
						| undefined;
			  }
			| undefined;
	}
>;
