"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sourceGroup = void 0;
var zod_1 = require("zod");
exports.sourceGroup = zod_1.z
    .object({
    type: zod_1.z.literal("sourceGroup").optional(),
    ID: zod_1.z
        .string()
        .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
        .min(2)
        .refine(function (val) { return !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g); }, {
        message: "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
    }),
    title: zod_1.z
        .object({
        full: zod_1.z
            .string()
            .min(1)
            .describe("The source group's full, human-readable name. Title case is preferred but anything can be used within reason."),
        short: zod_1.z
            .string()
            .min(1)
            .max(8)
            .describe("An abbreviation or other shortening of the source group's name for display purposes."),
    })
        .strict()
        .describe("An object representing the source group's name."),
    data: zod_1.z
        .object({
        publisher: zod_1.z
            .string()
            .min(1)
            .describe("The name of the original, first-party publisher of the source group. Sources with publishers not matching this value are considered 'third-party' contributors to the source group.")
            .optional(),
    })
        .strict()
        .optional(),
    tags: zod_1.z
        .object({
        misc: zod_1.z
            .object({
            Adventure: zod_1.z
                .literal(true)
                .describe("This source group is an adventure path or the like.")
                .optional(),
            Ongoing: zod_1.z
                .literal(true)
                .describe("This source group is being continually expanded. Not all member-sources may exist on Pf2ools.")
                .optional(),
        })
            .strict()
            .optional(),
    })
        .strict()
        .describe("This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.")
        .optional(),
})
    .strict()
    .describe("A `sourceGroup` object defines the existence of a group of sources. Tautology aside, this is used to describe adventure paths, book series, and the like.");
