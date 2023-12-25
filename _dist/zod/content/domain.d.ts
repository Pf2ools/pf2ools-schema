import { z } from "zod";
export declare const domain: z.ZodObject<{
    type: z.ZodLiteral<"domain">;
    data: z.ZodObject<{
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodEffects<z.ZodString, string, string>;
        }, "strict", z.ZodTypeAny, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }, {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    }, {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    }>;
}, "strict", z.ZodTypeAny, {
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    };
}, {
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        advancedDomainSpell: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            sourceID: string;
            specifier?: string | undefined;
        } | undefined;
    };
}>;
