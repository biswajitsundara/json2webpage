# json2webpage

json2webpage is a powerful library that allows you to generate dynamic and interactive web pages from JSON data. It simplifies the process of integrating JSON data into customizable HTML, CSS, and JavaScript templates, enabling you to create stunning and responsive web pages effortlessly.

## Features

- Convert JSON data into fully customizable web pages
- Build dynamic and interactive web content with ease
- Save time by reducing manual coding tasks
- Enhance productivity in web development projects

## Installation

Install the library using npm

```console
npm install json2webpage
```

## Configuration

- Create a folder under root folder `json2web`
- Have the `json2web.config.json` under the folder
- The config template should be as below.

```js
{
  "headerTitle": "<Title of the header>",
  "body": {
    "component": "table",
    "datasource": "<file name of the json data file>",
    "key": "<key that holds the json array>"
  },
  "footer": "<footer text>",
  "output": "<output file name>"
}
```

- Without the config file also it works
- You need to pass a config object with the same template.

## Usage

```js
import json2webpage from "json2webpage";

//If you want to pass manual config object
json2webpage(configObject);

//If you have mantianed configuration under root/json2web
json2webpage();
```

- It will generate the output html file that's provided in the configuration

## Contributing

Contributions are welcome! If you have any bug reports, feature requests, or suggestions, please open an issue on our GitHub repository.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Biswajit Sundara
