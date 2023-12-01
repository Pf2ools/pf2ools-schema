import { z } from "zod";

export default z
  .union([
    z
      .object({
        type: z.string().describe("The type of data described."),
        name: z
          .object({
            primary: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              )
              .describe(
                "The full name of the statblock or header, exactly as it appears in the source. The only exception is when the source uses stylistic all-caps or no-caps, in which case you should use your judgement and possibly convert it to title-case.",
              ),
            aliases: z
              .array(
                z
                  .any()
                  .refine(
                    (value) => !z.any().safeParse(value).success,
                    "Invalid input: Should NOT be valid against schema",
                  )
                  .describe("An alternative name for the entity."),
              )
              .min(1)
              .describe(
                'An array of alternative names of an entity. Some entities have multiple common names, whether defined in the statblock itself or the surrounding text. Alternative names may also be provided to ease searching, sorting, and filtering with common mistakes (e.g. calling the Aid action "Help").',
              )
              .optional(),
            specifier: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              )
              .describe(
                'A string to meaningfully disambiguate identically named entities (by necessity if they\'re from the same source). This often occurs, for example, with feats common to multiple classes (e.g. "Attack of Opportunity"). It can also occur when one entity in the source effectively defines multiple entities in data, each of which need to be disambiguated.',
              )
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
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              ),
            page: z
              .number()
              .int()
              .gte(1)
              .describe("The page number (if any) on which the content begins.")
              .optional(),
            reprintOf: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              )
              .optional(),
            expansionOf: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              )
              .optional(),
            originalOf: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              )
              .optional(),
          })
          .describe("Source object for a content entity."),
        data: z
          .record(z.any())
          .describe("An object representing the content itself."),
        tags: z
          .record(z.any())
          .describe(
            "An object describing the content for filtering, searching, and sorting.",
          )
          .optional(),
      })
      .strict()
      .and(
        z.union([
          z
            .object({
              type: z.literal("background").optional(),
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
                            .describe(
                              "The variable elements of a trait in an array.",
                            )
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
                        .describe(
                          "A trait with both keyword and variable elements.",
                        ),
                    )
                    .min(1)
                    .describe(
                      "An array of objects representing a list of traits",
                    )
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
                })
                .strict()
                .optional(),
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
                        .describe(
                          "The total number of boosts the background can grant.",
                        ),
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
                    .describe(
                      "The skills in which the background can grant proficiency.",
                    )
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
                        .describe(
                          "The total number of feats the background can grant.",
                        ),
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
                        .describe(
                          "The total number of spells the background can grant.",
                        ),
                    })
                    .strict()
                    .describe("The spells the background grants.")
                    .optional(),
                  misc: z
                    .object({
                      "Grants ability": z
                        .literal(true)
                        .describe(
                          "The background background grants an active, voluntary ability.",
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
                    })
                    .strict()
                    .describe("Miscellaneous tags")
                    .optional(),
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' background object."),
          z
            .object({
              type: z.literal("condition").optional(),
              data: z
                .object({
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
                })
                .strict()
                .optional(),
              tags: z
                .object({
                  group: z
                    .object({
                      Attitudes: z
                        .literal(true)
                        .describe(
                          "The condition is in the 'Attitudes' group (PHB p619).",
                        )
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
                        .describe(
                          "The condition is in the 'Senses' group (PHB p619).",
                        )
                        .optional(),
                    })
                    .catchall(z.literal(true))
                    .describe(
                      "An object containing any groups the condition belongs to. The properties should be in title case.",
                    )
                    .optional(),
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' condition object."),
          z
            .object({
              type: z.literal("deity").optional(),
              data: z
                .object({
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
                        .object({
                          name: z.string().min(1),
                          sourceID: z.string().min(1),
                        })
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
                        .describe(
                          "An object containing the skills the deity can boost.",
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
                      'An object representing the "Divine Skill" header of the statblock.',
                    )
                    .optional(),
                  domains: z
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
                    .describe(
                      "A list of objects describing the domains a deity encompasses.",
                    )
                    .optional(),
                  alternateDomains: z
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
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' deity, pantheon, and philosophy object."),
          z
            .object({
              type: z.literal("divineIntercession").optional(),
              data: z
                .object({
                  preamble: z
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
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' divine intercession object."),
          z
            .object({
              type: z.literal("domain").optional(),
              data: z
                .object({
                  preamble: z
                    .string()
                    .min(1)
                    .describe(
                      "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
                    )
                    .optional(),
                  domainSpell: z
                    .object({
                      name: z.string().min(1),
                      sourceID: z.string().min(1),
                    })
                    .strict()
                    .describe(
                      "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                    ),
                  advancedDomainSpell: z
                    .object({
                      name: z.string().min(1),
                      sourceID: z.string().min(1),
                    })
                    .strict()
                    .describe(
                      "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                    ),
                  apocryphalSpell: z
                    .object({
                      name: z.string().min(1),
                      sourceID: z.string().min(1),
                    })
                    .strict()
                    .describe(
                      "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                    )
                    .optional(),
                  advancedApocryphalSpell: z
                    .object({
                      name: z.string().min(1),
                      sourceID: z.string().min(1),
                    })
                    .strict()
                    .describe(
                      "A reference to another statblock. The `type` of the content is typically inferred from the context.",
                    )
                    .optional(),
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' (deity) domain object."),
          z
            .object({
              type: z.literal("event").optional(),
              data: z
                .object({
                  level: z
                    .number()
                    .int()
                    .gte(-1)
                    .describe("The event's level."),
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
                            .describe(
                              "The variable elements of a trait in an array.",
                            )
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
                        .describe(
                          "A trait with both keyword and variable elements.",
                        ),
                    )
                    .min(1)
                    .describe(
                      "An array of objects representing a list of traits",
                    )
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
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' event object."),
          z
            .object({
              type: z.literal("relicGift").optional(),
              data: z
                .object({
                  tier: z
                    .string()
                    .regex(new RegExp("^[A-Z]"))
                    .min(1)
                    .describe("The relic gift's tier (title case)."),
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
                            .describe(
                              "The variable elements of a trait in an array.",
                            )
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
                        .describe(
                          "A trait with both keyword and variable elements.",
                        ),
                    )
                    .min(1)
                    .describe(
                      "An array of objects representing a list of traits",
                    )
                    .optional(),
                  aspects: z
                    .array(
                      z
                        .object({
                          name: z
                            .string()
                            .min(1)
                            .describe("The aspect's name."),
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
                    ),
                  prerequisites: z
                    .string()
                    .min(1)
                    .describe(
                      "Pf2ools' simplest type of entry: a string. It displays as a single paragraph of text with in-line formatting determined by use of `@tag`s.",
                    )
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
                })
                .strict()
                .optional(),
              tags: z
                .object({
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
                        .describe(
                          "The relic must be a worn item to have this gift.",
                        )
                        .optional(),
                      Weapon: z
                        .literal(true)
                        .describe(
                          "The relic must be a weapon to have this gift.",
                        )
                        .optional(),
                    })
                    .catchall(z.literal(true))
                    .describe(
                      "An object containing the types of item the relic must be in order to have this gift. The properties should be in title case.",
                    )
                    .optional(),
                  misc: z
                    .object({
                      "Alters relic": z
                        .literal(true)
                        .describe(
                          "The gift permanently changes the relic's nature in some way.",
                        )
                        .optional(),
                      "Grants ability": z
                        .literal(true)
                        .describe(
                          "The gift grants the character a new, activatable ability (including spells).",
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
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' relic gift object."),
          z
            .object({
              type: z.literal("skill").optional(),
              data: z
                .object({
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
                })
                .strict()
                .optional(),
            })
            .describe("Pf2ools' skill object."),
        ]),
      )
      .describe("The abstract format of Pf2ools' data content."),
    z
      .object({
        type: z.literal("license"),
        ID: z
          .any()
          .refine(
            (value) => !z.any().safeParse(value).success,
            "Invalid input: Should NOT be valid against schema",
          ),
        title: z
          .object({
            full: z
              .string()
              .min(1)
              .describe(
                "The license's full, human-readable name. Title case is preferred but anything can be used within reason.",
              ),
            short: z
              .string()
              .min(1)
              .describe(
                "An abbreviation or other shortening of the license's `name` for display purposes.",
              ),
          })
          .strict()
          .describe("An object representing the license's name."),
        data: z.object({
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
            .describe("Pf2ools' entry value (string or object).")
            .optional(),
        }),
      })
      .strict()
      .describe("Pf2ools' license object."),
    z
      .object({
        type: z.literal("source"),
        ID: z
          .any()
          .refine(
            (value) => !z.any().safeParse(value).success,
            "Invalid input: Should NOT be valid against schema",
          ),
        title: z
          .object({
            full: z
              .string()
              .min(1)
              .describe(
                "The source's full, human-readable name. Title case is preferred but anything can be used within reason.",
              ),
            short: z
              .string()
              .min(1)
              .max(8)
              .describe(
                "An abbreviation or other shortening of the source's name for display purposes.",
              ),
          })
          .strict()
          .describe("An object representing the source's name."),
        data: z
          .object({
            released: z
              .string()
              .describe(
                "The source's publication date (YYYY-MM-DD). For content with a staggered release or early-access program, use the date the source was first made publicly available.",
              ),
            version: z
              .string()
              .min(1)
              .describe(
                "The target version for the converted data (if any). This value serves akin to a `specifier` in case multiple distinct versions of the same source are maintained. Leave undefined if there has only ever been one version.",
              )
              .optional(),
            errataed: z
              .string()
              .describe(
                "The date (YYYY-MM-DD) of the source's most recent errata applied to Pf2ools' content. Leave undefined if the source has never been errataed.",
              )
              .optional(),
            added: z
              .string()
              .describe(
                "The date (YYYY-MM-DD) the source was first made available on the Pf2ools ecosystem (complete or otherwise).",
              ),
            modified: z
              .string()
              .describe(
                "The date (YYYY-MM-DD) the source's content-data as maintained by the Pf2ools project was last modified.",
              ),
            url: z
              .string()
              .describe(
                'A website on which the content can be legally and publicly viewed, downloaded, or purchased. A first-party website (i.e. one controlled by the authors) is preferred. If the Pf2ools source is the authoritative version for distribution, you can use "https://github.com/pf2ools/pf2ools-data".',
              )
              .optional(),
            groupIDs: z
              .array(
                z
                  .any()
                  .refine(
                    (value) => !z.any().safeParse(value).success,
                    "Invalid input: Should NOT be valid against schema",
                  ),
              )
              .min(1)
              .describe(
                'A list of `id`s of the source\'s parent groups (if any). This is used for a source that is one piece of a larger, clearly defined, multi-part series. For instance, "Extinction Curse 1: The Show Must Go On" belongs to the "Extinction Curse" series ("EC"), and "Lost Omens: Travel Guide" belongs to the "Lost Omens" series ("LO").',
              )
              .optional(),
            copyright: z
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
            license: z
              .any()
              .refine(
                (value) => !z.any().safeParse(value).success,
                "Invalid input: Should NOT be valid against schema",
              ),
            authors: z
              .array(
                z
                  .string()
                  .min(2)
                  .describe(
                    "An author's name. Online handles should be reasonably indicated.",
                  ),
              )
              .min(1)
              .describe("A list of authors as credited by the source itself.")
              .optional(),
            publisher: z
              .string()
              .min(2)
              .describe(
                "The name of the source's publishing company or group (if any).",
              )
              .optional(),
            converters: z
              .array(
                z
                  .string()
                  .min(2)
                  .describe(
                    "A converter's name. Online handles should be reasonably indicated; Discord usernames are strongly prefered.",
                  ),
              )
              .min(1)
              .describe(
                "A list of Pf2ools contributors who converted this source. If multiple converters exist, choose one 'principal' to go first in the case of questions or bug reports. This is particularly used for homebrew.",
              )
              .optional(),
          })
          .strict(),
        tags: z
          .object({
            publicationType: z
              .object({
                Comic: z
                  .literal(true)
                  .describe("The source is content bundled with a comic.")
                  .optional(),
                "Blog post": z
                  .literal(true)
                  .describe(
                    "The source is a blog post or another similar type of short, online article.",
                  )
                  .optional(),
              })
              .strict()
              .describe(
                "An object representing the type of publication the source can be categorised as. This is most relevant when the game content is bundled along with something that isn't a typical Pathfinder rulebook.",
              )
              .optional(),
            status: z
              .object({
                "Missing content": z
                  .literal(true)
                  .describe(
                    "This source is only partially converted right now (i.e. it lacks some content), but, one day, could be completely up-to-date.",
                  )
                  .optional(),
                "Missing tags": z
                  .literal(true)
                  .describe(
                    "The converted content this source contains isn't completely tagged, even if it all displays correctly.",
                  )
                  .optional(),
                Invalid: z
                  .literal(true)
                  .describe(
                    "This source's data is invalid and either contains serious schema errors or is generally malformed. It exists for archival purposes only and is unmaintained.",
                  )
                  .optional(),
              })
              .strict()
              .describe(
                "An object representing the source's conversion status, if it is at all imperfect.",
              )
              .optional(),
            misc: z
              .object({
                Official: z
                  .literal(true)
                  .describe(
                    "This source was created and published by Paizo as 'official' Pathfinder 2e content (that is, it's official insofar that something can be 'official').",
                  )
                  .optional(),
                "GM-facing": z
                  .literal(true)
                  .describe(
                    "This source is intended to be GM-facing. This is typically due to it being an adventure, module, one-shot, scenario, or the like.",
                  )
                  .optional(),
                "PFS-legal": z
                  .literal(true)
                  .describe("This source is legal for Pathfinder Society play.")
                  .optional(),
                Playtest: z
                  .literal(true)
                  .describe(
                    "This source contains playtest, early-access, or otherwise 'unfinished' content.",
                  )
                  .optional(),
                Ongoing: z
                  .literal(true)
                  .describe(
                    "This source is being continually expanded. The data only reflects content only up until the `errataed` date. This is used for 'monster a day' projects and the like, where the content may entail a substantial lag behind the present.",
                  )
                  .optional(),
                Deprecated: z
                  .literal(true)
                  .describe(
                    "This source has been wholly superseded by another version of the same content. This applies when a completely rewritten, revised version of the source exists; simple, minor modifications via errata do not.",
                  )
                  .optional(),
              })
              .strict()
              .optional(),
          })
          .strict()
          .describe(
            "This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.",
          )
          .optional(),
      })
      .strict()
      .describe("Pf2ools' source object."),
    z
      .object({
        type: z.literal("sourceGroup").optional(),
        ID: z
          .any()
          .refine(
            (value) => !z.any().safeParse(value).success,
            "Invalid input: Should NOT be valid against schema",
          ),
        title: z
          .object({
            full: z
              .string()
              .min(1)
              .describe(
                "The source group's full, human-readable name. Title case is preferred but anything can be used within reason.",
              ),
            short: z
              .string()
              .min(1)
              .max(8)
              .describe(
                "An abbreviation or other shortening of the source group's name for display purposes.",
              ),
          })
          .strict()
          .describe("An object representing the source group's name."),
        data: z
          .object({
            publisher: z
              .string()
              .min(1)
              .describe(
                "The name of the original, first-party publisher of the source group. Sources with publishers not matching this value are considered 'third-party' contributors to the source group.",
              )
              .optional(),
          })
          .strict()
          .optional(),
        tags: z
          .object({
            misc: z
              .object({
                Adventure: z
                  .literal(true)
                  .describe(
                    "This source group is an adventure path or the like.",
                  )
                  .optional(),
                Ongoing: z
                  .literal(true)
                  .describe(
                    "This source group is being continually expanded. Not all member-sources may exist on Pf2ools.",
                  )
                  .optional(),
              })
              .strict()
              .optional(),
          })
          .strict()
          .describe(
            "This object contains a list of categories the source falls into, for sorting, searching, and filtering purposes.",
          )
          .optional(),
      })
      .strict()
      .describe(
        "A `sourceGroup` object defines the existence of a group of sources. Tautology aside, this is used to describe adventure paths, book series, and the like.",
      ),
  ])
  .describe("Index file for Pf2ools data.");
