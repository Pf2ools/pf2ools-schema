import { z } from "zod";
export declare const reference: z.ZodObject<
	{
		type: z.ZodEnum<["reprint", "variant", "replacement", "extension"]>;
		target: z.ZodObject<
			{
				name: z.ZodString;
				specifier: z.ZodOptional<z.ZodString>;
				source: z.ZodEffects<z.ZodString, string, string>;
			},
			"strip",
			z.ZodTypeAny,
			{
				source: string;
				name: string;
				specifier?: string | undefined;
			},
			{
				source: string;
				name: string;
				specifier?: string | undefined;
			}
		>;
		modifications: z.ZodOptional<
			z.ZodEffects<
				z.ZodArray<
					z.ZodObject<
						{
							type: z.ZodString;
							target: z.ZodObject<
								{
									property: z.ZodString;
									name: z.ZodOptional<z.ZodString>;
								},
								"strip",
								z.ZodTypeAny,
								{
									property: string;
									name?: string | undefined;
								},
								{
									property: string;
									name?: string | undefined;
								}
							>;
							value: z.ZodOptional<
								z.ZodUnion<
									[
										z.ZodString,
										z.ZodNumber,
										z.ZodObject<
											{},
											"passthrough",
											z.ZodTypeAny,
											z.objectOutputType<{}, z.ZodTypeAny, "passthrough">,
											z.objectInputType<{}, z.ZodTypeAny, "passthrough">
										>,
										z.ZodArray<z.ZodAny, "many">,
										z.ZodBoolean,
									]
								>
							>;
						},
						"strip",
						z.ZodTypeAny,
						{
							type: string;
							target: {
								property: string;
								name?: string | undefined;
							};
							value?:
								| string
								| number
								| boolean
								| any[]
								| z.objectOutputType<{}, z.ZodTypeAny, "passthrough">
								| undefined;
						},
						{
							type: string;
							target: {
								property: string;
								name?: string | undefined;
							};
							value?:
								| string
								| number
								| boolean
								| any[]
								| z.objectInputType<{}, z.ZodTypeAny, "passthrough">
								| undefined;
						}
					>,
					"many"
				>,
				{
					type: string;
					target: {
						property: string;
						name?: string | undefined;
					};
					value?:
						| string
						| number
						| boolean
						| any[]
						| z.objectOutputType<{}, z.ZodTypeAny, "passthrough">
						| undefined;
				}[],
				{
					type: string;
					target: {
						property: string;
						name?: string | undefined;
					};
					value?:
						| string
						| number
						| boolean
						| any[]
						| z.objectInputType<{}, z.ZodTypeAny, "passthrough">
						| undefined;
				}[]
			>
		>;
	},
	"strict",
	z.ZodTypeAny,
	{
		type: "variant" | "reprint" | "replacement" | "extension";
		target: {
			source: string;
			name: string;
			specifier?: string | undefined;
		};
		modifications?:
			| {
					type: string;
					target: {
						property: string;
						name?: string | undefined;
					};
					value?:
						| string
						| number
						| boolean
						| any[]
						| z.objectOutputType<{}, z.ZodTypeAny, "passthrough">
						| undefined;
			  }[]
			| undefined;
	},
	{
		type: "variant" | "reprint" | "replacement" | "extension";
		target: {
			source: string;
			name: string;
			specifier?: string | undefined;
		};
		modifications?:
			| {
					type: string;
					target: {
						property: string;
						name?: string | undefined;
					};
					value?:
						| string
						| number
						| boolean
						| any[]
						| z.objectInputType<{}, z.ZodTypeAny, "passthrough">
						| undefined;
			  }[]
			| undefined;
	}
>;
