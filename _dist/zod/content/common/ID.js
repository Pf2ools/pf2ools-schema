import { z } from "zod";
export const ID = z
    .string()
    // Format derives from the following logic: 1) the ID should be URI-safe to ensure, well, maximum safety; 2) the ID should not include "." because that looks confusing in a URI; 3) the ID should not include "_" because that is reserved for use by the Pf2ools' website; 4) "~" and initial/terminal "-" is confusing and looks ugly. The minimum length is just to ensure a modicum of variety and meaningfulness.
    .regex(/^[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]$/, "Use alphanumeric characters only (minimum length 2), along with hyphens that aren't in first or last position")
    // These are reserved filenames in Windows. At some point, someone will save a source file and/or its content as "<id>.json" and won't realise the hell this causes for Windows users. So rip the 'Casmaron Orienteering Manual' or whatever I guess ¯\_(ツ)_/¯
    .refine((str) => !str.match(/^(COM[0-9]?|PRN|AUX|NUL|LPT[0-9])$/i), "This ID is reserved");
