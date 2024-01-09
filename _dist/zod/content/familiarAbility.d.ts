import { z } from "zod";
export declare const familiarAbility: z.ZodObject<
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
		type: z.ZodLiteral<"familiarAbility">;
		data: z.ZodObject<
			{
				abilityType: z.ZodEnum<["Familiar", "Master"]>;
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
				abilityType: "Familiar" | "Master";
			},
			{
				entries: (
					| string
					| {
							type: string;
					  }
				)[];
				abilityType: "Familiar" | "Master";
			}
		>;
		tags: z.ZodOptional<
			z.ZodEffects<
				z.ZodObject<
					{
						misc: z.ZodOptional<
							z.ZodEffects<
								z.ZodObject<
									{
										affectsCommunication: z.ZodOptional<z.ZodLiteral<true>>;
										affectsSenses: z.ZodOptional<z.ZodLiteral<true>>;
										affectsMovement: z.ZodOptional<z.ZodLiteral<true>>;
										hasRequirement: z.ZodOptional<z.ZodLiteral<true>>;
										grantsAbility: z.ZodOptional<z.ZodLiteral<true>>;
										repeatable: z.ZodOptional<z.ZodLiteral<true>>;
									},
									"strict",
									z.ZodTypeAny,
									{
										affectsCommunication?: true | undefined;
										affectsSenses?: true | undefined;
										affectsMovement?: true | undefined;
										hasRequirement?: true | undefined;
										grantsAbility?: true | undefined;
										repeatable?: true | undefined;
									},
									{
										affectsCommunication?: true | undefined;
										affectsSenses?: true | undefined;
										affectsMovement?: true | undefined;
										hasRequirement?: true | undefined;
										grantsAbility?: true | undefined;
										repeatable?: true | undefined;
									}
								>,
								{
									affectsCommunication?: true | undefined;
									affectsSenses?: true | undefined;
									affectsMovement?: true | undefined;
									hasRequirement?: true | undefined;
									grantsAbility?: true | undefined;
									repeatable?: true | undefined;
								},
								{
									affectsCommunication?: true | undefined;
									affectsSenses?: true | undefined;
									affectsMovement?: true | undefined;
									hasRequirement?: true | undefined;
									grantsAbility?: true | undefined;
									repeatable?: true | undefined;
								}
							>
						>;
					},
					"strict",
					z.ZodTypeAny,
					{
						misc?:
							| {
									affectsCommunication?: true | undefined;
									affectsSenses?: true | undefined;
									affectsMovement?: true | undefined;
									hasRequirement?: true | undefined;
									grantsAbility?: true | undefined;
									repeatable?: true | undefined;
							  }
							| undefined;
					},
					{
						misc?:
							| {
									affectsCommunication?: true | undefined;
									affectsSenses?: true | undefined;
									affectsMovement?: true | undefined;
									hasRequirement?: true | undefined;
									grantsAbility?: true | undefined;
									repeatable?: true | undefined;
							  }
							| undefined;
					}
				>,
				{
					misc?:
						| {
								affectsCommunication?: true | undefined;
								affectsSenses?: true | undefined;
								affectsMovement?: true | undefined;
								hasRequirement?: true | undefined;
								grantsAbility?: true | undefined;
								repeatable?: true | undefined;
						  }
						| undefined;
				},
				{
					misc?:
						| {
								affectsCommunication?: true | undefined;
								affectsSenses?: true | undefined;
								affectsMovement?: true | undefined;
								hasRequirement?: true | undefined;
								grantsAbility?: true | undefined;
								repeatable?: true | undefined;
						  }
						| undefined;
				}
			>
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		type: "familiarAbility";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			abilityType: "Familiar" | "Master";
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
					misc?:
						| {
								affectsCommunication?: true | undefined;
								affectsSenses?: true | undefined;
								affectsMovement?: true | undefined;
								hasRequirement?: true | undefined;
								grantsAbility?: true | undefined;
								repeatable?: true | undefined;
						  }
						| undefined;
			  }
			| undefined;
	},
	{
		type: "familiarAbility";
		data: {
			entries: (
				| string
				| {
						type: string;
				  }
			)[];
			abilityType: "Familiar" | "Master";
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
					misc?:
						| {
								affectsCommunication?: true | undefined;
								affectsSenses?: true | undefined;
								affectsMovement?: true | undefined;
								hasRequirement?: true | undefined;
								grantsAbility?: true | undefined;
								repeatable?: true | undefined;
						  }
						| undefined;
			  }
			| undefined;
	}
>;
