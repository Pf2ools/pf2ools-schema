import { z } from "zod";
export declare const homebrewSourceSummary: z.ZodObject<
	{
		path: z.ZodString;
		fullTitle: z.ZodString;
		publisherAuthors: z.ZodString;
		released: z.ZodString;
		added: z.ZodString;
		modified: z.ZodString;
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
		indexOfDatatypes: z.ZodArray<z.ZodString, "many">;
		sourceUrl: z.ZodOptional<z.ZodString>;
	},
	"strip",
	z.ZodTypeAny,
	{
		path: string;
		released: string;
		added: string;
		modified: string;
		fullTitle: string;
		publisherAuthors: string;
		indexOfDatatypes: string[];
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
		sourceUrl?: string | undefined;
	},
	{
		path: string;
		released: string;
		added: string;
		modified: string;
		fullTitle: string;
		publisherAuthors: string;
		indexOfDatatypes: string[];
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
		sourceUrl?: string | undefined;
	}
>;
export declare const homebrewSources: z.ZodRecord<
	z.ZodEffects<z.ZodString, string, string>,
	z.ZodObject<
		{
			path: z.ZodString;
			fullTitle: z.ZodString;
			publisherAuthors: z.ZodString;
			released: z.ZodString;
			added: z.ZodString;
			modified: z.ZodString;
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
			indexOfDatatypes: z.ZodArray<z.ZodString, "many">;
			sourceUrl: z.ZodOptional<z.ZodString>;
		},
		"strip",
		z.ZodTypeAny,
		{
			path: string;
			released: string;
			added: string;
			modified: string;
			fullTitle: string;
			publisherAuthors: string;
			indexOfDatatypes: string[];
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
			sourceUrl?: string | undefined;
		},
		{
			path: string;
			released: string;
			added: string;
			modified: string;
			fullTitle: string;
			publisherAuthors: string;
			indexOfDatatypes: string[];
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
			sourceUrl?: string | undefined;
		}
	>
>;
