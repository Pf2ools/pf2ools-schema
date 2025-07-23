import { z } from "zod";
export declare const data: z.ZodUnion<[z.ZodDiscriminatedUnion<[z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"background">;
    data: z.ZodOptional<z.ZodObject<{
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            abilityBoosts: z.ZodOptional<z.ZodObject<{
                abilities: z.ZodRecord<z.ZodUnion<[z.ZodEnum<{
                    Strength: "Strength";
                    Dexterity: "Dexterity";
                    Constitution: "Constitution";
                    Intelligence: "Intelligence";
                    Wisdom: "Wisdom";
                    Charisma: "Charisma";
                }>, z.ZodLiteral<"free">]>, z.ZodLiteral<true>>;
                count: z.ZodNumber;
            }, z.core.$strict>>;
            trainedSkills: z.ZodOptional<z.ZodObject<{
                skills: z.ZodRecord<z.ZodUnion<[z.ZodEnum<{
                    Acrobatics: "Acrobatics";
                    Arcana: "Arcana";
                    Athletics: "Athletics";
                    Crafting: "Crafting";
                    Deception: "Deception";
                    Diplomacy: "Diplomacy";
                    Intimidation: "Intimidation";
                    Lore: "Lore";
                    Medicine: "Medicine";
                    Nature: "Nature";
                    Occultism: "Occultism";
                    Performance: "Performance";
                    Religion: "Religion";
                    Society: "Society";
                    Stealth: "Stealth";
                    Survival: "Survival";
                    Thievery: "Thievery";
                }>, z.ZodLiteral<"Any">]>, z.ZodLiteral<true>>;
                count: z.ZodNumber;
            }, z.core.$strict>>;
            gainedFeats: z.ZodOptional<z.ZodObject<{
                options: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodOptional<z.ZodString>;
                    sourceID: z.ZodString;
                }, z.core.$strict>>;
                count: z.ZodNumber;
            }, z.core.$strict>>;
            gainedSpells: z.ZodOptional<z.ZodObject<{
                options: z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    specifier: z.ZodOptional<z.ZodString>;
                    sourceID: z.ZodString;
                }, z.core.$strict>>;
                count: z.ZodNumber;
            }, z.core.$strict>>;
            misc: z.ZodOptional<z.ZodObject<{
                "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants equipment": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants language": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants resistance": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants sense": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants situational benefit": z.ZodOptional<z.ZodLiteral<true>>;
                "Has drawback": z.ZodOptional<z.ZodLiteral<true>>;
                "GM influence": z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"condition">;
    data: z.ZodOptional<z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            group: z.ZodOptional<z.ZodObject<{
                Attitudes: z.ZodOptional<z.ZodLiteral<true>>;
                "Death and Dying": z.ZodOptional<z.ZodLiteral<true>>;
                "Degrees of Detection": z.ZodOptional<z.ZodLiteral<true>>;
                "Lowered Abilities": z.ZodOptional<z.ZodLiteral<true>>;
                Senses: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$catchall<z.ZodLiteral<true>>>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"domain">;
    data: z.ZodOptional<z.ZodObject<{
        preamble: z.ZodOptional<z.ZodString>;
        domainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        advancedDomainSpell: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        apocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>>;
        advancedApocryphalSpell: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"event">;
    data: z.ZodOptional<z.ZodObject<{
        level: z.ZodNumber;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        applicableSkills: z.ZodOptional<z.ZodArray<z.ZodObject<{
            skill: z.ZodEnum<{
                Acrobatics: "Acrobatics";
                Arcana: "Arcana";
                Athletics: "Athletics";
                Crafting: "Crafting";
                Deception: "Deception";
                Diplomacy: "Diplomacy";
                Intimidation: "Intimidation";
                Lore: "Lore";
                Medicine: "Medicine";
                Nature: "Nature";
                Occultism: "Occultism";
                Performance: "Performance";
                Religion: "Religion";
                Society: "Society";
                Stealth: "Stealth";
                Survival: "Survival";
                Thievery: "Thievery";
            }>;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"familiarAbility">;
    data: z.ZodOptional<z.ZodObject<{
        abilityType: z.ZodEnum<{
            Familiar: "Familiar";
            Master: "Master";
        }>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            misc: z.ZodOptional<z.ZodObject<{
                affectsCommunication: z.ZodOptional<z.ZodLiteral<true>>;
                affectsSenses: z.ZodOptional<z.ZodLiteral<true>>;
                affectsMovement: z.ZodOptional<z.ZodLiteral<true>>;
                hasRequirement: z.ZodOptional<z.ZodLiteral<true>>;
                grantsAbility: z.ZodOptional<z.ZodLiteral<true>>;
                repeatable: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"relicGift">;
    data: z.ZodOptional<z.ZodObject<{
        tier: z.ZodString;
        traits: z.ZodOptional<z.ZodArray<z.ZodObject<{
            trait: z.ZodString;
            variables: z.ZodOptional<z.ZodArray<z.ZodString>>;
            display: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>>;
        aspects: z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            note: z.ZodOptional<z.ZodString>;
        }, z.core.$strict>>;
        prerequisites: z.ZodOptional<z.ZodString>;
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
        _tags: z.ZodOptional<z.ZodObject<{
            itemTypes: z.ZodOptional<z.ZodObject<{
                Armor: z.ZodOptional<z.ZodLiteral<true>>;
                "Worn Item": z.ZodOptional<z.ZodLiteral<true>>;
                Weapon: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$catchall<z.ZodLiteral<true>>>>;
            misc: z.ZodOptional<z.ZodObject<{
                "Alters relic": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants ability": z.ZodOptional<z.ZodLiteral<true>>;
                "Grants passive attribute": z.ZodOptional<z.ZodLiteral<true>>;
                "Is rune": z.ZodOptional<z.ZodLiteral<true>>;
                "Soul seed": z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>, z.ZodObject<{
    name: z.ZodObject<{
        primary: z.ZodString;
        aliases: z.ZodOptional<z.ZodArray<z.ZodString>>;
        specifier: z.ZodOptional<z.ZodString>;
    }, z.core.$strict>;
    source: z.ZodObject<{
        ID: z.ZodString;
        page: z.ZodOptional<z.ZodNumber>;
    }, z.core.$strict>;
    reference: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<{
            variant: "variant";
            reprint: "reprint";
            replacement: "replacement";
            extension: "extension";
        }>;
        target: z.ZodObject<{
            name: z.ZodString;
            specifier: z.ZodOptional<z.ZodString>;
            sourceID: z.ZodString;
        }, z.core.$strict>;
        modifications: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            target: z.ZodObject<{
                property: z.ZodString;
                name: z.ZodOptional<z.ZodString>;
            }, z.core.$strip>;
            value: z.ZodOptional<z.ZodUnion<readonly [z.ZodString, z.ZodNumber, z.ZodObject<{}, z.core.$loose>, z.ZodArray<z.ZodAny>, z.ZodBoolean]>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    type: z.ZodLiteral<"skill">;
    data: z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
    }, z.core.$strict>;
}, z.core.$strict>]>, z.ZodDiscriminatedUnion<[z.ZodObject<{
    type: z.ZodLiteral<"license">;
    ID: z.ZodString;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, z.core.$strict>;
    data: z.ZodObject<{
        entries: z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"source">;
    ID: z.ZodString;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, z.core.$strict>;
    data: z.ZodObject<{
        released: z.ZodString;
        version: z.ZodOptional<z.ZodString>;
        errataed: z.ZodOptional<z.ZodString>;
        added: z.ZodString;
        modified: z.ZodString;
        URL: z.ZodString;
        groupIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
        requiredSourceIDs: z.ZodOptional<z.ZodArray<z.ZodString>>;
        licenseID: z.ZodString;
        copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<readonly [z.ZodString, z.ZodObject<{
            type: z.ZodString;
        }, z.core.$strip>]>>>;
        authors: z.ZodOptional<z.ZodArray<z.ZodString>>;
        publisher: z.ZodOptional<z.ZodString>;
        converters: z.ZodOptional<z.ZodArray<z.ZodString>>;
        _tags: z.ZodOptional<z.ZodObject<{
            publicationType: z.ZodOptional<z.ZodObject<{
                Comic: z.ZodOptional<z.ZodLiteral<true>>;
                "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
            status: z.ZodOptional<z.ZodObject<{
                "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
                "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
                Invalid: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
            misc: z.ZodOptional<z.ZodObject<{
                legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
                Official: z.ZodOptional<z.ZodLiteral<true>>;
                "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
                "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
                Playtest: z.ZodOptional<z.ZodLiteral<true>>;
                Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
                NSFW: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>>;
        }, z.core.$strict>>;
    }, z.core.$strict>;
}, z.core.$strict>, z.ZodObject<{
    type: z.ZodLiteral<"sourceGroup">;
    ID: z.ZodString;
    title: z.ZodObject<{
        full: z.ZodString;
        short: z.ZodString;
    }, z.core.$strict>;
    data: z.ZodOptional<z.ZodObject<{
        publisher: z.ZodString;
        _tags: z.ZodOptional<z.ZodObject<{
            misc: z.ZodObject<{
                Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
            }, z.core.$strict>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>]>]>;
export type dataInfer = z.infer<typeof data>;
