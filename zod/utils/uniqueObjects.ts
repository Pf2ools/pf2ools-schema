// A list of `.refine()` arguments to enforce unique values in an array

export const uniqueObjects: [(a: object[]) => boolean, string] = [
	(a: object[]): boolean => new Set(a.map((e) => JSON.stringify(e))).size === a.length,
	"Unique items required",
];
