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
				applicableSkills: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								skill: z.ZodEnum<
									[
										"Acrobatics",
										"Arcana",
										"Athletics",
										"Crafting",
										"Deception",
										"Diplomacy",
										"Intimidation",
										"Lore",
										"Medicine",
										"Nature",
										"Occultism",
										"Performance",
										"Religion",
										"Society",
										"Stealth",
										"Survival",
										"Thievery",
									]
								>;
								variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
								display: z.ZodOptional<z.ZodString>;
							},
							"strict",
							z.ZodTypeAny,
							{
								skill:
									| "Acrobatics"
									| "Arcana"
									| "Athletics"
									| "Crafting"
									| "Deception"
									| "Diplomacy"
									| "Intimidation"
									| "Lore"
									| "Medicine"
									| "Nature"
									| "Occultism"
									| "Performance"
									| "Religion"
									| "Society"
									| "Stealth"
									| "Survival"
									| "Thievery";
								variables?: string[] | undefined;
								display?: string | undefined;
							},
							{
								skill:
									| "Acrobatics"
									| "Arcana"
									| "Athletics"
									| "Crafting"
									| "Deception"
									| "Diplomacy"
									| "Intimidation"
									| "Lore"
									| "Medicine"
									| "Nature"
									| "Occultism"
									| "Performance"
									| "Religion"
									| "Society"
									| "Stealth"
									| "Survival"
									| "Thievery";
								variables?: string[] | undefined;
								display?: string | undefined;
							}
						>,
						"many"
					>
				>;
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
				applicableSkills?:
					| {
							skill:
								| "Acrobatics"
								| "Arcana"
								| "Athletics"
								| "Crafting"
								| "Deception"
								| "Diplomacy"
								| "Intimidation"
								| "Lore"
								| "Medicine"
								| "Nature"
								| "Occultism"
								| "Performance"
								| "Religion"
								| "Society"
								| "Stealth"
								| "Survival"
								| "Thievery";
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
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
				applicableSkills?:
					| {
							skill:
								| "Acrobatics"
								| "Arcana"
								| "Athletics"
								| "Crafting"
								| "Deception"
								| "Diplomacy"
								| "Intimidation"
								| "Lore"
								| "Medicine"
								| "Nature"
								| "Occultism"
								| "Performance"
								| "Religion"
								| "Society"
								| "Stealth"
								| "Survival"
								| "Thievery";
							variables?: string[] | undefined;
							display?: string | undefined;
					  }[]
					| undefined;
			}
		>;
		tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
	},
	"strict",
	z.ZodTypeAny,
	{
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
		};
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
			applicableSkills?:
				| {
						skill:
							| "Acrobatics"
							| "Arcana"
							| "Athletics"
							| "Crafting"
							| "Deception"
							| "Diplomacy"
							| "Intimidation"
							| "Lore"
							| "Medicine"
							| "Nature"
							| "Occultism"
							| "Performance"
							| "Religion"
							| "Society"
							| "Stealth"
							| "Survival"
							| "Thievery";
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
		};
		source: {
			ID: string;
			page?: number | undefined;
			reprintOf?: string | undefined;
			expansionOf?: string | undefined;
			originalOf?: string | undefined;
		};
		tags?: Record<string, any> | undefined;
	},
	{
		name: {
			primary: string;
			aliases?: string[] | undefined;
			specifier?: string | undefined;
		};
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
			applicableSkills?:
				| {
						skill:
							| "Acrobatics"
							| "Arcana"
							| "Athletics"
							| "Crafting"
							| "Deception"
							| "Diplomacy"
							| "Intimidation"
							| "Lore"
							| "Medicine"
							| "Nature"
							| "Occultism"
							| "Performance"
							| "Religion"
							| "Society"
							| "Stealth"
							| "Survival"
							| "Thievery";
						variables?: string[] | undefined;
						display?: string | undefined;
				  }[]
				| undefined;
		};
		source: {
			ID: string;
			page?: number | undefined;
			reprintOf?: string | undefined;
			expansionOf?: string | undefined;
			originalOf?: string | undefined;
		};
		tags?: Record<string, any> | undefined;
	}
>;
