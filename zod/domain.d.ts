import { z } from "zod";
export declare const domain: z.ZodObject<{
    type: z.ZodLiteral<"domain">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        variantOf: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string | undefined;
            sourceID?: string | undefined;
        }, {
            name?: string | undefined;
            sourceID?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    }, {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
        reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    }, {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    }>;
    data: z.ZodObject<{
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
        }, {
            name: string;
            sourceID: string;
        }>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
        }, {
            name: string;
            sourceID: string;
        }>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
        }, {
            name: string;
            sourceID: string;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
        }, {
            name: string;
            sourceID: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        domainSpell: {
            name: string;
            sourceID: string;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
    }, {
        domainSpell: {
            name: string;
            sourceID: string;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
    }>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    };
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            sourceID: string;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    };
    tags?: Record<string, any> | undefined;
}, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
        variantOf?: {
            name?: string | undefined;
            sourceID?: string | undefined;
        } | undefined;
    };
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            sourceID: string;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
        } | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
        reprintOf?: string | undefined;
        expansionOf?: string | undefined;
        originalOf?: string | undefined;
    };
    tags?: Record<string, any> | undefined;
}>;
