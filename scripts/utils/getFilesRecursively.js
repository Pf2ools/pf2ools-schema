import { readdirSync as fsReadDirSync, statSync as fsStatSync } from "fs";
import { join as pathJoin, extname as pathExtName } from "path/posix";

export function getFilesRecursively(targetPath) {
	let fileList = [];
	fsReadDirSync(targetPath).forEach((file) => {
		const filePath = pathJoin(targetPath, file);
		if (fsStatSync(filePath).isDirectory()) {
			fileList = fileList.concat(getFilesRecursively(filePath));
		} else {
			fileList.push(filePath);
		}
	});
	return fileList;
}

export function getJSONsRecursively(targetPath) {
	return getFilesRecursively(targetPath).filter((filename) => pathExtName(filename) === ".json");
}

export function getTSsRecursively(targetPath) {
	return getFilesRecursively(targetPath).filter((filename) => pathExtName(filename) === ".ts");
}
