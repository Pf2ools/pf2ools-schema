import { z } from "zod";
// TODO: find a way to auto-generate this?
export const contentDatatype = z
	.enum([
		"background",
		"condition",
		"divineIntercession",
		"domain",
		"event",
		"familiarAbility",
		"relicGift",
		"skill",
	])
	.describe("A content datatype's name, as it appears in the JSON data itself.");
export const metaDatatype = z
	.enum(["license", "source", "sourceGroup"])
	.describe("A metafile datatype's name, as it appears in the JSON data itself.");
export const datatype = contentDatatype
	.or(metaDatatype)
	.describe("A datatype's name, as it appears in the JSON data itself.");
export const datatypes = z.array(datatype).describe("A list of datatypes used by pf2ools-data.").min(1);
