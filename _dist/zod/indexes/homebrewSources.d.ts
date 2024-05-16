import { z } from "zod";
export declare const homebrewSourceSummary: z.ZodObject<z.objectUtil.extendShape<Pick<{
    released: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    errataed: z.ZodOptional<z.ZodString>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    licenseID: z.ZodEffects<z.ZodString, string, string>;
    copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
    }, {
        type: string;
    }>]>, "many">>;
    authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    publisher: z.ZodOptional<z.ZodString>;
    converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>>;
        misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>>;
}, "released" | "added" | "modified" | "URL">, {
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
}>, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}>;
export declare const homebrewSources: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<z.objectUtil.extendShape<Pick<{
    released: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    errataed: z.ZodOptional<z.ZodString>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    licenseID: z.ZodEffects<z.ZodString, string, string>;
    copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
    }, {
        type: string;
    }>]>, "many">>;
    authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    publisher: z.ZodOptional<z.ZodString>;
    converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>>;
        misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>>;
}, "released" | "added" | "modified" | "URL">, {
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
}>, {
    ID: z.ZodEffects<z.ZodString, string, string>;
}>, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    ID: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}, {
    path: string;
    released: string;
    ID: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}>, "many">;
export declare const homebrewSourcesRecord: z.ZodEffects<z.ZodRecord<z.ZodEffects<z.ZodString, string, string>, z.ZodObject<z.objectUtil.extendShape<Pick<{
    released: z.ZodString;
    version: z.ZodOptional<z.ZodString>;
    errataed: z.ZodOptional<z.ZodString>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    licenseID: z.ZodEffects<z.ZodString, string, string>;
    copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
    }, {
        type: string;
    }>]>, "many">>;
    authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    publisher: z.ZodOptional<z.ZodString>;
    converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
    _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }, {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        }>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }, {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        }>>;
        misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }, {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }, {
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        misc?: {
            legacyRuleset?: true | undefined;
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
            NSFW?: true | undefined;
        } | undefined;
    }>>;
}, "released" | "added" | "modified" | "URL">, {
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
}>, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}>>, Record<string, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}>, Record<string, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "license" | "sourceGroup" | "condition" | "domain" | "skill" | "familiarAbility" | "relicGift")[];
    sourceURL?: string | undefined;
}>>;
