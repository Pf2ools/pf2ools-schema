import { z } from "zod";
export declare const sourceGroup: z.ZodObject<{
    type: z.ZodLiteral<"sourceGroup">;
    ID: z.ZodEffects<z.ZodString, string, string>;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        short: string;
        full: string;
    }, {
        short: string;
        full: string;
    }>;
    data: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        publisher: z.ZodString;
    }, "strict", z.ZodTypeAny, {
        publisher: string;
    }, {
        publisher: string;
    }>, {
        publisher: string;
    }, {
        publisher: string;
    }>>;
    tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        misc: z.ZodEffects<z.ZodObject<{
            Adventure: z.ZodOptional<z.ZodLiteral<true>>;
            Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        }, {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        }>, {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        }, {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    }, {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    }>, {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    }, {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    }>>;
}, "strict", z.ZodTypeAny, {
    type: "sourceGroup";
    title: {
        short: string;
        full: string;
    };
    ID: string;
    data?: {
        publisher: string;
    } | undefined;
    tags?: {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    } | undefined;
}, {
    type: "sourceGroup";
    title: {
        short: string;
        full: string;
    };
    ID: string;
    data?: {
        publisher: string;
    } | undefined;
    tags?: {
        misc: {
            Ongoing?: true | undefined;
            Adventure?: true | undefined;
        };
    } | undefined;
}>;
