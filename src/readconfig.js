import fs from "fs";
import path from "path";
import { parseJsonFile } from "./jsonparser.js";

const json2webDir = path.resolve("./json2web");
const configFilePath = path.join(json2webDir, "json2web.config.json");

async function findConfigFile() {
  try {
    await fs.promises.access(configFilePath, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
}

async function readConfigData() {
  const fileExists = await findConfigFile();
  if (!fileExists) {
    throw new Error("The json2web.config.json file is missing");
  } else {
    return await parseJsonFile(configFilePath);
  }
}

export default readConfigData;
