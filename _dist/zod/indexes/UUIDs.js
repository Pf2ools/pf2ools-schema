import { z } from "zod";
export const UUIDs = z.record(z
    .string()
    .describe("An 'effective UUID' for Pf2ools content, in the format \"<primaryName>|<sourceID>|<specifier?>\".")
    .min(5)
    .regex(/^[^@|]+\|[a-zA-Z0-9-]{2,}\|[^@|]*$/, "Invalid UUID"), z.string().describe("A relative path to the file with that UUID.").min(1));
