// This file was generated by scripts/generate-zod-combinedTypes.js at Thu, 25 Apr 2024 01:14:44 GMT
import { z } from "zod";
import { background } from "./content/background.js";
import { condition } from "./content/condition.js";
import { divineIntercession } from "./content/divineIntercession.js";
import { domain } from "./content/domain.js";
import { event } from "./content/event.js";
import { familiarAbility } from "./content/familiarAbility.js";
import { relicGift } from "./content/relicGift.js";
import { skill } from "./content/skill.js";
export const content = z.discriminatedUnion("type", [
    background,
    condition,
    divineIntercession,
    domain,
    event,
    familiarAbility,
    relicGift,
    skill,
]);
