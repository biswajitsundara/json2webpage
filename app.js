import { parseJsonFile, getJsonArray } from "./jsonparser.js";
import { getHTML } from "./htmlparser.js";
import { promises as fs } from 'fs';

async function readConfigFile(){

}

(async () => {
  try {
    const filePath = "sample.json";
    const jsonObject = await parseJsonFile(filePath);
    const jsonArray = await getJsonArray(jsonObject, 'products');
    const html = await getHTML(jsonArray);

    await writeFileExample(html);
  } catch (err) {
    console.error(err.message);
  }
})();


async function writeFileExample(data) {
  try {
    const outputFilePath = 'example.html';
    //const data = `<html><body>Hello World</body></html>`
    await fs.writeFile(outputFilePath, data, 'utf-8');
    console.log('File has been saved successfully.');
  } catch (err) {
    console.error('Error saving the file:', err);
  }
}




