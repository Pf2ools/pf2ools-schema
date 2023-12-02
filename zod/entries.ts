import { z } from "zod";

export const entries = z
  .array(
    z.union([
      z
        .string()
        .min(1)
        .describe(
          "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
        ),
      z
        .object({ type: z.string().min(1) })
        .describe("A paragraph with a header or some particular formatting."),
    ]),
  )
  .min(1)
  .describe("Pf2ools' entry value (string or object).");
