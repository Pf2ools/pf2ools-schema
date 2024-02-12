import { data } from "../_dist/zod/_data.js";
import { bundle } from "../_dist/zod/_bundle.js";

function validationReporter(result) {
	if (result.success) return { success: true };
	return { success: false, error: result.error.issues };
}

export function validateData(obj) {
	return validationReporter(data.safeParse(obj));
}
export function validateBundle(obj) {
	return validationReporter(bundle.safeParse(obj));
}
