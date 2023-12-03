export const relicGift: z.ZodObject<{
    type: z.ZodLiteral<"relicGift">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        variantOf: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
        reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }>;
    data: z.ZodObject<{
        tier: z.ZodString;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait?: string;
            variables?: string[];
            display?: string;
        }, {
            trait?: string;
            variables?: string[];
            display?: string;
        }>, "many">>;
        aspects: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            note?: string;
        }, {
            name?: string;
            note?: string;
        }>, "many">;
        prerequisites: z.ZodOptional<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        tier?: string;
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
        entries?: (string | {
            type?: string;
        })[];
    }, {
        tier?: string;
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
        entries?: (string | {
            type?: string;
        })[];
    }>;
    tags: z.ZodOptional<z.ZodObject<{
        itemTypes: z.ZodOptional<z.ZodObject<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">>>;
        misc: z.ZodOptional<z.ZodObject<{
            "Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
            "Is rune": z.ZodOptional<z.ZodLiteral<true>>;
            "Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        }, {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        }>>;
    }, "strict", z.ZodTypeAny, {
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        misc?: {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
    }, {
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        misc?: {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "relicGift";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        tier?: string;
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        misc?: {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
    };
}, {
    type?: "relicGift";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        tier?: string;
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        misc?: {
            "Alters relic"?: true;
            "Grants ability"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
    };
}>;
import { z } from "zod";
