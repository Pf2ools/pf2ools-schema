import { z } from "zod";
export declare const contentDatatype: z.ZodEnum<
	["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]
>;
export declare const metaDatatype: z.ZodEnum<["license", "source", "sourceGroup"]>;
export declare const datatype: z.ZodUnion<
	[
		z.ZodEnum<
			["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]
		>,
		z.ZodEnum<["license", "source", "sourceGroup"]>,
	]
>;
export declare const datatypes: z.ZodArray<
	z.ZodUnion<
		[
			z.ZodEnum<
				[
					"background",
					"condition",
					"divineIntercession",
					"domain",
					"event",
					"familiarAbility",
					"relicGift",
					"skill",
				]
			>,
			z.ZodEnum<["license", "source", "sourceGroup"]>,
		]
	>,
	"many"
>;
