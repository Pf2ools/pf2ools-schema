// A list of `.refine()` arguments to enforce non-empty objects
export const nonEmpty = [(o) => Object.keys(o).length !== 0, "Objects must not be empty"];
