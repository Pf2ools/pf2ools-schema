import { z } from "zod";
export declare const statblock: z.ZodDiscriminatedUnion<
	"type",
	[
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				type: z.ZodLiteral<"background">;
				data: z.ZodObject<
					{
						traits: z.ZodOptional<
							z.ZodEffects<
								z.ZodArray<
									z.ZodObject<
										{
											trait: z.ZodString;
											variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
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
								>,
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[],
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[]
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
						traits?:
							| {
									trait: string;
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
						traits?:
							| {
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
							  }[]
							| undefined;
					}
				>;
				tags: z.ZodOptional<
					z.ZodEffects<
						z.ZodObject<
							{
								abilityBoosts: z.ZodOptional<
									z.ZodObject<
										{
											abilities: z.ZodEffects<
												z.ZodRecord<
													z.ZodUnion<
														[
															z.ZodEnum<
																["Strength", "Dexterity", "Constitution", "Intelligence", "Wisdom", "Charisma"]
															>,
															z.ZodLiteral<"Free">,
														]
													>,
													z.ZodLiteral<true>
												>,
												Partial<
													Record<
														| "Strength"
														| "Dexterity"
														| "Constitution"
														| "Intelligence"
														| "Wisdom"
														| "Charisma"
														| "Free",
														true
													>
												>,
												Partial<
													Record<
														| "Strength"
														| "Dexterity"
														| "Constitution"
														| "Intelligence"
														| "Wisdom"
														| "Charisma"
														| "Free",
														true
													>
												>
											>;
											count: z.ZodNumber;
										},
										"strict",
										z.ZodTypeAny,
										{
											abilities: Partial<
												Record<
													| "Strength"
													| "Dexterity"
													| "Constitution"
													| "Intelligence"
													| "Wisdom"
													| "Charisma"
													| "Free",
													true
												>
											>;
											count: number;
										},
										{
											abilities: Partial<
												Record<
													| "Strength"
													| "Dexterity"
													| "Constitution"
													| "Intelligence"
													| "Wisdom"
													| "Charisma"
													| "Free",
													true
												>
											>;
											count: number;
										}
									>
								>;
								trainedSkills: z.ZodOptional<
									z.ZodObject<
										{
											skills: z.ZodEffects<
												z.ZodRecord<
													z.ZodUnion<
														[
															z.ZodEnum<
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
															>,
															z.ZodLiteral<"Any">,
														]
													>,
													z.ZodLiteral<true>
												>,
												Partial<
													Record<
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
														| "Thievery"
														| "Any",
														true
													>
												>,
												Partial<
													Record<
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
														| "Thievery"
														| "Any",
														true
													>
												>
											>;
											count: z.ZodNumber;
										},
										"strict",
										z.ZodTypeAny,
										{
											count: number;
											skills: Partial<
												Record<
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
													| "Thievery"
													| "Any",
													true
												>
											>;
										},
										{
											count: number;
											skills: Partial<
												Record<
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
													| "Thievery"
													| "Any",
													true
												>
											>;
										}
									>
								>;
								gainedFeats: z.ZodOptional<
									z.ZodObject<
										{
											options: z.ZodEffects<
												z.ZodArray<
													z.ZodObject<
														{
															name: z.ZodString;
															specifier: z.ZodOptional<z.ZodString>;
															sourceID: z.ZodEffects<z.ZodString, string, string>;
														},
														"strict",
														z.ZodTypeAny,
														{
															name: string;
															sourceID: string;
															specifier?: string | undefined;
														},
														{
															name: string;
															sourceID: string;
															specifier?: string | undefined;
														}
													>,
													"many"
												>,
												{
													name: string;
													sourceID: string;
													specifier?: string | undefined;
												}[],
												{
													name: string;
													sourceID: string;
													specifier?: string | undefined;
												}[]
											>;
											count: z.ZodNumber;
										},
										"strict",
										z.ZodTypeAny,
										{
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
										},
										{
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
										}
									>
								>;
								gainedSpells: z.ZodOptional<
									z.ZodObject<
										{
											options: z.ZodEffects<
												z.ZodArray<
													z.ZodObject<
														{
															name: z.ZodString;
															specifier: z.ZodOptional<z.ZodString>;
															sourceID: z.ZodEffects<z.ZodString, string, string>;
														},
														"strict",
														z.ZodTypeAny,
														{
															name: string;
															sourceID: string;
															specifier?: string | undefined;
														},
														{
															name: string;
															sourceID: string;
															specifier?: string | undefined;
														}
													>,
													"many"
												>,
												{
													name: string;
													sourceID: string;
													specifier?: string | undefined;
												}[],
												{
													name: string;
													sourceID: string;
													specifier?: string | undefined;
												}[]
											>;
											count: z.ZodNumber;
										},
										"strict",
										z.ZodTypeAny,
										{
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
										},
										{
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
										}
									>
								>;
								misc: z.ZodOptional<
									z.ZodEffects<
										z.ZodObject<
											{
												"Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
												"Grants equipment": z.ZodOptional<z.ZodLiteral<true>>;
												"Grants language": z.ZodOptional<z.ZodLiteral<true>>;
												"Grants resistance": z.ZodOptional<z.ZodLiteral<true>>;
												"Grants sense": z.ZodOptional<z.ZodLiteral<true>>;
												"Grants situational benefit": z.ZodOptional<z.ZodLiteral<true>>;
												"Has drawback": z.ZodOptional<z.ZodLiteral<true>>;
												"GM influence": z.ZodOptional<z.ZodLiteral<true>>;
											},
											"strict",
											z.ZodTypeAny,
											{
												"Grants ability"?: true | undefined;
												"Grants equipment"?: true | undefined;
												"Grants language"?: true | undefined;
												"Grants resistance"?: true | undefined;
												"Grants sense"?: true | undefined;
												"Grants situational benefit"?: true | undefined;
												"Has drawback"?: true | undefined;
												"GM influence"?: true | undefined;
											},
											{
												"Grants ability"?: true | undefined;
												"Grants equipment"?: true | undefined;
												"Grants language"?: true | undefined;
												"Grants resistance"?: true | undefined;
												"Grants sense"?: true | undefined;
												"Grants situational benefit"?: true | undefined;
												"Has drawback"?: true | undefined;
												"GM influence"?: true | undefined;
											}
										>,
										{
											"Grants ability"?: true | undefined;
											"Grants equipment"?: true | undefined;
											"Grants language"?: true | undefined;
											"Grants resistance"?: true | undefined;
											"Grants sense"?: true | undefined;
											"Grants situational benefit"?: true | undefined;
											"Has drawback"?: true | undefined;
											"GM influence"?: true | undefined;
										},
										{
											"Grants ability"?: true | undefined;
											"Grants equipment"?: true | undefined;
											"Grants language"?: true | undefined;
											"Grants resistance"?: true | undefined;
											"Grants sense"?: true | undefined;
											"Grants situational benefit"?: true | undefined;
											"Has drawback"?: true | undefined;
											"GM influence"?: true | undefined;
										}
									>
								>;
							},
							"strict",
							z.ZodTypeAny,
							{
								abilityBoosts?:
									| {
											abilities: Partial<
												Record<
													| "Strength"
													| "Dexterity"
													| "Constitution"
													| "Intelligence"
													| "Wisdom"
													| "Charisma"
													| "Free",
													true
												>
											>;
											count: number;
									  }
									| undefined;
								trainedSkills?:
									| {
											count: number;
											skills: Partial<
												Record<
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
													| "Thievery"
													| "Any",
													true
												>
											>;
									  }
									| undefined;
								gainedFeats?:
									| {
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
									  }
									| undefined;
								gainedSpells?:
									| {
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
									  }
									| undefined;
								misc?:
									| {
											"Grants ability"?: true | undefined;
											"Grants equipment"?: true | undefined;
											"Grants language"?: true | undefined;
											"Grants resistance"?: true | undefined;
											"Grants sense"?: true | undefined;
											"Grants situational benefit"?: true | undefined;
											"Has drawback"?: true | undefined;
											"GM influence"?: true | undefined;
									  }
									| undefined;
							},
							{
								abilityBoosts?:
									| {
											abilities: Partial<
												Record<
													| "Strength"
													| "Dexterity"
													| "Constitution"
													| "Intelligence"
													| "Wisdom"
													| "Charisma"
													| "Free",
													true
												>
											>;
											count: number;
									  }
									| undefined;
								trainedSkills?:
									| {
											count: number;
											skills: Partial<
												Record<
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
													| "Thievery"
													| "Any",
													true
												>
											>;
									  }
									| undefined;
								gainedFeats?:
									| {
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
									  }
									| undefined;
								gainedSpells?:
									| {
											options: {
												name: string;
												sourceID: string;
												specifier?: string | undefined;
											}[];
											count: number;
									  }
									| undefined;
								misc?:
									| {
											"Grants ability"?: true | undefined;
											"Grants equipment"?: true | undefined;
											"Grants language"?: true | undefined;
											"Grants resistance"?: true | undefined;
											"Grants sense"?: true | undefined;
											"Grants situational benefit"?: true | undefined;
											"Has drawback"?: true | undefined;
											"GM influence"?: true | undefined;
									  }
									| undefined;
							}
						>,
						{
							abilityBoosts?:
								| {
										abilities: Partial<
											Record<
												| "Strength"
												| "Dexterity"
												| "Constitution"
												| "Intelligence"
												| "Wisdom"
												| "Charisma"
												| "Free",
												true
											>
										>;
										count: number;
								  }
								| undefined;
							trainedSkills?:
								| {
										count: number;
										skills: Partial<
											Record<
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
												| "Thievery"
												| "Any",
												true
											>
										>;
								  }
								| undefined;
							gainedFeats?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							gainedSpells?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							misc?:
								| {
										"Grants ability"?: true | undefined;
										"Grants equipment"?: true | undefined;
										"Grants language"?: true | undefined;
										"Grants resistance"?: true | undefined;
										"Grants sense"?: true | undefined;
										"Grants situational benefit"?: true | undefined;
										"Has drawback"?: true | undefined;
										"GM influence"?: true | undefined;
								  }
								| undefined;
						},
						{
							abilityBoosts?:
								| {
										abilities: Partial<
											Record<
												| "Strength"
												| "Dexterity"
												| "Constitution"
												| "Intelligence"
												| "Wisdom"
												| "Charisma"
												| "Free",
												true
											>
										>;
										count: number;
								  }
								| undefined;
							trainedSkills?:
								| {
										count: number;
										skills: Partial<
											Record<
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
												| "Thievery"
												| "Any",
												true
											>
										>;
								  }
								| undefined;
							gainedFeats?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							gainedSpells?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							misc?:
								| {
										"Grants ability"?: true | undefined;
										"Grants equipment"?: true | undefined;
										"Grants language"?: true | undefined;
										"Grants resistance"?: true | undefined;
										"Grants sense"?: true | undefined;
										"Grants situational benefit"?: true | undefined;
										"Has drawback"?: true | undefined;
										"GM influence"?: true | undefined;
								  }
								| undefined;
						}
					>
				>;
			},
			"strict",
			z.ZodTypeAny,
			{
				type: "background";
				data: {
					entries: (
						| string
						| {
								type: string;
						  }
					)[];
					traits?:
						| {
								trait: string;
								variables?: string[] | undefined;
								display?: string | undefined;
						  }[]
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?:
					| {
							abilityBoosts?:
								| {
										abilities: Partial<
											Record<
												| "Strength"
												| "Dexterity"
												| "Constitution"
												| "Intelligence"
												| "Wisdom"
												| "Charisma"
												| "Free",
												true
											>
										>;
										count: number;
								  }
								| undefined;
							trainedSkills?:
								| {
										count: number;
										skills: Partial<
											Record<
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
												| "Thievery"
												| "Any",
												true
											>
										>;
								  }
								| undefined;
							gainedFeats?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							gainedSpells?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							misc?:
								| {
										"Grants ability"?: true | undefined;
										"Grants equipment"?: true | undefined;
										"Grants language"?: true | undefined;
										"Grants resistance"?: true | undefined;
										"Grants sense"?: true | undefined;
										"Grants situational benefit"?: true | undefined;
										"Has drawback"?: true | undefined;
										"GM influence"?: true | undefined;
								  }
								| undefined;
					  }
					| undefined;
			},
			{
				type: "background";
				data: {
					entries: (
						| string
						| {
								type: string;
						  }
					)[];
					traits?:
						| {
								trait: string;
								variables?: string[] | undefined;
								display?: string | undefined;
						  }[]
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?:
					| {
							abilityBoosts?:
								| {
										abilities: Partial<
											Record<
												| "Strength"
												| "Dexterity"
												| "Constitution"
												| "Intelligence"
												| "Wisdom"
												| "Charisma"
												| "Free",
												true
											>
										>;
										count: number;
								  }
								| undefined;
							trainedSkills?:
								| {
										count: number;
										skills: Partial<
											Record<
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
												| "Thievery"
												| "Any",
												true
											>
										>;
								  }
								| undefined;
							gainedFeats?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							gainedSpells?:
								| {
										options: {
											name: string;
											sourceID: string;
											specifier?: string | undefined;
										}[];
										count: number;
								  }
								| undefined;
							misc?:
								| {
										"Grants ability"?: true | undefined;
										"Grants equipment"?: true | undefined;
										"Grants language"?: true | undefined;
										"Grants resistance"?: true | undefined;
										"Grants sense"?: true | undefined;
										"Grants situational benefit"?: true | undefined;
										"Has drawback"?: true | undefined;
										"GM influence"?: true | undefined;
								  }
								| undefined;
					  }
					| undefined;
			}
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
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
					aliases?: [string, ...string[]] | undefined;
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
					aliases?: [string, ...string[]] | undefined;
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
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
				type: z.ZodLiteral<"divineIntercession">;
				data: z.ZodEffects<
					z.ZodObject<
						{
							preamble: z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Minor Boon": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Moderate Boon": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Major Boon": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Minor Curse": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Moderate Curse": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
							"Major Curse": z.ZodOptional<
								z.ZodArray<
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
								>
							>;
						},
						"strict",
						z.ZodTypeAny,
						{
							preamble?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Minor Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Moderate Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Major Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Minor Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Moderate Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Major Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
						},
						{
							preamble?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Minor Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Moderate Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Major Boon"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Minor Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Moderate Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							"Major Curse"?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
						}
					>,
					{
						preamble?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Minor Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Moderate Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Major Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Minor Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Moderate Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Major Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
					},
					{
						preamble?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Minor Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Moderate Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Major Boon"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Minor Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Moderate Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						"Major Curse"?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
					}
				>;
			},
			"strict",
			z.ZodTypeAny,
			{
				type: "divineIntercession";
				data: {
					preamble?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			},
			{
				type: "divineIntercession";
				data: {
					preamble?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			}
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
				type: z.ZodLiteral<"domain">;
				data: z.ZodObject<
					{
						preamble: z.ZodOptional<z.ZodString>;
						domainSpell: z.ZodObject<
							{
								name: z.ZodString;
								specifier: z.ZodOptional<z.ZodString>;
								sourceID: z.ZodEffects<z.ZodString, string, string>;
							},
							"strict",
							z.ZodTypeAny,
							{
								name: string;
								sourceID: string;
								specifier?: string | undefined;
							},
							{
								name: string;
								sourceID: string;
								specifier?: string | undefined;
							}
						>;
						advancedDomainSpell: z.ZodObject<
							{
								name: z.ZodString;
								specifier: z.ZodOptional<z.ZodString>;
								sourceID: z.ZodEffects<z.ZodString, string, string>;
							},
							"strict",
							z.ZodTypeAny,
							{
								name: string;
								sourceID: string;
								specifier?: string | undefined;
							},
							{
								name: string;
								sourceID: string;
								specifier?: string | undefined;
							}
						>;
						apocryphalSpell: z.ZodOptional<
							z.ZodObject<
								{
									name: z.ZodString;
									specifier: z.ZodOptional<z.ZodString>;
									sourceID: z.ZodEffects<z.ZodString, string, string>;
								},
								"strict",
								z.ZodTypeAny,
								{
									name: string;
									sourceID: string;
									specifier?: string | undefined;
								},
								{
									name: string;
									sourceID: string;
									specifier?: string | undefined;
								}
							>
						>;
						advancedApocryphalSpell: z.ZodOptional<
							z.ZodObject<
								{
									name: z.ZodString;
									specifier: z.ZodOptional<z.ZodString>;
									sourceID: z.ZodEffects<z.ZodString, string, string>;
								},
								"strict",
								z.ZodTypeAny,
								{
									name: string;
									sourceID: string;
									specifier?: string | undefined;
								},
								{
									name: string;
									sourceID: string;
									specifier?: string | undefined;
								}
							>
						>;
					},
					"strict",
					z.ZodTypeAny,
					{
						domainSpell: {
							name: string;
							sourceID: string;
							specifier?: string | undefined;
						};
						advancedDomainSpell: {
							name: string;
							sourceID: string;
							specifier?: string | undefined;
						};
						preamble?: string | undefined;
						apocryphalSpell?:
							| {
									name: string;
									sourceID: string;
									specifier?: string | undefined;
							  }
							| undefined;
						advancedApocryphalSpell?:
							| {
									name: string;
									sourceID: string;
									specifier?: string | undefined;
							  }
							| undefined;
					},
					{
						domainSpell: {
							name: string;
							sourceID: string;
							specifier?: string | undefined;
						};
						advancedDomainSpell: {
							name: string;
							sourceID: string;
							specifier?: string | undefined;
						};
						preamble?: string | undefined;
						apocryphalSpell?:
							| {
									name: string;
									sourceID: string;
									specifier?: string | undefined;
							  }
							| undefined;
						advancedApocryphalSpell?:
							| {
									name: string;
									sourceID: string;
									specifier?: string | undefined;
							  }
							| undefined;
					}
				>;
			},
			"strict",
			z.ZodTypeAny,
			{
				type: "domain";
				data: {
					domainSpell: {
						name: string;
						sourceID: string;
						specifier?: string | undefined;
					};
					advancedDomainSpell: {
						name: string;
						sourceID: string;
						specifier?: string | undefined;
					};
					preamble?: string | undefined;
					apocryphalSpell?:
						| {
								name: string;
								sourceID: string;
								specifier?: string | undefined;
						  }
						| undefined;
					advancedApocryphalSpell?:
						| {
								name: string;
								sourceID: string;
								specifier?: string | undefined;
						  }
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			},
			{
				type: "domain";
				data: {
					domainSpell: {
						name: string;
						sourceID: string;
						specifier?: string | undefined;
					};
					advancedDomainSpell: {
						name: string;
						sourceID: string;
						specifier?: string | undefined;
					};
					preamble?: string | undefined;
					apocryphalSpell?:
						| {
								name: string;
								sourceID: string;
								specifier?: string | undefined;
						  }
						| undefined;
					advancedApocryphalSpell?:
						| {
								name: string;
								sourceID: string;
								specifier?: string | undefined;
						  }
						| undefined;
				};
				source: {
					ID: string;
					page?: number | undefined;
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			}
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
				type: z.ZodLiteral<"event">;
				data: z.ZodObject<
					{
						level: z.ZodNumber;
						traits: z.ZodOptional<
							z.ZodEffects<
								z.ZodArray<
									z.ZodObject<
										{
											trait: z.ZodString;
											variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
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
								>,
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[],
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[]
							>
						>;
						applicableSkills: z.ZodOptional<
							z.ZodEffects<
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
											variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
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
								>,
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
								}[],
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
								}[]
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
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
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
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			}
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				type: z.ZodLiteral<"relicGift">;
				data: z.ZodObject<
					{
						tier: z.ZodString;
						traits: z.ZodOptional<
							z.ZodEffects<
								z.ZodArray<
									z.ZodObject<
										{
											trait: z.ZodString;
											variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
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
								>,
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[],
								{
									trait: string;
									variables?: string[] | undefined;
									display?: string | undefined;
								}[]
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
					z.ZodEffects<
						z.ZodObject<
							{
								itemTypes: z.ZodOptional<
									z.ZodEffects<
										z.ZodEffects<
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
											>,
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
										>,
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
									z.ZodEffects<
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
										>,
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
						>,
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
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
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
				};
				name: {
					primary: string;
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
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
		>,
		z.ZodObject<
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
						aliases: z.ZodOptional<
							z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
						>;
						specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					},
					{
						primary: string;
						aliases?: [string, ...string[]] | undefined;
						specifier?: string | undefined;
					}
				>;
				tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
				type: z.ZodLiteral<"skill">;
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
			},
			"strict",
			z.ZodTypeAny,
			{
				type: "skill";
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
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			},
			{
				type: "skill";
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
					aliases?: [string, ...string[]] | undefined;
					specifier?: string | undefined;
				};
				tags?: {} | undefined;
			}
		>,
	]
>;
