import { z } from "zod";
export declare const relicGift: z.ZodObject<{
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
    type: z.ZodLiteral<"relicGift">;
    data: z.ZodOptional<z.ZodObject<{
        tier: z.ZodString;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        aspects: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        prerequisites: z.ZodOptional<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            itemTypes: z.ZodOptional<z.ZodObject<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$catchall<z.ZodLiteral<true>>>>;
            misc: z.ZodOptional<z.ZodObject<{
                "Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
                "Is rune": z.ZodOptional<z.ZodLiteral<true>>;
                "Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type relicGiftInfer = z.infer<typeof relicGift>;
