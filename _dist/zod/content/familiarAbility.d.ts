import { z } from "zod";
export declare const familiarAbility: z.ZodObject<{
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
    type: z.ZodLiteral<"familiarAbility">;
    data: z.ZodOptional<z.ZodObject<{
        abilityType: z.ZodEnum<{
            Familiar: "Familiar";
            Master: "Master";
        }>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            misc: z.ZodOptional<z.ZodObject<{
                affectsCommunication: z.ZodOptional<z.ZodLiteral<true>>;
                affectsSenses: z.ZodOptional<z.ZodLiteral<true>>;
                affectsMovement: z.ZodOptional<z.ZodLiteral<true>>;
                hasRequirement: z.ZodOptional<z.ZodLiteral<true>>;
                grantsAbility: z.ZodOptional<z.ZodLiteral<true>>;
                repeatable: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
