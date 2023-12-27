import { z } from "zod";
export declare const divineIntercession: z.ZodObject<
	{
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
		tags: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
		type: z.ZodLiteral<"divineIntercession">;
		data: z.ZodEffects<
			z.ZodObject<
				{
					preamble: z.ZodOptional<
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
					"Minor Boon": z.ZodOptional<
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
					"Moderate Boon": z.ZodOptional<
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
					"Major Boon": z.ZodOptional<
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
					"Minor Curse": z.ZodOptional<
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
					"Moderate Curse": z.ZodOptional<
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
					"Major Curse": z.ZodOptional<
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
				},
				"strict",
				z.ZodTypeAny,
				{
					preamble?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
				},
				{
					preamble?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Boon"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Minor Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Moderate Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
					"Major Curse"?:
						| (
								| string
								| {
										type: string;
								  }
						  )[]
						| undefined;
				}
			>,
			{
				preamble?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Minor Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Moderate Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Major Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Minor Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Moderate Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Major Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
			},
			{
				preamble?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Minor Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Moderate Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Major Boon"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Minor Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Moderate Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
				"Major Curse"?:
					| (
							| string
							| {
									type: string;
							  }
					  )[]
					| undefined;
			}
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		type: "divineIntercession";
		data: {
			preamble?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Minor Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Moderate Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Major Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Minor Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Moderate Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Major Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
		};
		source: {
			ID: string;
			page?: number | undefined;
		};
		name: {
			primary: string;
			aliases?: [string, ...string[]] | undefined;
			specifier?: string | undefined;
		};
		tags?: {} | undefined;
	},
	{
		type: "divineIntercession";
		data: {
			preamble?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Minor Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Moderate Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Major Boon"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Minor Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Moderate Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
			"Major Curse"?:
				| (
						| string
						| {
								type: string;
						  }
				  )[]
				| undefined;
		};
		source: {
			ID: string;
			page?: number | undefined;
		};
		name: {
			primary: string;
			aliases?: [string, ...string[]] | undefined;
			specifier?: string | undefined;
		};
		tags?: {} | undefined;
	}
>;
