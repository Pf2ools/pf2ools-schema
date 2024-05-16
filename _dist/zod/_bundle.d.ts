import { z } from "zod";
export declare const bundle: z.ZodObject<{
    license: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"license">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodObject<{
            entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>]>, "many">;
        }, "strict", z.ZodTypeAny, {
            entries: (string | {
                type: string;
            })[];
        }, {
            entries: (string | {
                type: string;
            })[];
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }, {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }>, "many">>;
    source: z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"source">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodEffects<z.ZodString, string, string>;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodObject<{
            released: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
            errataed: z.ZodOptional<z.ZodString>;
            added: z.ZodString;
            modified: z.ZodString;
            URL: z.ZodString;
            groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            licenseID: z.ZodEffects<z.ZodString, string, string>;
            copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>]>, "many">>;
            authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            publisher: z.ZodOptional<z.ZodString>;
            converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    Comic: z.ZodOptional<z.ZodLiteral<true>>;
                    "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }>, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }>>;
                status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
                    "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
                    Invalid: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }>, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }>>;
                misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
                    Official: z.ZodOptional<z.ZodLiteral<true>>;
                    "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
                    "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
                    Playtest: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                    Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
                    NSFW: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }>, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }>>;
            }, "strict", z.ZodTypeAny, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }>, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        }, {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }, {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }>, "many">;
    sourceGroup: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"sourceGroup">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            publisher: z.ZodString;
            _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                misc: z.ZodEffects<z.ZodObject<{
                    Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }>, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }>;
            }, "strict", z.ZodTypeAny, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }>, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }>>;
        }, "strict", z.ZodTypeAny, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }>, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }>, "many">>;
    background: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    condition: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    domain: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    event: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    familiarAbility: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    relicGift: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
    skill: z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    source: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[];
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}, {
    source: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[];
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}>;
export declare const anyBundle: z.ZodEffects<z.ZodObject<{
    license: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"license">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodObject<{
            entries: z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>]>, "many">;
        }, "strict", z.ZodTypeAny, {
            entries: (string | {
                type: string;
            })[];
        }, {
            entries: (string | {
                type: string;
            })[];
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }, {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }>, "many">>>;
    source: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"source">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodEffects<z.ZodString, string, string>;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodObject<{
            released: z.ZodString;
            version: z.ZodOptional<z.ZodString>;
            errataed: z.ZodOptional<z.ZodString>;
            added: z.ZodString;
            modified: z.ZodString;
            URL: z.ZodString;
            groupIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            requiredSourceIDs: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            licenseID: z.ZodEffects<z.ZodString, string, string>;
            copyright: z.ZodOptional<z.ZodArray<z.ZodUnion<[z.ZodString, z.ZodObject<{
                type: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
            }, {
                type: string;
            }>]>, "many">>;
            authors: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            publisher: z.ZodOptional<z.ZodString>;
            converters: z.ZodOptional<z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>>;
            _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                publicationType: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    Comic: z.ZodOptional<z.ZodLiteral<true>>;
                    "Blog post": z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }>, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }, {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                }>>;
                status: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    "Missing content": z.ZodOptional<z.ZodLiteral<true>>;
                    "Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
                    Invalid: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }>, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }, {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                }>>;
                misc: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    legacyRuleset: z.ZodOptional<z.ZodLiteral<true>>;
                    Official: z.ZodOptional<z.ZodLiteral<true>>;
                    "GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
                    "PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
                    Playtest: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                    Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
                    NSFW: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }>, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }, {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                }>>;
            }, "strict", z.ZodTypeAny, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }>, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }, {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            }>>;
        }, "strict", z.ZodTypeAny, {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        }, {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        }>;
    }, "strict", z.ZodTypeAny, {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }, {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }>, "many">>;
    sourceGroup: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodLiteral<"sourceGroup">;
        ID: z.ZodEffects<z.ZodString, string, string>;
        title: z.ZodObject<{
            full: z.ZodString;
            short: z.ZodString;
        }, "strict", z.ZodTypeAny, {
            short: string;
            full: string;
        }, {
            short: string;
            full: string;
        }>;
        data: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            publisher: z.ZodString;
            _tags: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                misc: z.ZodEffects<z.ZodObject<{
                    Adventure: z.ZodOptional<z.ZodLiteral<true>>;
                    Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
                }, "strict", z.ZodTypeAny, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }>, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }, {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                }>;
            }, "strict", z.ZodTypeAny, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }>, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }, {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            }>>;
        }, "strict", z.ZodTypeAny, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }>, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }, {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }, {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }>, "many">>>;
    background: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    condition: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    domain: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    event: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    familiarAbility: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    relicGift: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
    skill: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEffects<z.AnyZodObject, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>, "many">>>;
}, "strip", z.ZodTypeAny, {
    source?: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}, {
    source?: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}>, {
    source?: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}, {
    source?: {
        type: "source";
        data: {
            released: string;
            added: string;
            modified: string;
            URL: string;
            licenseID: string;
            version?: string | undefined;
            errataed?: string | undefined;
            groupIDs?: [string, ...string[]] | undefined;
            requiredSourceIDs?: [string, ...string[]] | undefined;
            copyright?: (string | {
                type: string;
            })[] | undefined;
            authors?: [string, ...string[]] | undefined;
            publisher?: string | undefined;
            converters?: [string, ...string[]] | undefined;
            _tags?: {
                status?: {
                    "Missing content"?: true | undefined;
                    "Missing tags"?: true | undefined;
                    Invalid?: true | undefined;
                } | undefined;
                publicationType?: {
                    Comic?: true | undefined;
                    "Blog post"?: true | undefined;
                } | undefined;
                misc?: {
                    legacyRuleset?: true | undefined;
                    Official?: true | undefined;
                    "GM-facing"?: true | undefined;
                    "PFS-legal"?: true | undefined;
                    Playtest?: true | undefined;
                    Ongoing?: true | undefined;
                    Deprecated?: true | undefined;
                    NSFW?: true | undefined;
                } | undefined;
            } | undefined;
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    background?: {
        [x: string]: any;
    }[] | undefined;
    event?: {
        [x: string]: any;
    }[] | undefined;
    license?: {
        type: "license";
        data: {
            entries: (string | {
                type: string;
            })[];
        };
        title: {
            short: string;
            full: string;
        };
        ID: string;
    }[] | undefined;
    sourceGroup?: {
        type: "sourceGroup";
        title: {
            short: string;
            full: string;
        };
        ID: string;
        data?: {
            publisher: string;
            _tags?: {
                misc: {
                    Ongoing?: true | undefined;
                    Adventure?: true | undefined;
                };
            } | undefined;
        } | undefined;
    }[] | undefined;
    condition?: {
        [x: string]: any;
    }[] | undefined;
    domain?: {
        [x: string]: any;
    }[] | undefined;
    skill?: {
        [x: string]: any;
    }[] | undefined;
    familiarAbility?: {
        [x: string]: any;
    }[] | undefined;
    relicGift?: {
        [x: string]: any;
    }[] | undefined;
}>;
