import { z } from "zod";

export const condition = z
  .object({
    type: z.literal("condition"),
    name: z
      .object({
        primary: z
          .string()
          .min(1)
          .describe(
            "The full name of the statblock or header, exactly as it appears in the source. The only exception is when the source uses stylistic all-caps or no-caps, in which case you should use your judgement and possibly convert it to title-case.",
          )
          .refine((val) => !val.match(/@/g), {
            message: "To weed out `@tag`s.",
          }),
        aliases: z
          .array(
            z
              .string()
              .min(1)
              .describe("An alternative name for the entity.")
              .refine((val) => !val.match(/@/g), {
                message: "To weed out `@tag`s.",
              }),
          )
          .min(1)
          .describe(
            'An array of alternative names of an entity. Some entities have multiple common names, whether defined in the statblock itself or the surrounding text. Alternative names may also be provided to ease searching, sorting, and filtering with common mistakes (e.g. calling the Aid action "Help").',
          )
          .optional(),
        specifier: z
          .string()
          .min(1)
          .describe(
            'A string to meaningfully disambiguate identically named entities (by necessity if they\'re from the same source). This often occurs, for example, with feats common to multiple classes (e.g. "Attack of Opportunity"). It can also occur when one entity in the source effectively defines multiple entities in data, each of which need to be disambiguated.',
          )
          .refine((val) => !val.match(/@/g), {
            message: "To weed out `@tag`s.",
          })
          .optional(),
        variantOf: z
          .object({
            name: z.string().min(1).optional(),
            sourceID: z.string().min(1).optional(),
          })
          .strict()
          .describe("???")
          .optional(),
      })
      .strict()
      .describe("A combined object to describe an entity's name."),
    source: z
      .object({
        ID: z
          .string()
          .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
          .min(2)
          .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message:
              "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
          }),
        page: z
          .number()
          .int()
          .gte(1)
          .describe("The page number (if any) on which the content begins.")
          .optional(),
        reprintOf: z
          .string()
          .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
          .min(2)
          .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message:
              "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
          })
          .optional(),
        expansionOf: z
          .string()
          .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
          .min(2)
          .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message:
              "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
          })
          .optional(),
        originalOf: z
          .string()
          .regex(new RegExp("^[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9]$"))
          .min(2)
          .refine((val) => !val.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/g), {
            message:
              "These are reserved filenames in Windows. At some point someone will save a source file and/or its content as \"<id>.json\" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\\_(ツ)_/¯",
          })
          .optional(),
      })
      .describe("Source object for a content entity."),
    data: z
      .object({
        entries: z
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
                .describe(
                  "A paragraph with a header or some particular formatting.",
                ),
            ]),
          )
          .min(1)
          .describe("Pf2ools' entry value (string or object)."),
      })
      .strict(),
    tags: z
      .object({
        group: z
          .object({
            Attitudes: z
              .literal(true)
              .describe("The condition is in the 'Attitudes' group (PHB p619).")
              .optional(),
            "Death and Dying": z
              .literal(true)
              .describe(
                "The condition is in the 'Death and Dying' group (PHB p619).",
              )
              .optional(),
            "Degrees of Detection": z
              .literal(true)
              .describe(
                "The condition is in the 'Degrees of Detection' group (PHB p619).",
              )
              .optional(),
            "Lowered Abilities": z
              .literal(true)
              .describe(
                "The condition is in the 'Lowered Abilities' group (PHB p619).",
              )
              .optional(),
            Senses: z
              .literal(true)
              .describe("The condition is in the 'Senses' group (PHB p619).")
              .optional(),
          })
          .catchall(z.literal(true))
          .describe(
            "An object containing any groups the condition belongs to. The properties should be in title case.",
          )
          .optional(),
      })
      .strict()
      .optional(),
  })
  .strict()
  .describe("Pf2ools' condition object.");
