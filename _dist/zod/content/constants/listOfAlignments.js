import { z } from "zod";
export const listOfAlignments = z
    .enum(["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"])
    .describe("An uppercase alignment abbreviation.");
