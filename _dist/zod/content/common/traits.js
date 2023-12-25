import { z } from "zod";
import { uniqueStrings } from "../../utils/uniqueStrings.js";
import { uniqueObjects } from "../../utils/uniqueObjects.js";
export const traits = z
    .array(z
    .object({
    trait: z
        .string()
        .describe('The bare, keyworded name of the trait (e.g. the "versatile" in "versatile P").')
        .min(1)
        .regex(/^[a-z]/), // Enforces lowercase
    variables: z
        .array(z.string().min(1))
        .describe("The variable elements of a trait in an array.")
        .min(1)
        .refine(...uniqueStrings)
        .optional(),
    display: z
        .string()
        .describe('How the trait should display, if it cannot be trivially inferred from `trait` and `variables`. (Example: "modular (P and grapple, or S and sweep)".)')
        .min(1)
        .optional(),
})
    .describe("A trait with both keyword and variable elements.")
    .strict())
    .describe("An array of objects representing a list of traits.")
    .min(1)
    .refine(...uniqueObjects);
