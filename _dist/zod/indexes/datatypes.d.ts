import { z } from "zod";
export declare const contentDatatypesArray: readonly ["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"];
export declare const metaDatatypesArray: readonly ["license", "source", "sourceGroup"];
export declare const dataTypesArray: readonly ["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill", "license", "source", "sourceGroup"];
export declare const contentDatatype: z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>;
export declare const metaDatatype: z.ZodEnum<["license", "source", "sourceGroup"]>;
export declare const datatype: z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill", "license", "source", "sourceGroup"]>;
export declare const datatypes: z.ZodArray<z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill", "license", "source", "sourceGroup"]>, "many">;
