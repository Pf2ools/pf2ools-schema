import { data } from "../_dist/zod/_data.js";

export function validateZod(obj) {
	const result = data.safeParse(obj);
	if (result.success) return { success: true };
	return { success: false, error: result.error.issues };
}
