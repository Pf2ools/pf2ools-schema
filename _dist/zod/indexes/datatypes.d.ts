import { z } from "zod";
export declare const contentDatatype: z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>;
export declare const metaDatatype: z.ZodUnion<[z.ZodEnum<["license", "sourceGroup"]>, z.ZodEnum<["source"]>]>;
export declare const datatypeSansSource: z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "sourceGroup"]>]>;
export declare const datatype: z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodUnion<[z.ZodEnum<["license", "sourceGroup"]>, z.ZodEnum<["source"]>]>]>;
export declare const datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodUnion<[z.ZodEnum<["license", "sourceGroup"]>, z.ZodEnum<["source"]>]>]>, "many">;
