import { z } from "zod";
export declare const event: z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"event">;
    data: z.ZodOptional<z.ZodObject<{
        level: z.ZodNumber;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        applicableSkills: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
        }, z.core.$strict>>>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type eventInfer = z.infer<typeof event>;
