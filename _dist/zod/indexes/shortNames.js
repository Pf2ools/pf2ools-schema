import { z } from "zod";
import { dataSummary } from "./IDs.js";
export const shortNames = z
	.record(z.string().min(2), z.array(dataSummary).min(1))
	.describe(
		"An object mapping `shortName`s as keys to an array of objects, each object containing some basic information about some data with that `shortName`.",
	);
