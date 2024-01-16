import { z } from "zod";
export declare const homebrewSourceSummary: z.ZodObject<{
    released: z.ZodString;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>>;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}>;
export declare const homebrewSources: z.ZodArray<z.ZodObject<{
    path: z.ZodString;
    released: z.ZodString;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
    ID: z.ZodEffects<z.ZodString, string, string>;
}, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    ID: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
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
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}>, "many">;
export declare const homebrewSourcesRecord: z.ZodEffects<z.ZodRecord<z.ZodEffects<z.ZodString, string, string>, z.ZodObject<{
    released: z.ZodString;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
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
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }, {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }, {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    }>>;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<["background", "condition", "divineIntercession", "domain", "event", "familiarAbility", "relicGift", "skill"]>, z.ZodEnum<["license", "source", "sourceGroup"]>]>, "many">;
    sourceURL: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}>>, Record<string, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}>, Record<string, {
    path: string;
    released: string;
    added: string;
    modified: string;
    URL: string;
    fullTitle: string;
    publisherAuthors: string;
    datatypes: ("source" | "background" | "event" | "condition" | "divineIntercession" | "domain" | "skill" | "relicGift" | "license" | "sourceGroup" | "familiarAbility")[];
    tags?: {
        publicationType?: {
            Comic?: true | undefined;
            "Blog post"?: true | undefined;
        } | undefined;
        status?: {
            "Missing content"?: true | undefined;
            "Missing tags"?: true | undefined;
            Invalid?: true | undefined;
        } | undefined;
        misc?: {
            Official?: true | undefined;
            "GM-facing"?: true | undefined;
            "PFS-legal"?: true | undefined;
            Playtest?: true | undefined;
            Ongoing?: true | undefined;
            Deprecated?: true | undefined;
        } | undefined;
    } | undefined;
    sourceURL?: string | undefined;
}>>;
