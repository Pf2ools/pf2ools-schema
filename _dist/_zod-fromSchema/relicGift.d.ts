import { z } from "zod";
export declare const relicGift: z.ZodObject<{
    type: z.ZodLiteral<"relicGift">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    data: z.ZodObject<{
        tier: z.ZodString;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }, {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }>, "many">>;
        aspects: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            note?: string | undefined;
        }, {
            name: string;
            note?: string | undefined;
        }>, "many">;
        prerequisites: z.ZodOptional<z.ZodString>;
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
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    }, {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    }>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        }, {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        }>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                property: string;
                name?: string | undefined;
            }, {
                property: string;
                name?: string | undefined;
            }>;
            value: z.ZodOptional<z.ZodEffects<z.ZodAny, any, any>>;
        }, "strict", z.ZodTypeAny, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }, {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    }, {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    }>>;
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
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        }, {
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip"> | undefined;
        misc?: {
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        } | undefined;
    }, {
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip"> | undefined;
        misc?: {
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        } | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    type: "relicGift";
    data: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    } | undefined;
    tags?: {
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip"> | undefined;
        misc?: {
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        } | undefined;
    } | undefined;
}, {
    type: "relicGift";
    data: {
        entries: (string | {
            type: string;
        })[];
        tier: string;
        aspects: {
            name: string;
            note?: string | undefined;
        }[];
        traits?: {
            trait: string;
            variables?: string[] | undefined;
            display?: string | undefined;
        }[] | undefined;
        prerequisites?: string | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            sourceID?: string | undefined;
        };
        modifications?: {
            type: string;
            target: {
                property: string;
                name?: string | undefined;
            };
            value?: any;
        }[] | undefined;
    } | undefined;
    tags?: {
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip"> | undefined;
        misc?: {
            "Alters relic"?: true | undefined;
            "Grants ability"?: true | undefined;
            "Grants passive attribute"?: true | undefined;
            "Is rune"?: true | undefined;
            "Soul seed"?: true | undefined;
        } | undefined;
    } | undefined;
}>;
