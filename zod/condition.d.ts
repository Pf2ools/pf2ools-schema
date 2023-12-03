export const condition: z.ZodObject<{
    type: z.ZodLiteral<"condition">;
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
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">;
    }, "strict", z.ZodTypeAny, {
        entries?: (string | {
            type?: string;
        })[];
    }, {
        entries?: (string | {
            type?: string;
        })[];
    }>;
    tags: z.ZodOptional<z.ZodObject<{
        group: z.ZodOptional<z.ZodObject<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">>>;
    }, "strict", z.ZodTypeAny, {
        group?: z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    }, {
        group?: z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "condition";
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
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        group?: z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    };
}, {
    type?: "condition";
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
        entries?: (string | {
            type?: string;
        })[];
    };
    tags?: {
        group?: z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    };
}>;
import { z } from "zod";
