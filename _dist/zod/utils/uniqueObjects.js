// A list of `.refine()` arguments to enforce unique values in an array
export const uniqueObjects = [
    (a) => new Set(a.map((e) => JSON.stringify(e))).size === a.length,
    "Unique items required",
];
