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


/** Styles */

export async function getNavStyle() {
  return `
   nav {
    background-color: #333;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }`;
}

export async function getFooterStyle() {
  return `
    footer {
      background-color: #333;
      color: #fff;
      text-align: center;
      padding: 2px;
      margin-top: auto;
    }`;
}

// Table Styles
export async function getTableStyles() {
  return `
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

  .table-header{
    text-align: center;
  }
  `;
}

//Body Style
export async function getBodyStyles() {
  return `
  body{
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .container{
    padding: 5rem;
  }
  `;
}

//Global Styles
export async function getGlobalStyles() {
  return `
  
  `;
}

export async function getStyles() {
  const appNav = await getNavStyle();
  const footer = await getFooterStyle();
  const table = await getTableStyles();
  const body = await getBodyStyles();
  const global = await getGlobalStyles();
  return `
    ${appNav}
    ${footer}
    ${table}
    ${body}
    ${global}
   `;
}

/** HTML */

//HTML Header Object
export async function getHTMLHeader() {
  const appStyles = await getStyles();
  return `
   <head>
     <title>Generated HTML Template</title>
     <link rel="preconnect" href="https://fonts.googleapis.com">
     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
     <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
     <style>${appStyles}</style>
   </head>
  `;
}

//App Navbar
export async function getHTMLNav(pageHeader) {
  const navString = `<nav>
    <h1 class="company-name">${pageHeader}</h1>
    </nav>`;
  return navString;
}

//App Footer
export async function getHTMLFooter(pageFooter) {
  return`
   <footer>
      <p>${pageFooter}</p>
   </footer>`;
}

//Body HTML
export async function getHTMLBody(dataObject, config) {

  const headerText = config['headerTitle'];
  const footerText = config['footer'];

  const navBar = await getHTMLNav(headerText);
  const footer = await getHTMLFooter(footerText);
  const tableHTML = await getTableData(dataObject);

  return `
  <body>
    ${navBar}

    <div class='container'>
     <h1 class='table-header'>Hello</h1>
     ${tableHTML}
    </div> 

    ${footer}
 </body>
  `;
}

//App HTML
export async function getHTML(dataObject, config) {
  const headerHTML = await getHTMLHeader();
  const bodyHTML = await getHTMLBody(dataObject, config);

  return `
    <html>
      ${headerHTML}
      ${bodyHTML}
    </html>
  `;
}
