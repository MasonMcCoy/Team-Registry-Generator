const fs = require("fs");

function newHTML() {
    let header = `<h1>My Team</h1>` 

    fs.writeFile("./dist/index.html", header, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

// Write to HTML file
function addCard(data) {
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
        return `<p>GitHub: ${employee.getGithub()}</p>`;
    }
    if (employee.school) {
        return `<p>School: ${employee.getSchool()}</p>`;
    }
}

// Renders team member data to HTML
function writeHTML(employee) {
    return `
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    <p>ID: ${employee.getId()}</p>
    <p>Email: ${employee.getEmail()}</p>
    ${renderProperty(employee)}
    `
}

module.exports.newHTML = newHTML;
module.exports.addCard = addCard;
module.exports.writeHTML = writeHTML;
