const inquirer = require("inquirer");
const Manager = require("./lib/manager");

inquirer
    .prompt([
        {
            type: "input",
            message: "Team Mananger Name: ",
            name: "managerName"
        },
        {
            type: "input",
            message: "Manager Employee ID: ",
            name: "managerID"
        },
        {
            type: "input",
            message: "Manager Email: ",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "Office ID: ",
            name: "officeID"
        }
    ])
    .then((response) => {
        console.log(new Manager(response.managerName, response.managerID, response.managerEmail, response.officeID));
        
        inquirer
            .prompt([
                {
                    type: "list",
                    message: "Choose an employee to add: ",
                    choices: [
                        "Engineer",
                        "Intern"
                    ],
                    name: "employeeType"
                }
            ])
            .then((response) =>
                console.log(response.employeeType))
    })