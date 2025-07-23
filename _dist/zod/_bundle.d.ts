import { z } from "zod";
export declare const bundle: z.ZodObject<{
    license: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"license">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodObject<{
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>]>>;
        }, z.core.$strict>;
    }, z.core.$strict>>>;
    source: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"source">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodObject<{
            released: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
            errataed: z.ZodOptional<z.ZodString>;
            added: z.ZodString;
            modified: z.ZodString;
            URL: z.ZodString;
            groupIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            requiredSourceIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            licenseID: z.ZodString;
            copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>]>>>;
            authors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            publisher: z.ZodOptional<z.ZodString>;
            converters: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
        }, z.core.$strict>;
    }, z.core.$strict>>;
    sourceGroup: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"sourceGroup">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodOptional<z.ZodObject<{
            publisher: z.ZodString;
            _tags: z.ZodOptional<z.ZodObject<{
                misc: z.ZodObject<{
                    Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                }, z.core.$strict>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>>;
    background: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    condition: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    domain: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    event: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    familiarAbility: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    relicGift: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
    skill: z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>;
}, z.core.$strip>;
export declare const anyBundle: z.ZodObject<{
    license: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"license">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodObject<{
            entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>]>>;
        }, z.core.$strict>;
    }, z.core.$strict>>>>;
    source: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"source">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodObject<{
            released: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
            errataed: z.ZodOptional<z.ZodString>;
            added: z.ZodString;
            modified: z.ZodString;
            URL: z.ZodString;
            groupIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            requiredSourceIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
            licenseID: z.ZodString;
            copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, z.core.$strip>]>>>;
            authors: z.ZodOptional<z.ZodArray<z.ZodString>>;
            publisher: z.ZodOptional<z.ZodString>;
            converters: z.ZodOptional<z.ZodArray<z.ZodString>>;
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
        }, z.core.$strict>;
    }, z.core.$strict>>>;
    sourceGroup: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"sourceGroup">;
        ID: z.ZodString;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, z.core.$strict>;
        data: z.ZodOptional<z.ZodObject<{
            publisher: z.ZodString;
            _tags: z.ZodOptional<z.ZodObject<{
                misc: z.ZodObject<{
                    Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                }, z.core.$strict>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>>>;
    background: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    condition: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    domain: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    event: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    familiarAbility: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    relicGift: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
    skill: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<z.core.$ZodLooseShape, z.core.$strip>>>>;
}, z.core.$strip>;
export type bundleInfer = z.infer<typeof bundle>;
