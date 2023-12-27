import { z } from "zod";
export declare const domain: z.ZodObject<{
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
    }, "strict", z.ZodTypeAny, {
        ID: string;
        page?: number | undefined;
    }, {
        ID: string;
        page?: number | undefined;
    }>;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strict", z.ZodTypeAny, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    }, {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    }>;
    tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
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
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    tags?: {} | undefined;
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
    source: {
        ID: string;
        page?: number | undefined;
    };
    name: {
        primary: string;
        aliases?: [string, ...string[]] | undefined;
        specifier?: string | undefined;
    };
    tags?: {} | undefined;
}>;
