import { z } from "zod";
export declare const domain: z.ZodObject<{
    type: z.ZodLiteral<"domain">;
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
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            source: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            source: string;
        }, {
            name: string;
            source: string;
        }>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            source: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            source: string;
        }, {
            name: string;
            source: string;
        }>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            source: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            source: string;
        }, {
            name: string;
            source: string;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            source: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name: string;
            source: string;
        }, {
            name: string;
            source: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        domainSpell: {
            name: string;
            source: string;
        };
        advancedDomainSpell: {
            name: string;
            source: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
    }, {
        domainSpell: {
            name: string;
            source: string;
        };
        advancedDomainSpell: {
            name: string;
            source: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
    }>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            source: z.ZodAny;
        }, "strict", z.ZodTypeAny, {
            name: string;
            specifier?: string | undefined;
            source?: any;
        }, {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
            source?: any;
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
            source?: any;
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
    tags: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodAny>>;
}, "strict", z.ZodTypeAny, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            source: string;
        };
        advancedDomainSpell: {
            name: string;
            source: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
    tags?: Record<string, any> | undefined;
}, {
    name: {
        primary: string;
        aliases?: string[] | undefined;
        specifier?: string | undefined;
    };
    type: "domain";
    data: {
        domainSpell: {
            name: string;
            source: string;
        };
        advancedDomainSpell: {
            name: string;
            source: string;
        };
        preamble?: string | undefined;
        apocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
        advancedApocryphalSpell?: {
            name: string;
            source: string;
        } | undefined;
    };
    source: {
        ID: string;
        page?: number | undefined;
    };
    reference?: {
        type: "variant" | "reprint" | "replacement" | "extension";
        target: {
            name: string;
            specifier?: string | undefined;
            source?: any;
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
    tags?: Record<string, any> | undefined;
}>;
