import { z } from "zod";
import { contentTemplate } from "../contentTemplate.js";
import { entries } from "./common/entries.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { titleCaseProperties } from "../utils/titleCaseProperties.js";
export const condition = contentTemplate
    .extend({
    type: z.literal("condition"),
    data: z
        .object({
        entries: entries,
        _tags: z
            .object({
            group: z
                .object({
                Attitudes: z
                    .literal(true)
                    .describe("The condition is in the 'Attitudes' group (CRB p619).")
                    .optional(),
                "Death and Dying": z
                    .literal(true)
                    .describe("The condition is in the 'Death and Dying' group (CRB p619).")
                    .optional(),
                "Degrees of Detection": z
                    .literal(true)
                    .describe("The condition is in the 'Degrees of Detection' group (CRB p619).")
                    .optional(),
                "Lowered Abilities": z
                    .literal(true)
                    .describe("The condition is in the 'Lowered Abilities' group (CRB p619).")
                    .optional(),
                Senses: z.literal(true).describe("The condition is in the 'Senses' group (CRB p619).").optional(),
            })
                .describe("An object containing any groups the condition belongs to. The properties should be in title case.")
                .catchall(z.literal(true))
                .refine(...nonEmpty)
                .refine(...titleCaseProperties)
                .optional(),
        })
            .strict()
            .refine(...nonEmpty)
            .optional(),
    })
        .describe("An object describing the content for filtering, searching, and sorting.")
        .strict()
        .optional(),
})
    .describe("A condition")
    .strict();
