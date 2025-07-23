import { z } from "zod";
export declare const skillType: z.ZodObject<{
    skill: z.ZodEnum<{
        Acrobatics: "Acrobatics";
        Arcana: "Arcana";
        Athletics: "Athletics";
        Crafting: "Crafting";
        Deception: "Deception";
        Diplomacy: "Diplomacy";
        Intimidation: "Intimidation";
        Lore: "Lore";
        Medicine: "Medicine";
        Nature: "Nature";
        Occultism: "Occultism";
        Performance: "Performance";
        Religion: "Religion";
        Society: "Society";
        Stealth: "Stealth";
        Survival: "Survival";
        Thievery: "Thievery";
    }>;
    variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
    display: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
