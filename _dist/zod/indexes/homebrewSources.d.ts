import { z } from "zod";
export declare const homebrewSourceSummary: z.ZodObject<{
    released: z.ZodString;
    _tags: z.ZodOptional<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        status: z.ZodOptional<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        misc: z.ZodOptional<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<{
        background: "background";
        event: "event";
        condition: "condition";
        domain: "domain";
        skill: "skill";
        familiarAbility: "familiarAbility";
        relicGift: "relicGift";
    }>, z.ZodEnum<{
        source: "source";
        license: "license";
        sourceGroup: "sourceGroup";
    }>]>>;
    sourceURL: z.ZodOptional<z.ZodString>;
}, z.core.$strict>;
export declare const homebrewSources: z.ZodArray<z.ZodObject<{
    released: z.ZodString;
    _tags: z.ZodOptional<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        status: z.ZodOptional<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        misc: z.ZodOptional<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<{
        background: "background";
        event: "event";
        condition: "condition";
        domain: "domain";
        skill: "skill";
        familiarAbility: "familiarAbility";
        relicGift: "relicGift";
    }>, z.ZodEnum<{
        source: "source";
        license: "license";
        sourceGroup: "sourceGroup";
    }>]>>;
    sourceURL: z.ZodOptional<z.ZodString>;
    ID: z.ZodString;
}, z.core.$strict>>;
export declare const homebrewSourcesRecord: z.ZodRecord<z.ZodString, z.ZodObject<{
    released: z.ZodString;
    _tags: z.ZodOptional<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        status: z.ZodOptional<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
        misc: z.ZodOptional<z.ZodObject<{
            legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
            NSFW: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    added: z.ZodString;
    modified: z.ZodString;
    URL: z.ZodString;
    path: z.ZodString;
    fullTitle: z.ZodString;
    publisherAuthors: z.ZodString;
    datatypes: z.ZodArray<z.ZodUnion<[z.ZodEnum<{
        background: "background";
        event: "event";
        condition: "condition";
        domain: "domain";
        skill: "skill";
        familiarAbility: "familiarAbility";
        relicGift: "relicGift";
    }>, z.ZodEnum<{
        source: "source";
        license: "license";
        sourceGroup: "sourceGroup";
    }>]>>;
    sourceURL: z.ZodOptional<z.ZodString>;
}, z.core.$strict>>;
