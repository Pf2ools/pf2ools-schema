// This file was generated by scripts/generate-zod-statblockType.js at Mon, 25 Dec 2023 04:31:55 GMT

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
