import chalk from "chalk";
import fs from "fs";
import path from "path/posix";

export function generateZodStatblockType(zodDir, files) {
	let typeImports = "";
	let typeArray = "";

	for (const file of files) {
		const code = fs.readFileSync(path.join(zodDir, file), { encoding: "utf8" });
		if (code.split("\n").some((line) => line.match(/=\s*content.merge\(/))) {
			typeImports += `import { ${path.basename(file, ".ts")} } from "./${file.replace(/\.ts$/, "")}.js";\n`;
			typeArray += `\t${path.basename(file, ".ts")},\n`;
		}
	}

	const statblockTS = `// This file was generated by scripts/generate-zod-statblockType.js at ${new Date().toUTCString()}\n\nimport { z } from "zod";\n\n${typeImports}\nexport const statblock = z.discriminatedUnion("type", [\n${typeArray}]);\n`;

	fs.writeFileSync(`${zodDir}/_statblock.ts`, statblockTS);
	console.log(chalk.green("Statblock type file generated"));
	return true;
}
