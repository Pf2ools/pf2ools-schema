export const source: z.ZodObject<{
    type: z.ZodLiteral<"source">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        full?: string;
        short?: string;
    }, {
        full?: string;
        short?: string;
    }>;
    data: z.ZodObject<{
        released: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        errataed: z.ZodOptional<z.ZodString>;
        added: z.ZodString;
        modified: z.ZodString;
        url: z.ZodOptional<z.ZodString>;
        groupIDs: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        license: z.ZodEffects<z.ZodString, string, string>;
        authors: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        publisher: z.ZodOptional<z.ZodString>;
        converters: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strict", z.ZodTypeAny, {
        released?: string;
        version?: string;
        errataed?: string;
        added?: string;
        modified?: string;
        url?: string;
        groupIDs?: string[];
        copyright?: (string | {
            type?: string;
        })[];
        license?: string;
        authors?: string[];
        publisher?: string;
        converters?: string[];
    }, {
        released?: string;
        version?: string;
        errataed?: string;
        added?: string;
        modified?: string;
        url?: string;
        groupIDs?: string[];
        copyright?: (string | {
            type?: string;
        })[];
        license?: string;
        authors?: string[];
        publisher?: string;
        converters?: string[];
    }>;
    tags: z.ZodOptional<z.ZodObject<{
        publicationType: z.ZodOptional<z.ZodObject<{
            Comic: z.ZodOptional<z.ZodLiteral<true>>;
            "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Comic?: true;
            "Blog post"?: true;
        }, {
            Comic?: true;
            "Blog post"?: true;
        }>>;
        status: z.ZodOptional<z.ZodObject<{
            "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
            "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
            Invalid: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        }, {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        }>>;
        misc: z.ZodOptional<z.ZodObject<{
            Official: z.ZodOptional<z.ZodLiteral<true>>;
            "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
            "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
            Playtest: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        }, {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        }>>;
    }, "strict", z.ZodTypeAny, {
        publicationType?: {
            Comic?: true;
            "Blog post"?: true;
        };
        status?: {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        };
        misc?: {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        };
    }, {
        publicationType?: {
            Comic?: true;
            "Blog post"?: true;
        };
        status?: {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        };
        misc?: {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        };
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "source";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        released?: string;
        version?: string;
        errataed?: string;
        added?: string;
        modified?: string;
        url?: string;
        groupIDs?: string[];
        copyright?: (string | {
            type?: string;
        })[];
        license?: string;
        authors?: string[];
        publisher?: string;
        converters?: string[];
    };
    tags?: {
        publicationType?: {
            Comic?: true;
            "Blog post"?: true;
        };
        status?: {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        };
        misc?: {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        };
    };
}, {
    type?: "source";
    ID?: string;
    title?: {
        full?: string;
        short?: string;
    };
    data?: {
        released?: string;
        version?: string;
        errataed?: string;
        added?: string;
        modified?: string;
        url?: string;
        groupIDs?: string[];
        copyright?: (string | {
            type?: string;
        })[];
        license?: string;
        authors?: string[];
        publisher?: string;
        converters?: string[];
    };
    tags?: {
        publicationType?: {
            Comic?: true;
            "Blog post"?: true;
        };
        status?: {
            "Missing content"?: true;
            "Missing tags"?: true;
            Invalid?: true;
        };
        misc?: {
            Official?: true;
            "GM-facing"?: true;
            "PFS-legal"?: true;
            Playtest?: true;
            Ongoing?: true;
            Deprecated?: true;
        };
    };
}>;
import { z } from "zod";
