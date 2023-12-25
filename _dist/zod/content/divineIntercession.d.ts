import { z } from "zod";
export declare const divineIntercession: z.ZodObject<
	{
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
	}
>;
