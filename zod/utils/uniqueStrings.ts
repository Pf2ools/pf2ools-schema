// A list of `.refine()` arguments to enforce unique values in an array

export const uniqueStrings: [(a: string[]) => boolean, string] = [
	(a: string[]): boolean => new Set(a).size === a.length,
	"Unique items required",
];
