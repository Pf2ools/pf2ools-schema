import { z } from "zod";
import { contentTemplate } from "../contentTemplate.js";
import { entryString } from "./common/entryString.js";
import { referenceTarget } from "./common/referenceTarget.js";
export const domain = contentTemplate
    .extend({
    type: z.literal("domain"),
    data: z
        .object({
        preamble: entryString
            .describe("The typically brief sentence or two of flavour text that describes the domain or otherwise provides guidance on its use.")
            .optional(),
        domainSpell: referenceTarget,
        advancedDomainSpell: referenceTarget,
        apocryphalSpell: referenceTarget
            .describe("A reference target to the domain's apocryphal spell (see Dark Archive p142)")
            .optional(),
        advancedApocryphalSpell: referenceTarget
            .describe("The reference target to the domain's advanced apocryphal spell (see Dark Archive p142)")
            .optional(),
    })
        .strict()
        .optional(),
})
    .describe("A domain (for a religion)")
    .strict();
