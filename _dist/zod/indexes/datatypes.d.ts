import { z } from "zod";
export declare const contentDatatype: z.ZodEnum<{
    background: "background";
    event: "event";
    condition: "condition";
    domain: "domain";
    skill: "skill";
    familiarAbility: "familiarAbility";
    relicGift: "relicGift";
}>;
export declare const metaDatatype: z.ZodEnum<{
    source: "source";
    license: "license";
    sourceGroup: "sourceGroup";
}>;
export declare const datatype: z.ZodUnion<[z.ZodEnum<{
    background: "background";
    event: "event";
    condition: "condition";
    domain: "domain";
    skill: "skill";
    familiarAbility: "familiarAbility";
    relicGift: "relicGift";
}>, z.ZodEnum<{
    source: "source";
    license: "license";
    sourceGroup: "sourceGroup";
}>]>;
export declare const datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<{
    background: "background";
    event: "event";
    condition: "condition";
    domain: "domain";
    skill: "skill";
    familiarAbility: "familiarAbility";
    relicGift: "relicGift";
}>, z.ZodEnum<{
    source: "source";
    license: "license";
    sourceGroup: "sourceGroup";
}>]>>;
