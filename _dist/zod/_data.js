// This file was generated by scripts/generate-zod-combinedTypes.js at Thu, 28 Dec 2023 05:40:11 GMT
import { z } from "zod";
import { license } from "./license.js";
import { source } from "./source.js";
import { sourceGroup } from "./sourceGroup.js";
import { background } from "./content/background.js";
import { condition } from "./content/condition.js";
import { divineIntercession } from "./content/divineIntercession.js";
import { domain } from "./content/domain.js";
import { event } from "./content/event.js";
import { relicGift } from "./content/relicGift.js";
import { skill } from "./content/skill.js";
export const data = z.discriminatedUnion("type", [
	license,
	source,
	sourceGroup,
	background,
	condition,
	divineIntercession,
	domain,
	event,
	relicGift,
	skill,
]);
