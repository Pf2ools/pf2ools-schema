// A list of `.refine()` arguments to enforce unique values in an array
export const uniqueStrings = [
    (a) => new Set(a).size === a.length,
    "Unique items required",
];
