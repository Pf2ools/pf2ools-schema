import { z } from "zod";

// TODO: find a way to auto-generate this?
export const contentDatatypesArray = [
	"background",
	"condition",
	"divineIntercession",
	"domain",
	"event",
	"familiarAbility",
	"relicGift",
	"skill",
] as const;

export const metaDatatypesArray = ["license", "source", "sourceGroup"] as const;

export const dataTypesArray = [...contentDatatypesArray, ...metaDatatypesArray] as const;

export const contentDatatype = z
	.enum(contentDatatypesArray)
	.describe("A content datatype's name, as it appears in the JSON data itself.");

export const metaDatatype = z.enum(metaDatatypesArray)
	.describe("A metafile datatype's name, as it appears in the JSON data itself.");

export const datatype = z.enum(dataTypesArray)
	.describe("A datatype's name, as it appears in the JSON data itself.");

export const datatypes = z.array(datatype).describe("A list of datatypes used by pf2ools-data.").min(1);
