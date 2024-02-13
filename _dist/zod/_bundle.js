// This file was generated by scripts/generate-zod-combinedTypes.js at Tue, 13 Feb 2024 03:26:35 GMT
import { z } from "zod";
import { license } from "./license.js";
import { source } from "./source.js";
import { sourceGroup } from "./sourceGroup.js";
import { background } from "./content/background.js";
import { condition } from "./content/condition.js";
import { divineIntercession } from "./content/divineIntercession.js";
import { domain } from "./content/domain.js";
import { event } from "./content/event.js";
import { familiarAbility } from "./content/familiarAbility.js";
import { relicGift } from "./content/relicGift.js";
import { skill } from "./content/skill.js";
export const bundle = z.object({
    license: z.array(license).min(1).optional(),
    source: z.array(source).min(1),
    sourceGroup: z.array(sourceGroup).min(1).optional(),
    background: z.array(background).min(1).optional(),
    condition: z.array(condition).min(1).optional(),
    divineIntercession: z.array(divineIntercession).min(1).optional(),
    domain: z.array(domain).min(1).optional(),
    event: z.array(event).min(1).optional(),
    familiarAbility: z.array(familiarAbility).min(1).optional(),
    relicGift: z.array(relicGift).min(1).optional(),
    skill: z.array(skill).min(1).optional(),
});
import { nonEmpty } from "./utils/nonEmpty.js";
export const anyBundle = bundle.partial().refine(...nonEmpty);
