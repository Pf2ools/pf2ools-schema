import { z } from "zod";
export declare const sourceData: z.ZodObject<{
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
export declare const source: z.ZodObject<{
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
}, z.core.$strict>;
export type sourceInfer = z.infer<typeof source>;
