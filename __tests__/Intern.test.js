const Intern = require("../lib/intern");
const Employee = require("../lib/employee");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should inherit from the Employee class", () => {
            const intern = new Intern();

            expect(intern.prototype instanceof Employee).toBe(true);
        })

        it("should return a class containing a 'school' property", () => {
            const intern = new Intern();

            expect("school" in intern).toEqual(true);
        })
    })

    describe("getSchool", () => {
        it("should return the provided intern's school", () => {
            const intern = new Intern("Hannah Banana", 3, "hbanana@yahoo.io", "Hogwarts School of Wizardy");

            expect(intern.getSchool()).toHaveReturnedWith("Hogwarts School of Wizardy");
        })
    })

    describe("getRole", () => {
        it("should return 'Intern'", () => {
            const intern = new Intern();

            expect(intern.getRole()).toHaveReturnedWith("Intern");
        })
    })
})