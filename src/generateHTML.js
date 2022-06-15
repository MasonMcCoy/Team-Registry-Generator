const fs = require("fs");

function newHTML(manager) {
    let head = 
        `<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./assets/styles.css">
<title>${manager}'s Team</title>
</head>
    <h1>My Team</h1>`;

    fs.writeFile("./dist/index.html", head, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

// Write to HTML file
function writeHTML(data) {
    fs.appendFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function renderProperty(employee) {
    if (employee.officeNumber) {
        return `<p>Office Number: ${employee.officeNumber}</p>`;
    }
    if (employee.github) {
        return `<p>GitHub: <a href="${employee.getGithub()}" target="_blank">${employee.github}</a></p>`;
    }
    if (employee.school) {
        return `<p>School: ${employee.getSchool()}</p>`;
    }
}

// Renders team member data to HTML
function addCard(employee) {
    return `
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    <p>ID: ${employee.getId()}</p>
    <p>Email: <span class="email">${employee.getEmail()}</span></p>
    ${renderProperty(employee)}
    `
}

const scripts = `<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="./assets/script.js"></script>`

module.exports.newHTML = newHTML;
module.exports.addCard = addCard;
module.exports.writeHTML = writeHTML;
module.exports.scripts = scripts
