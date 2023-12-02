export const relicGift: z.ZodObject<{
    type: z.ZodLiteral<"skill">;
    name: z.ZodObject<{
        primary: z.ZodEffects<z.ZodString, string, string>;
        aliases: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
        specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        variantOf: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
    }, "strict", z.ZodTypeAny, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }, {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    }>;
    source: z.ZodObject<{
        ID: z.ZodEffects<z.ZodString, string, string>;
        page: z.ZodOptional<z.ZodNumber>;
        reprintOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        expansionOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        originalOf: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }, {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    }>;
    data: z.ZodObject<{
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            trait?: string;
            variables?: string[];
            display?: string;
        }, {
            trait?: string;
            variables?: string[];
            display?: string;
        }>, "many">>;
        entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">;
        category: z.ZodOptional<z.ZodString>;
        pantheonMembers: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        alignment: z.ZodOptional<z.ZodObject<{
            deity: z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>;
            follower: z.ZodOptional<z.ZodArray<z.ZodEnum<["LG", "NG", "CG", "LN", "N", "CN", "LE", "NE", "CE", "U"]>, "many">>;
        }, "strict", z.ZodTypeAny, {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        }, {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        }>>;
        areasOfConcern: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        divineFont: z.ZodOptional<z.ZodObject<{
            harm: z.ZodOptional<z.ZodLiteral<true>>;
            heal: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            harm?: true;
            heal?: true;
        }, {
            harm?: true;
            heal?: true;
        }>>;
        divineAbility: z.ZodOptional<z.ZodObject<{
            abilities: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            abilities?: Record<string, true>;
            entry?: string;
        }, {
            abilities?: Record<string, true>;
            entry?: string;
        }>>;
        divineSkill: z.ZodOptional<z.ZodObject<{
            skills: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodLiteral<true>>>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skills?: Record<string, true>;
            entry?: string;
        }, {
            skills?: Record<string, true>;
            entry?: string;
        }>>;
        domains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        alternateDomains: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">>;
        clericSpells: z.ZodOptional<z.ZodEffects<z.ZodRecord<z.ZodString, z.ZodUnion<[z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>, "many">, z.ZodNever]>>, Record<string, {
            name?: string;
            sourceID?: string;
        }[]>, Record<string, {
            name?: string;
            sourceID?: string;
        }[]>>>;
        edicts: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        anathema: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        favoredWeapon: z.ZodOptional<z.ZodObject<{
            weapons: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">>;
            unarmedAttacks: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            entry: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        }, {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        }>>;
        preamble: z.ZodOptional<z.ZodString>;
        "Minor Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Moderate Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Major Boon": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Minor Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Moderate Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        "Major Curse": z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type?: string;
        }, {
            type?: string;
        }>]>, "many">>;
        domainSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
        advancedDomainSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            sourceID: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            sourceID?: string;
        }, {
            name?: string;
            sourceID?: string;
        }>>;
        level: z.ZodOptional<z.ZodNumber>;
        applicableSkills: z.ZodOptional<z.ZodArray<z.ZodObject<{
            skill: z.ZodEnum<["Acrobatics", "Arcana", "Athletics", "Crafting", "Deception", "Diplomacy", "Intimidation", "Lore", "Medicine", "Nature", "Occultism", "Performance", "Religion", "Society", "Stealth", "Survival", "Thievery"]>;
            variables: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            display: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }, {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }>, "many">>;
        tier: z.ZodOptional<z.ZodString>;
        aspects: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            name?: string;
            note?: string;
        }, {
            name?: string;
            note?: string;
        }>, "many">>;
        prerequisites: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
        preamble?: string;
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        level?: number;
        applicableSkills?: {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }[];
        tier?: string;
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
    }, {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
        preamble?: string;
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        level?: number;
        applicableSkills?: {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }[];
        tier?: string;
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
    }>;
    tags: z.ZodOptional<z.ZodObject<{
        abilityBoosts: z.ZodOptional<z.ZodObject<{
            abilities: z.ZodObject<{
                Strength: z.ZodOptional<z.ZodLiteral<true>>;
                Dexterity: z.ZodOptional<z.ZodLiteral<true>>;
                Constitution: z.ZodOptional<z.ZodLiteral<true>>;
                Intelligence: z.ZodOptional<z.ZodLiteral<true>>;
                Wisdom: z.ZodOptional<z.ZodLiteral<true>>;
                Charisma: z.ZodOptional<z.ZodLiteral<true>>;
                Free: z.ZodOptional<z.ZodLiteral<true>>;
            }, "strict", z.ZodTypeAny, {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            }, {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            }>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        }, {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        }>>;
        trainedSkills: z.ZodOptional<z.ZodObject<{
            skills: z.ZodRecord<z.ZodString, z.ZodLiteral<true>>;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            skills?: Record<string, true>;
            count?: number;
        }, {
            skills?: Record<string, true>;
            count?: number;
        }>>;
        gainedFeats: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }>>;
        gainedSpells: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                sourceID: z.ZodString;
            }, "strict", z.ZodTypeAny, {
                name?: string;
                sourceID?: string;
            }, {
                name?: string;
                sourceID?: string;
            }>, "many">;
            count: z.ZodNumber;
        }, "strict", z.ZodTypeAny, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }, {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        }>>;
        misc: z.ZodOptional<z.ZodObject<{
            "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants equipment": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants language": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants resistance": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants sense": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants situational benefit": z.ZodOptional<z.ZodLiteral<true>>;
            "Has drawback": z.ZodOptional<z.ZodLiteral<true>>;
            "GM influence": z.ZodOptional<z.ZodLiteral<true>>;
            "Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
            "Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
            "Is rune": z.ZodOptional<z.ZodLiteral<true>>;
            "Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
        }, "strict", z.ZodTypeAny, {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        }, {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        }>>;
        group: z.ZodOptional<z.ZodObject<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">>>;
        itemTypes: z.ZodOptional<z.ZodObject<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, "strip", z.ZodLiteral<true>, z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">, z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">>>;
    }, "strict", z.ZodTypeAny, {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
        group?: z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    }, {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
        group?: z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    }>>;
}, "strict", z.ZodTypeAny, {
    type?: "skill";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
        preamble?: string;
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        level?: number;
        applicableSkills?: {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }[];
        tier?: string;
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
    };
    tags?: {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
        group?: z.objectOutputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        itemTypes?: z.objectOutputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    };
}, {
    type?: "skill";
    name?: {
        primary?: string;
        aliases?: string[];
        specifier?: string;
        variantOf?: {
            name?: string;
            sourceID?: string;
        };
    };
    source?: {
        ID?: string;
        page?: number;
        reprintOf?: string;
        expansionOf?: string;
        originalOf?: string;
    };
    data?: {
        traits?: {
            trait?: string;
            variables?: string[];
            display?: string;
        }[];
        entries?: (string | {
            type?: string;
        })[];
        category?: string;
        pantheonMembers?: {
            name?: string;
            sourceID?: string;
        }[];
        alignment?: {
            deity?: "LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U";
            follower?: ("LG" | "NG" | "CG" | "LN" | "N" | "CN" | "LE" | "NE" | "CE" | "U")[];
        };
        areasOfConcern?: string[];
        divineFont?: {
            harm?: true;
            heal?: true;
        };
        divineAbility?: {
            abilities?: Record<string, true>;
            entry?: string;
        };
        divineSkill?: {
            skills?: Record<string, true>;
            entry?: string;
        };
        domains?: {
            name?: string;
            sourceID?: string;
        }[];
        alternateDomains?: {
            name?: string;
            sourceID?: string;
        }[];
        clericSpells?: Record<string, {
            name?: string;
            sourceID?: string;
        }[]>;
        edicts?: string[];
        anathema?: string[];
        favoredWeapon?: {
            weapons?: {
                name?: string;
                sourceID?: string;
            }[];
            unarmedAttacks?: string[];
            entry?: string;
        };
        preamble?: string;
        "Minor Boon"?: (string | {
            type?: string;
        })[];
        "Moderate Boon"?: (string | {
            type?: string;
        })[];
        "Major Boon"?: (string | {
            type?: string;
        })[];
        "Minor Curse"?: (string | {
            type?: string;
        })[];
        "Moderate Curse"?: (string | {
            type?: string;
        })[];
        "Major Curse"?: (string | {
            type?: string;
        })[];
        domainSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedDomainSpell?: {
            name?: string;
            sourceID?: string;
        };
        apocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        advancedApocryphalSpell?: {
            name?: string;
            sourceID?: string;
        };
        level?: number;
        applicableSkills?: {
            skill?: "Acrobatics" | "Arcana" | "Athletics" | "Crafting" | "Deception" | "Diplomacy" | "Intimidation" | "Lore" | "Medicine" | "Nature" | "Occultism" | "Performance" | "Religion" | "Society" | "Stealth" | "Survival" | "Thievery";
            variables?: string[];
            display?: string;
        }[];
        tier?: string;
        aspects?: {
            name?: string;
            note?: string;
        }[];
        prerequisites?: string;
    };
    tags?: {
        abilityBoosts?: {
            abilities?: {
                Strength?: true;
                Dexterity?: true;
                Constitution?: true;
                Intelligence?: true;
                Wisdom?: true;
                Charisma?: true;
                Free?: true;
            };
            count?: number;
        };
        trainedSkills?: {
            skills?: Record<string, true>;
            count?: number;
        };
        gainedFeats?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        gainedSpells?: {
            options?: {
                name?: string;
                sourceID?: string;
            }[];
            count?: number;
        };
        misc?: {
            "Grants ability"?: true;
            "Grants equipment"?: true;
            "Grants language"?: true;
            "Grants resistance"?: true;
            "Grants sense"?: true;
            "Grants situational benefit"?: true;
            "Has drawback"?: true;
            "GM influence"?: true;
            "Alters relic"?: true;
            "Grants passive attribute"?: true;
            "Is rune"?: true;
            "Soul seed"?: true;
        };
        group?: z.objectInputType<{
            Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
            "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
            "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
            "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
            Senses: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
        itemTypes?: z.objectInputType<{
            Armor: z.ZodOptional<z.ZodLiteral<true>>;
            "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
            Weapon: z.ZodOptional<z.ZodLiteral<true>>;
        }, z.ZodLiteral<true>, "strip">;
    };
}>;
import { z } from "zod";
