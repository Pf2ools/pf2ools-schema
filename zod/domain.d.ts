export const domain: z.ZodObject<{
    type: z.ZodLiteral<"domain">;
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
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        preamble?: string;
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
    }, {
        preamble?: string;
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
    }>;
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    type?: "domain";
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
        preamble?: string;
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
    };
    tags?: Record<string, any>;
}, {
    type?: "domain";
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
        preamble?: string;
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
    };
    tags?: Record<string, any>;
}>;
import { z } from "zod";
