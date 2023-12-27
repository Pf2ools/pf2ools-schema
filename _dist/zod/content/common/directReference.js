import { z } from "zod";
import { ID } from "../../source.js";
export const directReference = z
    .object({
    name: z.string().min(1),
    specifier: z.string().min(1).optional(),
    sourceID: ID,
})
    .describe('A direct reference to another statblock. The `type` of the content is typically inferred from the context in which it is invoked (e.g. a reference in a deity\'s "Cleric Spells" entry is a spell).')
    .strict();
