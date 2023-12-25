// A zod type for date strings (YYYY-MM-DD)
import { z } from "zod";
export const date = z.string().regex(/\d\d\d\d-[01]\d-[0123]\d/, "A date is required (YYYY-MM-DD)");
