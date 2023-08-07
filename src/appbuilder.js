import { parseJsonFile, getJsonArray } from "./jsonparser.js";
import { getHTML } from "./htmlparser.js";
import { promises as fs } from "fs";

export async function generateFileContent(config) {
  const filePath = config.body.datasource;
  const jsonArrayNodeName = config.body.key;

  const jsonObject = await parseJsonFile(filePath);
  const jsonArray = await getJsonArray(jsonObject, jsonArrayNodeName);
  const html = await getHTML(jsonArray, config);
  return html;
}

export async function saveFileData(htmlData, outputFilePath) {
  try {
    await fs.writeFile(outputFilePath, htmlData, "utf-8");
    console.log("File has been saved successfully.");
  } catch (err) {
    console.error("Error saving the file:", err);
  }
}
