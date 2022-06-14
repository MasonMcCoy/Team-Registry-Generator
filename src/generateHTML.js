const fs = require("fs");

// Write to HTML file
function createFile(data) {
    fs.writeFile("./dist/index.html", data, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

function writeHTML(employee) {
    return `
    <h1>My Team</h1>
    ${employee.getName()}
    ${employee.getRole()}
    ${employee.getId()}
    ${employee.getEmail()}
    `
}

module.exports.createFile = createFile;
module.exports.writeHTML = writeHTML;
