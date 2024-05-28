// This file was generated by scripts/generate-zod-combinedTypes.js at Tue, 28 May 2024 02:24:24 GMT

import { z } from "zod";

import { background } from "./content/background.js";
import { condition } from "./content/condition.js";
import { domain } from "./content/domain.js";
import { event } from "./content/event.js";
import { familiarAbility } from "./content/familiarAbility.js";
import { relicGift } from "./content/relicGift.js";
import { skill } from "./content/skill.js";

export const content = z
	.discriminatedUnion("type", [background, condition, domain, event, familiarAbility, relicGift, skill])
	.refine(
		(content) =>
			content.reference
				? content.reference.type === "reprint"
					? true
					: !!content.data !== !!content.reference.modifications
				: content.data,
		"Choose one of `data` and `reference.modifications` to describe the content.",
	);
