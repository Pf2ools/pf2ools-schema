// A list of `.refine()` arguments to enforce an object's properties being in title case

export const titleCaseProperties: [(o: object) => boolean, string] = [
	(obj) => Object.keys(obj).every((key) => key.match(/^[A-Z]/)),
	"Property names should be in title case",
];
