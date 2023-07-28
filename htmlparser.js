export async function getTableData(dataObject) {
  if (typeof dataObject !== "object" || dataObject === null) {
    throw new Error("data object is either empty or not an object");
  }

  let tableHTML = `<table classname='styled-table'>`;

  //Table Heading
  tableHTML += `<tr>`;

    for (const key in dataObject[0]) {
      tableHTML += `<th>${key}</th>`;
    }
    tableHTML += "</tr>";

  for (let i = 1; i < dataObject.length; i++) {
    

    //Table body
    tableHTML += `<tr>`;
    for (const key in dataObject[i]) {
      const value = dataObject[i][key];
      tableHTML += `<td>${
        typeof value === "object" ? JSON.stringify(value) : value
      }</td>`;
    }
    tableHTML += "</tr>";
  }

  tableHTML += "</table>";

  return tableHTML;
}

export async function getHTML(dataObject) {
  const tableData = await getTableData(dataObject);

  const style= `

table, td, th {  
  border: 1px solid #ddd;
  text-align: left;
}

table {
  border-collapse: collapse;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

th, td {
  padding: 15px;
}

body{
  font-family: 'Roboto', sans-serif;
}

.container{
  padding: 5rem;

}

h1{
  text-align: center;
}
  `
 

  const html = `
    <html>
        <head>
            <title>Generated HTML Template</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
        </head>
        <style>
        ${style}
        
        </style>
        <body>
           <div class='container'>
            <h1>Hello</h1>
            ${tableData}
           </div> 
        </body>
    </html>
    `;

  return html;
}
