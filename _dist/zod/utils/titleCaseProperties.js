// A list of `.refine()` arguments to enforce an object's properties being in title case
export const titleCaseProperties = [
    (obj) => Object.keys(obj).every((key) => key.match(/^[A-Z]/)),
    "Property name should be in title case",
];
