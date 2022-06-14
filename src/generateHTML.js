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

// Renders team member data to HTML
function writeHTML(employee) {
    return `
    <h2>${employee.getName()}</h2>
    <h3>${employee.getRole()}</h3>
    <p>${employee.getId()}</p>
    <p>${employee.getEmail()}</p>
    `
}

module.exports.newHTML = newHTML;
module.exports.addCard = addCard;
module.exports.writeHTML = writeHTML;
