const inquirer = require("inquirer");
const htmlGen = require("./src/generateHTML");

const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

function newEmployee(employeeType) {
    if (employeeType === "Engineer") {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Engineer Name:",
                    name: "engName"
                },
                {
                    type: "input",
                    message: "Engineer Employee ID:",
                    name: "engID"
                },
                {
                    type: "input",
                    message: "Engineer Email:",
                    name: "engEmail"
                },
                {
                    type: "input",
                    message: "GitHub Username:",
                    name: "github"
                }
            ])
            .then((r) => {
                let engineer = new Engineer(r.engName, r.engID, r.engEmail, r.github);
                htmlGen.addCard(htmlGen.writeHTML(engineer));

                renderMenu();
            })
    }
    if (employeeType === "Intern") {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Intern Name:",
                    name: "internName"
                },
                {
                    type: "input",
                    message: "Intern Employee ID:",
                    name: "internID"
                },
                {
                    type: "input",
                    message: "Intern Email:",
                    name: "internEmail"
                },
                {
                    type: "input",
                    message: "School:",
                    name: "school"
                }
            ])
            .then((r) => {
                let intern = new Intern(r.internName, r.internID, r.internEmail, r.school);
                htmlGen.addCard(htmlGen.writeHTML(intern));

                renderMenu();
            })
    }
}

function renderMenu() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Choose an employee to add:",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finish"
                ],
                name: "employeeType"
            }
        ])
        .then((response) => {
            if (response.employeeType === "Finish") {
                console.log("Team complete!");
            } else {
                newEmployee(response.employeeType);
            }
        })
}

inquirer
    .prompt([
        {
            type: "input",
            message: "Team Mananger Name:",
            name: "managerName"
        },
        {
            type: "input",
            message: "Manager Employee ID:",
            name: "managerID"
        },
        {
            type: "input",
            message: "Manager Email:",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Office Number:",
            name: "officeNumber"
        }
    ])
    .then((r) => {
        htmlGen.newHTML();

        let manager = new Manager(r.managerName, r.managerID, r.managerEmail, r.officeNumber);
        htmlGen.addCard(htmlGen.writeHTML(manager));
        
        renderMenu();
    })