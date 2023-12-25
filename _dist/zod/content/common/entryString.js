import { z } from "zod";
export const entryString = z
	.string()
	.describe("A single paragraph that accepts in-line formatting via `@tag`s.")
	.min(1);
