import { z } from "zod";
export declare const event: z.ZodObject<{
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    }>;
    tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
    type: z.ZodLiteral<"event">;
    data: z.ZodObject<{
        level: z.ZodNumber;
        traits: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }>, "many">, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[], {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[]>>;
        applicableSkills: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodObject<{
            skill: z.ZodEnum<["Acrobatics", "Arcana", "Athletics", "Crafting", "Deception", "Diplomacy", "Intimidation", "Lore", "Medicine", "Nature", "Occultism", "Performance", "Religion", "Society", "Stealth", "Survival", "Thievery"]>;
            variables: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "many">, string[], string[]>>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }>, "many">, {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[], {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[]>>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
        }, {
            type: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "event";
    data: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
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
}, {
    type: "event";
    data: {
        entries: (string | {
            type: string;
        })[];
        level: number;
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        applicableSkills?: {
            skill: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
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
}>;
