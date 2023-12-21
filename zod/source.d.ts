import { z } from "zod";
export declare const source: z.ZodObject<
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
				url: z.ZodOptional<z.ZodString>;
				groups: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
				requiredSources: z.ZodOptional<z.ZodArray<z.ZodEffects<z.ZodString, string, string>, "many">>;
				license: z.ZodEffects<z.ZodString, string, string>;
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
				authors: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
				publisher: z.ZodOptional<z.ZodString>;
				converters: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
			},
			"strict",
			z.ZodTypeAny,
			{
				license: string;
				released: string;
				added: string;
				modified: string;
				version?: string | undefined;
				errataed?: string | undefined;
				url?: string | undefined;
				groups?: string[] | undefined;
				requiredSources?: string[] | undefined;
				copyright?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				authors?: string[] | undefined;
				publisher?: string | undefined;
				converters?: string[] | undefined;
			},
			{
				license: string;
				released: string;
				added: string;
				modified: string;
				version?: string | undefined;
				errataed?: string | undefined;
				url?: string | undefined;
				groups?: string[] | undefined;
				requiredSources?: string[] | undefined;
				copyright?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				authors?: string[] | undefined;
				publisher?: string | undefined;
				converters?: string[] | undefined;
			}
		>;
		tags: z.ZodOptional<
			z.ZodObject<
				{
					publicationType: z.ZodOptional<
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
						>
					>;
					status: z.ZodOptional<
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
						>
					>;
					misc: z.ZodOptional<
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
			>
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		type: "source";
		data: {
			license: string;
			released: string;
			added: string;
			modified: string;
			version?: string | undefined;
			errataed?: string | undefined;
			url?: string | undefined;
			groups?: string[] | undefined;
			requiredSources?: string[] | undefined;
			copyright?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			authors?: string[] | undefined;
			publisher?: string | undefined;
			converters?: string[] | undefined;
		};
		ID: string;
		title: {
			short: string;
			full: string;
		};
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
			license: string;
			released: string;
			added: string;
			modified: string;
			version?: string | undefined;
			errataed?: string | undefined;
			url?: string | undefined;
			groups?: string[] | undefined;
			requiredSources?: string[] | undefined;
			copyright?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			authors?: string[] | undefined;
			publisher?: string | undefined;
			converters?: string[] | undefined;
		};
		ID: string;
		title: {
			short: string;
			full: string;
		};
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
