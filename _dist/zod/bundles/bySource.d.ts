import { z } from "zod";
export declare const bySource: z.ZodEffects<
	z.ZodIntersection<
		z.ZodObject<
			{
				source: z.ZodObject<
					{
						type: z.ZodLiteral<"source">;
						ID: z.ZodEffects<z.ZodString, string, string>;
						title: z.ZodObject<
							{
								full: z.ZodEffects<z.ZodString, string, string>;
								short: z.ZodString;
							},
							"strict",
							z.ZodTypeAny,
							{
								short: string;
								full: string;
							},
							{
								short: string;
								full: string;
							}
						>;
						data: z.ZodObject<
							{
								released: z.ZodString;
								version: z.ZodOptional<z.ZodString>;
								errataed: z.ZodOptional<z.ZodString>;
								added: z.ZodString;
								modified: z.ZodString;
								URL: z.ZodString;
								groupIDs: z.ZodOptional<
									z.ZodEffects<
										z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">,
										[string, ...string[]],
										[string, ...string[]]
									>
								>;
								requiredSourceIDs: z.ZodOptional<
									z.ZodEffects<
										z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "atleastone">,
										[string, ...string[]],
										[string, ...string[]]
									>
								>;
								licenseID: z.ZodEffects<z.ZodString, string, string>;
								copyright: z.ZodOptional<
									z.ZodArray<
										z.ZodUnion<
											[
												z.ZodString,
												z.ZodObject<
													{
														type: z.ZodString;
													},
													"strip",
													z.ZodTypeAny,
													{
														type: string;
													},
													{
														type: string;
													}
												>,
											]
										>,
										"many"
									>
								>;
								authors: z.ZodOptional<
									z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
								>;
								publisher: z.ZodOptional<z.ZodString>;
								converters: z.ZodOptional<
									z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
								>;
							},
							"strict",
							z.ZodTypeAny,
							{
								released: string;
								added: string;
								modified: string;
								URL: string;
								licenseID: string;
								version?: string | undefined;
								errataed?: string | undefined;
								groupIDs?: [string, ...string[]] | undefined;
								requiredSourceIDs?: [string, ...string[]] | undefined;
								copyright?:
									| (
											| string
											| {
													type: string;
											  }
									  )[]
									| undefined;
								authors?: [string, ...string[]] | undefined;
								publisher?: string | undefined;
								converters?: [string, ...string[]] | undefined;
							},
							{
								released: string;
								added: string;
								modified: string;
								URL: string;
								licenseID: string;
								version?: string | undefined;
								errataed?: string | undefined;
								groupIDs?: [string, ...string[]] | undefined;
								requiredSourceIDs?: [string, ...string[]] | undefined;
								copyright?:
									| (
											| string
											| {
													type: string;
											  }
									  )[]
									| undefined;
								authors?: [string, ...string[]] | undefined;
								publisher?: string | undefined;
								converters?: [string, ...string[]] | undefined;
							}
						>;
						tags: z.ZodOptional<
							z.ZodEffects<
								z.ZodObject<
									{
										publicationType: z.ZodOptional<
											z.ZodEffects<
												z.ZodObject<
													{
														Comic: z.ZodOptional<z.ZodLiteral<true>>;
														"Blog post": z.ZodOptional<z.ZodLiteral<true>>;
													},
													"strict",
													z.ZodTypeAny,
													{
														Comic?: true | undefined;
														"Blog post"?: true | undefined;
													},
													{
														Comic?: true | undefined;
														"Blog post"?: true | undefined;
													}
												>,
												{
													Comic?: true | undefined;
													"Blog post"?: true | undefined;
												},
												{
													Comic?: true | undefined;
													"Blog post"?: true | undefined;
												}
											>
										>;
										status: z.ZodOptional<
											z.ZodEffects<
												z.ZodObject<
													{
														"Missing content": z.ZodOptional<z.ZodLiteral<true>>;
														"Missing tags": z.ZodOptional<z.ZodLiteral<true>>;
														Invalid: z.ZodOptional<z.ZodLiteral<true>>;
													},
													"strict",
													z.ZodTypeAny,
													{
														"Missing content"?: true | undefined;
														"Missing tags"?: true | undefined;
														Invalid?: true | undefined;
													},
													{
														"Missing content"?: true | undefined;
														"Missing tags"?: true | undefined;
														Invalid?: true | undefined;
													}
												>,
												{
													"Missing content"?: true | undefined;
													"Missing tags"?: true | undefined;
													Invalid?: true | undefined;
												},
												{
													"Missing content"?: true | undefined;
													"Missing tags"?: true | undefined;
													Invalid?: true | undefined;
												}
											>
										>;
										misc: z.ZodOptional<
											z.ZodEffects<
												z.ZodObject<
													{
														Official: z.ZodOptional<z.ZodLiteral<true>>;
														"GM-facing": z.ZodOptional<z.ZodLiteral<true>>;
														"PFS-legal": z.ZodOptional<z.ZodLiteral<true>>;
														Playtest: z.ZodOptional<z.ZodLiteral<true>>;
														Ongoing: z.ZodOptional<z.ZodLiteral<true>>;
														Deprecated: z.ZodOptional<z.ZodLiteral<true>>;
													},
													"strict",
													z.ZodTypeAny,
													{
														Official?: true | undefined;
														"GM-facing"?: true | undefined;
														"PFS-legal"?: true | undefined;
														Playtest?: true | undefined;
														Ongoing?: true | undefined;
														Deprecated?: true | undefined;
													},
													{
														Official?: true | undefined;
														"GM-facing"?: true | undefined;
														"PFS-legal"?: true | undefined;
														Playtest?: true | undefined;
														Ongoing?: true | undefined;
														Deprecated?: true | undefined;
													}
												>,
												{
													Official?: true | undefined;
													"GM-facing"?: true | undefined;
													"PFS-legal"?: true | undefined;
													Playtest?: true | undefined;
													Ongoing?: true | undefined;
													Deprecated?: true | undefined;
												},
												{
													Official?: true | undefined;
													"GM-facing"?: true | undefined;
													"PFS-legal"?: true | undefined;
													Playtest?: true | undefined;
													Ongoing?: true | undefined;
													Deprecated?: true | undefined;
												}
											>
										>;
									},
									"strict",
									z.ZodTypeAny,
									{
										publicationType?:
											| {
													Comic?: true | undefined;
													"Blog post"?: true | undefined;
											  }
											| undefined;
										status?:
											| {
													"Missing content"?: true | undefined;
													"Missing tags"?: true | undefined;
													Invalid?: true | undefined;
											  }
											| undefined;
										misc?:
											| {
													Official?: true | undefined;
													"GM-facing"?: true | undefined;
													"PFS-legal"?: true | undefined;
													Playtest?: true | undefined;
													Ongoing?: true | undefined;
													Deprecated?: true | undefined;
											  }
											| undefined;
									},
									{
										publicationType?:
											| {
													Comic?: true | undefined;
													"Blog post"?: true | undefined;
											  }
											| undefined;
										status?:
											| {
													"Missing content"?: true | undefined;
													"Missing tags"?: true | undefined;
													Invalid?: true | undefined;
											  }
											| undefined;
										misc?:
											| {
													Official?: true | undefined;
													"GM-facing"?: true | undefined;
													"PFS-legal"?: true | undefined;
													Playtest?: true | undefined;
													Ongoing?: true | undefined;
													Deprecated?: true | undefined;
											  }
											| undefined;
									}
								>,
								{
									publicationType?:
										| {
												Comic?: true | undefined;
												"Blog post"?: true | undefined;
										  }
										| undefined;
									status?:
										| {
												"Missing content"?: true | undefined;
												"Missing tags"?: true | undefined;
												Invalid?: true | undefined;
										  }
										| undefined;
									misc?:
										| {
												Official?: true | undefined;
												"GM-facing"?: true | undefined;
												"PFS-legal"?: true | undefined;
												Playtest?: true | undefined;
												Ongoing?: true | undefined;
												Deprecated?: true | undefined;
										  }
										| undefined;
								},
								{
									publicationType?:
										| {
												Comic?: true | undefined;
												"Blog post"?: true | undefined;
										  }
										| undefined;
									status?:
										| {
												"Missing content"?: true | undefined;
												"Missing tags"?: true | undefined;
												Invalid?: true | undefined;
										  }
										| undefined;
									misc?:
										| {
												Official?: true | undefined;
												"GM-facing"?: true | undefined;
												"PFS-legal"?: true | undefined;
												Playtest?: true | undefined;
												Ongoing?: true | undefined;
												Deprecated?: true | undefined;
										  }
										| undefined;
								}
							>
						>;
					},
					"strict",
					z.ZodTypeAny,
					{
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
							copyright?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							authors?: [string, ...string[]] | undefined;
							publisher?: string | undefined;
							converters?: [string, ...string[]] | undefined;
						};
						title: {
							short: string;
							full: string;
						};
						ID: string;
						tags?:
							| {
									publicationType?:
										| {
												Comic?: true | undefined;
												"Blog post"?: true | undefined;
										  }
										| undefined;
									status?:
										| {
												"Missing content"?: true | undefined;
												"Missing tags"?: true | undefined;
												Invalid?: true | undefined;
										  }
										| undefined;
									misc?:
										| {
												Official?: true | undefined;
												"GM-facing"?: true | undefined;
												"PFS-legal"?: true | undefined;
												Playtest?: true | undefined;
												Ongoing?: true | undefined;
												Deprecated?: true | undefined;
										  }
										| undefined;
							  }
							| undefined;
					},
					{
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
							copyright?:
								| (
										| string
										| {
												type: string;
										  }
								  )[]
								| undefined;
							authors?: [string, ...string[]] | undefined;
							publisher?: string | undefined;
							converters?: [string, ...string[]] | undefined;
						};
						title: {
							short: string;
							full: string;
						};
						ID: string;
						tags?:
							| {
									publicationType?:
										| {
												Comic?: true | undefined;
												"Blog post"?: true | undefined;
										  }
										| undefined;
									status?:
										| {
												"Missing content"?: true | undefined;
												"Missing tags"?: true | undefined;
												Invalid?: true | undefined;
										  }
										| undefined;
									misc?:
										| {
												Official?: true | undefined;
												"GM-facing"?: true | undefined;
												"PFS-legal"?: true | undefined;
												Playtest?: true | undefined;
												Ongoing?: true | undefined;
												Deprecated?: true | undefined;
										  }
										| undefined;
							  }
							| undefined;
					}
				>;
			},
			"strip",
			z.ZodTypeAny,
			{
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
						copyright?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						authors?: [string, ...string[]] | undefined;
						publisher?: string | undefined;
						converters?: [string, ...string[]] | undefined;
					};
					title: {
						short: string;
						full: string;
					};
					ID: string;
					tags?:
						| {
								publicationType?:
									| {
											Comic?: true | undefined;
											"Blog post"?: true | undefined;
									  }
									| undefined;
								status?:
									| {
											"Missing content"?: true | undefined;
											"Missing tags"?: true | undefined;
											Invalid?: true | undefined;
									  }
									| undefined;
								misc?:
									| {
											Official?: true | undefined;
											"GM-facing"?: true | undefined;
											"PFS-legal"?: true | undefined;
											Playtest?: true | undefined;
											Ongoing?: true | undefined;
											Deprecated?: true | undefined;
									  }
									| undefined;
						  }
						| undefined;
				};
			},
			{
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
						copyright?:
							| (
									| string
									| {
											type: string;
									  }
							  )[]
							| undefined;
						authors?: [string, ...string[]] | undefined;
						publisher?: string | undefined;
						converters?: [string, ...string[]] | undefined;
					};
					title: {
						short: string;
						full: string;
					};
					ID: string;
					tags?:
						| {
								publicationType?:
									| {
											Comic?: true | undefined;
											"Blog post"?: true | undefined;
									  }
									| undefined;
								status?:
									| {
											"Missing content"?: true | undefined;
											"Missing tags"?: true | undefined;
											Invalid?: true | undefined;
									  }
									| undefined;
								misc?:
									| {
											Official?: true | undefined;
											"GM-facing"?: true | undefined;
											"PFS-legal"?: true | undefined;
											Playtest?: true | undefined;
											Ongoing?: true | undefined;
											Deprecated?: true | undefined;
									  }
									| undefined;
						  }
						| undefined;
				};
			}
		>,
		z.ZodRecord<
			z.ZodString,
			z.ZodArray<
				z.ZodObject<
					{
						type: z.ZodString;
						name: z.ZodObject<
							{
								primary: z.ZodEffects<z.ZodString, string, string>;
								aliases: z.ZodOptional<
									z.ZodEffects<z.ZodArray<z.ZodString, "atleastone">, [string, ...string[]], [string, ...string[]]>
								>;
								specifier: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
							},
							"strict",
							z.ZodTypeAny,
							{
								primary: string;
								aliases?: [string, ...string[]] | undefined;
								specifier?: string | undefined;
							},
							{
								primary: string;
								aliases?: [string, ...string[]] | undefined;
								specifier?: string | undefined;
							}
						>;
						source: z.ZodObject<
							{
								ID: z.ZodEffects<z.ZodString, string, string>;
								page: z.ZodOptional<z.ZodNumber>;
							},
							"strict",
							z.ZodTypeAny,
							{
								ID: string;
								page?: number | undefined;
							},
							{
								ID: string;
								page?: number | undefined;
							}
						>;
						data: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
						tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
					},
					"strict",
					z.ZodTypeAny,
					{
						type: string;
						source: {
							ID: string;
							page?: number | undefined;
						};
						name: {
							primary: string;
							aliases?: [string, ...string[]] | undefined;
							specifier?: string | undefined;
						};
						data?: {} | undefined;
						tags?: {} | undefined;
					},
					{
						type: string;
						source: {
							ID: string;
							page?: number | undefined;
						};
						name: {
							primary: string;
							aliases?: [string, ...string[]] | undefined;
							specifier?: string | undefined;
						};
						data?: {} | undefined;
						tags?: {} | undefined;
					}
				>,
				"many"
			>
		>
	>,
	{
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
				copyright?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				authors?: [string, ...string[]] | undefined;
				publisher?: string | undefined;
				converters?: [string, ...string[]] | undefined;
			};
			title: {
				short: string;
				full: string;
			};
			ID: string;
			tags?:
				| {
						publicationType?:
							| {
									Comic?: true | undefined;
									"Blog post"?: true | undefined;
							  }
							| undefined;
						status?:
							| {
									"Missing content"?: true | undefined;
									"Missing tags"?: true | undefined;
									Invalid?: true | undefined;
							  }
							| undefined;
						misc?:
							| {
									Official?: true | undefined;
									"GM-facing"?: true | undefined;
									"PFS-legal"?: true | undefined;
									Playtest?: true | undefined;
									Ongoing?: true | undefined;
									Deprecated?: true | undefined;
							  }
							| undefined;
				  }
				| undefined;
		};
	} & Record<
		string,
		{
			type: string;
			source: {
				ID: string;
				page?: number | undefined;
			};
			name: {
				primary: string;
				aliases?: [string, ...string[]] | undefined;
				specifier?: string | undefined;
			};
			data?: {} | undefined;
			tags?: {} | undefined;
		}[]
	>,
	{
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
				copyright?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				authors?: [string, ...string[]] | undefined;
				publisher?: string | undefined;
				converters?: [string, ...string[]] | undefined;
			};
			title: {
				short: string;
				full: string;
			};
			ID: string;
			tags?:
				| {
						publicationType?:
							| {
									Comic?: true | undefined;
									"Blog post"?: true | undefined;
							  }
							| undefined;
						status?:
							| {
									"Missing content"?: true | undefined;
									"Missing tags"?: true | undefined;
									Invalid?: true | undefined;
							  }
							| undefined;
						misc?:
							| {
									Official?: true | undefined;
									"GM-facing"?: true | undefined;
									"PFS-legal"?: true | undefined;
									Playtest?: true | undefined;
									Ongoing?: true | undefined;
									Deprecated?: true | undefined;
							  }
							| undefined;
				  }
				| undefined;
		};
	} & Record<
		string,
		{
			type: string;
			source: {
				ID: string;
				page?: number | undefined;
			};
			name: {
				primary: string;
				aliases?: [string, ...string[]] | undefined;
				specifier?: string | undefined;
			};
			data?: {} | undefined;
			tags?: {} | undefined;
		}[]
	>
>;
