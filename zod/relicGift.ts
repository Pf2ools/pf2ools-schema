import { z } from "zod";

export const relicGift = z
  .object({
    type: z.literal("skill").describe("The type of data described."),
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
        traits: z
          .array(
            z
              .object({
                trait: z
                  .string()
                  .regex(new RegExp("^[a-z]"))
                  .min(1)
                  .describe(
                    'The bare, keyworded name of the trait (e.g. the "versatile" in "versatile P").',
                  ),
                variables: z
                  .array(
                    z
                      .string()
                      .min(1)
                      .describe(
                        'A trait\'s variable (e.g. "B", "P", and "S" in "modular B, P, or S").',
                      ),
                  )
                  .min(1)
                  .describe("The variable elements of a trait in an array.")
                  .optional(),
                display: z
                  .string()
                  .regex(new RegExp("^[a-z]"))
                  .min(1)
                  .describe(
                    "How the trait should display, if it cannot be trivially inferred from `trait` and `variables`.",
                  )
                  .optional(),
              })
              .strict()
              .describe("A trait with both keyword and variable elements."),
          )
          .min(1)
          .describe("An array of objects representing a list of traits")
          .optional(),
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
        category: z
          .string()
          .min(1)
          .describe(
            'The broad-scale category for the deity, such as its predominant region (e.g. "Mwangi Gods" for those dominant in the Mwangi Expanse), creature type (e.g. "Archdevils" for archdevil divinities), or religious construct (i.e. "Pantheon" or "Philosophy"). Follow precedent where possible.',
          )
          .optional(),
        pantheonMembers: z
          .array(
            z
              .object({ name: z.string().min(1), sourceID: z.string().min(1) })
              .strict()
              .describe(
                "A reference to another statblock. The `type` of the content is typically inferred from the context.",
              ),
          )
          .min(2)
          .describe(
            "A list of objects representing the deities that compose the pantheon (if it is one).",
          )
          .optional(),
        alignment: z
          .object({
            deity: z.enum([
              "LG",
              "NG",
              "CG",
              "LN",
              "N",
              "CN",
              "LE",
              "NE",
              "CE",
              "U",
            ]),
            follower: z
              .array(
                z.enum([
                  "LG",
                  "NG",
                  "CG",
                  "LN",
                  "N",
                  "CN",
                  "LE",
                  "NE",
                  "CE",
                  "U",
                ]),
              )
              .min(1)
              .optional(),
          })
          .strict()
          .optional(),
        areasOfConcern: z
          .array(
            z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              ),
          )
          .min(1)
          .describe(
            'The deities "Areas of Concern" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.',
          )
          .optional(),
        divineFont: z
          .object({
            harm: z.literal(true).optional(),
            heal: z.literal(true).optional(),
          })
          .strict()
          .describe(
            'An object representing the "Divine Font" header of the statblock.',
          )
          .optional(),
        divineAbility: z
          .object({
            abilities: z
              .record(z.literal(true))
              .describe(
                "An object containing the abilities the deity can boost.",
              )
              .optional(),
            entry: z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              )
              .optional(),
          })
          .strict()
          .describe(
            'An object representing the "Divine Ability" header of the statblock.',
          )
          .optional(),
        divineSkill: z
          .object({
            skills: z
              .record(z.literal(true))
              .describe("An object containing the skills the deity can boost.")
              .optional(),
            entry: z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              )
              .optional(),
          })
          .strict()
          .describe(
            'An object representing the "Divine Skill" header of the statblock.',
          )
          .optional(),
        domains: z
          .array(
            z
              .object({ name: z.string().min(1), sourceID: z.string().min(1) })
              .strict()
              .describe(
                "A reference to another statblock. The `type` of the content is typically inferred from the context.",
              ),
          )
          .min(1)
          .describe(
            "A list of objects describing the domains a deity encompasses.",
          )
          .optional(),
        alternateDomains: z
          .array(
            z
              .object({ name: z.string().min(1), sourceID: z.string().min(1) })
              .strict()
              .describe(
                "A reference to another statblock. The `type` of the content is typically inferred from the context.",
              ),
          )
          .min(1)
          .describe(
            "A list of objects describing the alternate domains a deity encompasses.",
          )
          .optional(),
        clericSpells: z
          .record(
            z.union([
              z
                .array(
                  z
                    .object({
                      name: z.string().min(1),
                      sourceID: z.string().min(1),
                    })
                    .strict()
                    .describe(
                      "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                    ),
                )
                .min(1),
              z.never(),
            ]),
          )
          .superRefine((value, ctx) => {
            for (const key in value) {
              let evaluated = false;
              if (key.match(new RegExp("^([1-9]|10)$"))) {
                evaluated = true;
                const result = z
                  .array(
                    z
                      .object({
                        name: z.string().min(1),
                        sourceID: z.string().min(1),
                      })
                      .strict()
                      .describe(
                        "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                      ),
                  )
                  .min(1)
                  .safeParse(value[key]);
                if (!result.success) {
                  ctx.addIssue({
                    path: [...ctx.path, key],
                    code: "custom",
                    message: `Invalid input: Key matching regex /${key}/ must match schema`,
                    params: {
                      issues: result.error.issues,
                    },
                  });
                }
              }
              if (!evaluated) {
                const result = z.never().safeParse(value[key]);
                if (!result.success) {
                  ctx.addIssue({
                    path: [...ctx.path, key],
                    code: "custom",
                    message: `Invalid input: must match catchall schema`,
                    params: {
                      issues: result.error.issues,
                    },
                  });
                }
              }
            }
          })
          .describe(
            "An object representing the cleric spells this deity grants. The properties represent the spell levels.",
          )
          .optional(),
        edicts: z
          .array(
            z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              ),
          )
          .min(1)
          .describe(
            'The deities "Edicts" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.',
          )
          .optional(),
        anathema: z
          .array(
            z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              ),
          )
          .min(1)
          .describe(
            'The deities "Anathema" header as an array of strings. As the text is frequently a comma-separated list, each list element should be trivial.',
          )
          .optional(),
        favoredWeapon: z
          .object({
            weapons: z
              .array(
                z
                  .object({
                    name: z.string().min(1),
                    sourceID: z.string().min(1),
                  })
                  .strict()
                  .describe(
                    "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                  ),
              )
              .min(1)
              .describe("A list of weapons the deity favours.")
              .optional(),
            unarmedAttacks: z
              .array(z.string().min(1))
              .min(1)
              .describe(
                "A list of unarmed attacks the deity favours as if they were weapons.",
              )
              .optional(),
            entry: z
              .string()
              .min(1)
              .describe(
                "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
              )
              .optional(),
          })
          .strict()
          .describe(
            'An object representing the "Favored Weapon" header of the statblock.',
          )
          .optional(),
        preamble: z
          .string()
          .min(1)
          .describe(
            "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
          )
          .optional(),
        "Minor Boon": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        "Moderate Boon": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        "Major Boon": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        "Minor Curse": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        "Moderate Curse": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        "Major Curse": z
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
          .describe("Pf2ools' entry value (string or object).")
          .optional(),
        domainSpell: z
          .object({ name: z.string().min(1), sourceID: z.string().min(1) })
          .strict()
          .describe(
            "A reference to another statblock. The `type` of the content is typically inferred from the context.",
          )
          .optional(),
        advancedDomainSpell: z
          .object({ name: z.string().min(1), sourceID: z.string().min(1) })
          .strict()
          .describe(
            "A reference to another statblock. The `type` of the content is typically inferred from the context.",
          )
          .optional(),
        apocryphalSpell: z
          .object({ name: z.string().min(1), sourceID: z.string().min(1) })
          .strict()
          .describe(
            "A reference to another statblock. The `type` of the content is typically inferred from the context.",
          )
          .optional(),
        advancedApocryphalSpell: z
          .object({ name: z.string().min(1), sourceID: z.string().min(1) })
          .strict()
          .describe(
            "A reference to another statblock. The `type` of the content is typically inferred from the context.",
          )
          .optional(),
        level: z
          .number()
          .int()
          .gte(-1)
          .describe("The event's level.")
          .optional(),
        applicableSkills: z
          .array(
            z
              .object({
                skill: z.enum([
                  "Acrobatics",
                  "Arcana",
                  "Athletics",
                  "Crafting",
                  "Deception",
                  "Diplomacy",
                  "Intimidation",
                  "Lore",
                  "Medicine",
                  "Nature",
                  "Occultism",
                  "Performance",
                  "Religion",
                  "Society",
                  "Stealth",
                  "Survival",
                  "Thievery",
                ]),
                variables: z
                  .array(
                    z
                      .string()
                      .regex(new RegExp("^[A-Z]"))
                      .min(1)
                      .describe(
                        'A skill\'s variable element (e.g. "Accounting" and "Midwifery" in "Accounting or Midwifery Lore").',
                      ),
                  )
                  .min(1)
                  .describe(
                    "An array of the skill's variable elements. Most often, this is a list of Lore topics.",
                  )
                  .optional(),
                display: z
                  .string()
                  .min(1)
                  .describe(
                    "How the skill should display, if it cannot be trivially inferred from `skill` and `variables`.",
                  )
                  .optional(),
              })
              .strict()
              .describe("A combined object to describe a skill."),
          )
          .min(1)
          .describe(
            "An array of objects representing the event's applicable skills.",
          )
          .optional(),
        tier: z
          .string()
          .regex(new RegExp("^[A-Z]"))
          .min(1)
          .describe("The relic gift's tier (title case).")
          .optional(),
        aspects: z
          .array(
            z
              .object({
                name: z.string().min(1).describe("The aspect's name."),
                note: z
                  .string()
                  .min(1)
                  .describe(
                    'A bracketed note qualifying the aspect (e.g. the "azata-themed" in "celestial (azata-themed)").',
                  )
                  .optional(),
              })
              .strict()
              .describe("An object representing an aspect."),
          )
          .min(1)
          .describe(
            "An array of objects representing the relic gift's aspects.",
          )
          .optional(),
        prerequisites: z
          .string()
          .min(1)
          .describe(
            "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
          )
          .optional(),
      })
      .strict()
      .describe("An object representing the content itself."),
    tags: z
      .object({
        abilityBoosts: z
          .object({
            abilities: z
              .object({
                Strength: z.literal(true).optional(),
                Dexterity: z.literal(true).optional(),
                Constitution: z.literal(true).optional(),
                Intelligence: z.literal(true).optional(),
                Wisdom: z.literal(true).optional(),
                Charisma: z.literal(true).optional(),
                Free: z.literal(true).optional(),
              })
              .strict()
              .describe(
                "An object containing the types of boost that the background can grant.",
              ),
            count: z
              .number()
              .int()
              .gte(1)
              .lte(3)
              .describe("The total number of boosts the background can grant."),
          })
          .strict()
          .describe("The ability boosts the background grants.")
          .optional(),
        trainedSkills: z
          .object({
            skills: z
              .record(z.literal(true))
              .describe(
                "A list of skills in which the background can grant proficiency.",
              ),
            count: z
              .number()
              .int()
              .gte(1)
              .lte(4)
              .describe(
                "The total number of distinct skill proficiencies the background can grant.",
              ),
          })
          .strict()
          .describe("The skills in which the background can grant proficiency.")
          .optional(),
        gainedFeats: z
          .object({
            options: z
              .array(
                z
                  .object({
                    name: z.string().min(1),
                    sourceID: z.string().min(1),
                  })
                  .strict(),
              )
              .min(1)
              .describe("A list of feats the background can grant."),
            count: z
              .number()
              .int()
              .gte(1)
              .lte(2)
              .describe("The total number of feats the background can grant."),
          })
          .strict()
          .describe("The feats the background grants.")
          .optional(),
        gainedSpells: z
          .object({
            options: z
              .array(
                z
                  .object({
                    name: z.string().min(1),
                    sourceID: z.string().min(1),
                  })
                  .strict(),
              )
              .min(1)
              .describe("A list of spells the background can grant."),
            count: z
              .number()
              .int()
              .gte(1)
              .lte(2)
              .describe("The total number of spells the background can grant."),
          })
          .strict()
          .describe("The spells the background grants.")
          .optional(),
        misc: z
          .object({
            "Grants ability": z
              .literal(true)
              .describe(
                "The gift grants the character a new, activatable ability (including spells).",
              )
              .optional(),
            "Grants equipment": z
              .literal(true)
              .describe(
                "The background grants a free item (not just access or proficiency—the actual concrete thing).",
              )
              .optional(),
            "Grants language": z
              .literal(true)
              .describe("The background grants a language.")
              .optional(),
            "Grants resistance": z
              .literal(true)
              .describe("The background grants a damage resistance.")
              .optional(),
            "Grants sense": z
              .literal(true)
              .describe(
                "The background grants a sense (e.g. darkvision, scent).",
              )
              .optional(),
            "Grants situational benefit": z
              .literal(true)
              .describe(
                "The background grants a passive benefit that isn't otherwise categorisable. For example, this would apply if the background grants a +1 circumstance bonus to Seek on cloudy days.",
              )
              .optional(),
            "Has drawback": z
              .literal(true)
              .describe(
                "The background comes with an objective, mandatory drawback, such as a penalty to some check or the inability to use an item or spell; not something that is both good and bad.",
              )
              .optional(),
            "GM influence": z
              .literal(true)
              .describe(
                "The GM determines some mechanical aspect of the background. For instance, this would apply if the background specifies that the GM alone chooses one of the boosts or the type of Lore skill it grants.",
              )
              .optional(),
            "Alters relic": z
              .literal(true)
              .describe(
                "The gift permanently changes the relic's nature in some way.",
              )
              .optional(),
            "Grants passive attribute": z
              .literal(true)
              .describe(
                "The gift grants the character a new Speed, a damage resistance, an automatic bonus, or another always-active ability.",
              )
              .optional(),
            "Is rune": z
              .literal(true)
              .describe("The gift mimics the effect of a rune.")
              .optional(),
            "Soul seed": z
              .literal(true)
              .describe(
                'The gift is "particularly appropriate" for soul seeds (SoM p230).',
              )
              .optional(),
          })
          .strict()
          .describe("Miscellaneous tags")
          .optional(),
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
        itemTypes: z
          .object({
            Armor: z
              .literal(true)
              .describe(
                "The relic must be a piece or suit of armour to have this gift.",
              )
              .optional(),
            "Worn Item": z
              .literal(true)
              .describe("The relic must be a worn item to have this gift.")
              .optional(),
            Weapon: z
              .literal(true)
              .describe("The relic must be a weapon to have this gift.")
              .optional(),
          })
          .catchall(z.literal(true))
          .describe(
            "An object containing the types of item the relic must be in order to have this gift. The properties should be in title case.",
          )
          .optional(),
      })
      .strict()
      .describe(
        "An object describing the content for filtering, searching, and sorting.",
      )
      .optional(),
  })
  .strict()
  .describe("Pf2ools' relic gift object.");
