// This file was generated by scripts/generate-zod-combinedTypes.js at Wed, 27 Dec 2023 02:43:13 GMT

import { z } from "zod";

import { background } from "./content/background.js";
import { condition } from "./content/condition.js";
import { divineIntercession } from "./content/divineIntercession.js";
import { domain } from "./content/domain.js";
import { event } from "./content/event.js";
import { relicGift } from "./content/relicGift.js";
import { skill } from "./content/skill.js";

export const statblock = z.discriminatedUnion("type", [
	background,
	condition,
	divineIntercession,
	domain,
	event,
	relicGift,
	skill,
]);
