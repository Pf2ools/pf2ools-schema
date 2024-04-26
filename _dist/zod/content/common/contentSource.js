import { z } from "zod";
import { ID } from "./ID.js";
export const contentSource = z
    .object({
    ID: ID.describe("The source ID that contains the data."),
    page: z.number().describe("The page number (if any) on which the content begins.").int().optional(),
})
    .strict();
