import fs from "fs/promises";

export async function parseJsonFile(filePath) {
  try {
    const data = await fs.readFile(filePath, "utf8");
    const jsonObject = JSON.parse(data);
    return jsonObject;
  } catch (err) {
    throw new Error("Error parsing JSON:", err);
  }
}

export async function getJsonArray(jsonObject, label) {
  return jsonObject[label];
}
