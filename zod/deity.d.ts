import { z } from "zod";
export declare const deity: z.ZodObject<
	{
		type: z.ZodLiteral<"deity">;
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
				category: z.ZodOptional<z.ZodString>;
				pantheonMembers: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								name: z.ZodString;
								source: z.ZodString;
							},
							"strict",
							z.ZodTypeAny,
							{
								name: string;
								source: string;
							},
							{
								name: string;
								source: string;
							}
						>,
						"many"
					>
				>;
				alignment: z.ZodOptional<
					z.ZodObject<
						{
							deity: z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>;
							follower: z.ZodOptional<
								z.ZodArray<z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>, "many">
							>;
						},
						"strict",
						z.ZodTypeAny,
						{
							deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
							follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
						},
						{
							deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
							follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
						}
					>
				>;
				areasOfConcern: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
				divineFont: z.ZodOptional<
					z.ZodObject<
						{
							harm: z.ZodOptional<z.ZodLiteral<true>>;
							heal: z.ZodOptional<z.ZodLiteral<true>>;
						},
						"strict",
						z.ZodTypeAny,
						{
							harm?: true | undefined;
							heal?: true | undefined;
						},
						{
							harm?: true | undefined;
							heal?: true | undefined;
						}
					>
				>;
				divineAbility: z.ZodOptional<
					z.ZodObject<
						{
							abilities: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
							entry: z.ZodOptional<z.ZodString>;
						},
						"strict",
						z.ZodTypeAny,
						{
							abilities?: Record<string, true> | undefined;
							entry?: string | undefined;
						},
						{
							abilities?: Record<string, true> | undefined;
							entry?: string | undefined;
						}
					>
				>;
				divineSkill: z.ZodOptional<
					z.ZodObject<
						{
							skills: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
							entry: z.ZodOptional<z.ZodString>;
						},
						"strict",
						z.ZodTypeAny,
						{
							skills?: Record<string, true> | undefined;
							entry?: string | undefined;
						},
						{
							skills?: Record<string, true> | undefined;
							entry?: string | undefined;
						}
					>
				>;
				domains: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								name: z.ZodString;
								source: z.ZodString;
							},
							"strict",
							z.ZodTypeAny,
							{
								name: string;
								source: string;
							},
							{
								name: string;
								source: string;
							}
						>,
						"many"
					>
				>;
				alternateDomains: z.ZodOptional<
					z.ZodArray<
						z.ZodObject<
							{
								name: z.ZodString;
								source: z.ZodString;
							},
							"strict",
							z.ZodTypeAny,
							{
								name: string;
								source: string;
							},
							{
								name: string;
								source: string;
							}
						>,
						"many"
					>
				>;
				clericSpells: z.ZodOptional<
					z.ZodEffects<
						z.ZodRecord<
							z.ZodString,
							z.ZodUnion<
								[
									z.ZodArray<
										z.ZodObject<
											{
												name: z.ZodString;
												source: z.ZodString;
											},
											"strict",
											z.ZodTypeAny,
											{
												name: string;
												source: string;
											},
											{
												name: string;
												source: string;
											}
										>,
										"many"
									>,
									z.ZodNever,
								]
							>
						>,
						Record<
							string,
							{
								name: string;
								source: string;
							}[]
						>,
						Record<
							string,
							{
								name: string;
								source: string;
							}[]
						>
					>
				>;
				edicts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
				anathema: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
				favoredWeapon: z.ZodOptional<
					z.ZodObject<
						{
							weapons: z.ZodOptional<
								z.ZodArray<
									z.ZodObject<
										{
											name: z.ZodString;
											source: z.ZodString;
										},
										"strict",
										z.ZodTypeAny,
										{
											name: string;
											source: string;
										},
										{
											name: string;
											source: string;
										}
									>,
									"many"
								>
							>;
							unarmedAttacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
							entry: z.ZodOptional<z.ZodString>;
						},
						"strict",
						z.ZodTypeAny,
						{
							weapons?:
								| {
										name: string;
										source: string;
								  }[]
								| undefined;
							unarmedAttacks?: string[] | undefined;
							entry?: string | undefined;
						},
						{
							weapons?:
								| {
										name: string;
										source: string;
								  }[]
								| undefined;
							unarmedAttacks?: string[] | undefined;
							entry?: string | undefined;
						}
					>
				>;
			},
			"strict",
			z.ZodTypeAny,
			{
				category?: string | undefined;
				pantheonMembers?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				alignment?:
					| {
							deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
							follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
					  }
					| undefined;
				areasOfConcern?: string[] | undefined;
				divineFont?:
					| {
							harm?: true | undefined;
							heal?: true | undefined;
					  }
					| undefined;
				divineAbility?:
					| {
							abilities?: Record<string, true> | undefined;
							entry?: string | undefined;
					  }
					| undefined;
				divineSkill?:
					| {
							skills?: Record<string, true> | undefined;
							entry?: string | undefined;
					  }
					| undefined;
				domains?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				alternateDomains?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				clericSpells?:
					| Record<
							string,
							{
								name: string;
								source: string;
							}[]
					  >
					| undefined;
				edicts?: string[] | undefined;
				anathema?: string[] | undefined;
				favoredWeapon?:
					| {
							weapons?:
								| {
										name: string;
										source: string;
								  }[]
								| undefined;
							unarmedAttacks?: string[] | undefined;
							entry?: string | undefined;
					  }
					| undefined;
			},
			{
				category?: string | undefined;
				pantheonMembers?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				alignment?:
					| {
							deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
							follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
					  }
					| undefined;
				areasOfConcern?: string[] | undefined;
				divineFont?:
					| {
							harm?: true | undefined;
							heal?: true | undefined;
					  }
					| undefined;
				divineAbility?:
					| {
							abilities?: Record<string, true> | undefined;
							entry?: string | undefined;
					  }
					| undefined;
				divineSkill?:
					| {
							skills?: Record<string, true> | undefined;
							entry?: string | undefined;
					  }
					| undefined;
				domains?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				alternateDomains?:
					| {
							name: string;
							source: string;
					  }[]
					| undefined;
				clericSpells?:
					| Record<
							string,
							{
								name: string;
								source: string;
							}[]
					  >
					| undefined;
				edicts?: string[] | undefined;
				anathema?: string[] | undefined;
				favoredWeapon?:
					| {
							weapons?:
								| {
										name: string;
										source: string;
								  }[]
								| undefined;
							unarmedAttacks?: string[] | undefined;
							entry?: string | undefined;
					  }
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
		type: "deity";
		data: {
			category?: string | undefined;
			pantheonMembers?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			alignment?:
				| {
						deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
						follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
				  }
				| undefined;
			areasOfConcern?: string[] | undefined;
			divineFont?:
				| {
						harm?: true | undefined;
						heal?: true | undefined;
				  }
				| undefined;
			divineAbility?:
				| {
						abilities?: Record<string, true> | undefined;
						entry?: string | undefined;
				  }
				| undefined;
			divineSkill?:
				| {
						skills?: Record<string, true> | undefined;
						entry?: string | undefined;
				  }
				| undefined;
			domains?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			alternateDomains?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			clericSpells?:
				| Record<
						string,
						{
							name: string;
							source: string;
						}[]
				  >
				| undefined;
			edicts?: string[] | undefined;
			anathema?: string[] | undefined;
			favoredWeapon?:
				| {
						weapons?:
							| {
									name: string;
									source: string;
							  }[]
							| undefined;
						unarmedAttacks?: string[] | undefined;
						entry?: string | undefined;
				  }
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
		type: "deity";
		data: {
			category?: string | undefined;
			pantheonMembers?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			alignment?:
				| {
						deity: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
						follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[] | undefined;
				  }
				| undefined;
			areasOfConcern?: string[] | undefined;
			divineFont?:
				| {
						harm?: true | undefined;
						heal?: true | undefined;
				  }
				| undefined;
			divineAbility?:
				| {
						abilities?: Record<string, true> | undefined;
						entry?: string | undefined;
				  }
				| undefined;
			divineSkill?:
				| {
						skills?: Record<string, true> | undefined;
						entry?: string | undefined;
				  }
				| undefined;
			domains?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			alternateDomains?:
				| {
						name: string;
						source: string;
				  }[]
				| undefined;
			clericSpells?:
				| Record<
						string,
						{
							name: string;
							source: string;
						}[]
				  >
				| undefined;
			edicts?: string[] | undefined;
			anathema?: string[] | undefined;
			favoredWeapon?:
				| {
						weapons?:
							| {
									name: string;
									source: string;
							  }[]
							| undefined;
						unarmedAttacks?: string[] | undefined;
						entry?: string | undefined;
				  }
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
