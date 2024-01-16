import { z } from "zod";
import { content } from "../content.js";
import { entries } from "./common/entries.js";
import { nonEmpty } from "../utils/nonEmpty.js";
export const familiarAbility = content.merge(z
    .object({
    type: z.literal("familiarAbility"),
    data: z
        .object({
        abilityType: z.enum(["Familiar", "Master"]).describe("The familiar ability's type."),
        entries: entries,
    })
        .strict(),
    tags: z
        .object({
        misc: z
            .object({
            affectsCommunication: z
                .literal(true)
                .describe("The ability affects the familiar's capacity to communicate (e.g. by granting it languages).")
                .optional(),
            affectsSenses: z
                .literal(true)
                .describe("The ability affects the familiar's senses or grants a new sense (e.g. darkvision, scent).")
                .optional(),
            affectsMovement: z
                .literal(true)
                .describe("The ability affects the familiar's capacity to move or grants a new Speed.")
                .optional(),
            hasRequirement: z
                .literal(true)
                .describe("You or the familiar must satisfy a certain requirement to choose this ability.")
                // This might become a proper `requirements` array/object in the `data` at some point
                .optional(),
            grantsAbility: z
                .literal(true)
                .describe("The ability grants you or the familiar an active, voluntary ability.")
                .optional(),
            repeatable: z.literal(true).describe("You can select this ability multiple times.").optional(),
        })
            .describe("Miscellaneous tags")
            .strict()
            .refine(...nonEmpty)
            .optional(),
    })
        .strict()
        .refine(...nonEmpty)
        .optional(),
})
    .describe("A familiar ability")
    .strict());
