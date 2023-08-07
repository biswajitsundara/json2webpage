import readConfigData from "./src/readconfig.js";
import { generateFileContent, saveFileData } from "./src/appbuilder.js";

async function json2webpage(config) {
  let configData;
  configData = config ? config : await readConfigData();
  const htmlData = await generateFileContent(configData);
  await saveFileData(htmlData, configData.output);
}

//json2webpage();
