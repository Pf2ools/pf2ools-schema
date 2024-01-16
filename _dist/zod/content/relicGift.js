import { z } from "zod";
import { content } from "../content.js";
import { entries } from "./common/entries.js";
import { traits } from "./common/traits.js";
import { nonEmpty } from "../utils/nonEmpty.js";
import { titleCaseProperties } from "../utils/titleCaseProperties.js";
import { entryString } from "./common/entryString.js";
export const relicGift = content.merge(z
    .object({
    type: z.literal("relicGift"),
    data: z
        .object({
        tier: z
            .string()
            .describe("The relic gift's tier (title case)")
            .min(1)
            .regex(/^[A-Z]/, "Tier should be in title case"),
        traits: traits.optional(),
        aspects: z.array(z
            .object({
            name: z.string().describe("The aspect's name").min(1),
            note: z
                .string()
                .describe('A bracketed note qualifying the aspect (e.g. the "azata-themed" in "celestial (azata-themed)").')
                .min(1)
                .optional(),
        })
            .strict()),
        prerequisites: entryString.optional(),
        entries: entries,
    })
        .strict(),
    tags: z
        .object({
        itemTypes: z
            .object({
            Armor: z
                .literal(true)
                .describe("The relic must be a piece or suit of armour to have this gift.")
                .optional(),
            "Worn Item": z.literal(true).describe("The relic must be a worn item to have this gift.").optional(),
            Weapon: z.literal(true).describe("The relic must be a weapon to have this gift.").optional(),
        })
            .describe("An object containing the types of item the relic must be in order to have this gift. The properties should be in title case.")
            .catchall(z.literal(true))
            .refine(...nonEmpty)
            .refine(...titleCaseProperties)
            .optional(),
        misc: z
            .object({
            "Alters relic": z
                .literal(true)
                .describe("The gift permanently changes the relic's nature in some way.")
                .optional(),
            "Grants ability": z
                .literal(true)
                .describe("The gift grants the character a new, activatable ability (including spells).")
                .optional(),
            "Grants passive attribute": z
                .literal(true)
                .describe("The gift grants the character a new Speed, a damage resistance, an automatic bonus, or another always-active ability.")
                .optional(),
            "Is rune": z.literal(true).describe("The gift mimics the effect of a rune.").optional(),
            "Soul seed": z
                .literal(true)
                .describe('The gift is "particularly appropriate" for soul seeds (SoM p230).')
                .optional(),
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
    .describe("A relic gift")
    .strict());
