import { z } from "zod";
import { uniqueStrings } from "../../utils/uniqueStrings.js";
export const name = z
    .object({
    primary: z
        .string()
        .describe("The full name of the statblock or header, exactly as it appears in the source. The only exception is when the source uses stylistic all-caps or no-caps, in which case you should use your judgement and possibly convert it to title-case.")
        .min(1)
        // To weed out `@tag`s
        .refine((s) => !s.match(/@|\|/), "`@` and `|` are reserved characters"),
    aliases: z
        .array(z.string().describe("An alternative name for the content.").min(1))
        .describe('An array of alternative names of an entity. Some entities have multiple common names, whether defined in the statblock itself or the surrounding text. Alternative names may also be provided to ease searching, sorting, and filtering with common mistakes (e.g. calling the Aid action "Help").')
        .min(1)
        .refine(...uniqueStrings)
        .optional(),
    specifier: z
        .string()
        .describe('A string to meaningfully disambiguate identically named entities (by necessity if they\'re from the same source). This often occurs, for example, with feats common to multiple classes (e.g. "Attack of Opportunity"). It can also occur when one entity in the source effectively defines multiple entities in data, each of which need to be disambiguated.')
        .min(1)
        .refine((s) => !s.match(/@|\|/), "`@` and `|` are reserved characters")
        .optional(),
})
    .strict()
    .refine((name) => name.specifier
    ? true
    : !name.primary.match(/^(?:[cC][oO][mM][0-9]?|[pP][rR][nN]|[aA][uU][xX]|[nN][uU][lL]|[lL][pP][tT][0-9])$/), "This name is prohibited.");
