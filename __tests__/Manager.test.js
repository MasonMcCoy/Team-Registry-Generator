const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should inherit from the Employee class", () => {
            const manager = new Manager();

            expect(manager.prototype instanceof Employee).toBe(true);
        })

        it("should return a class containing an 'officeNumber' property", () => {
            const manager = new Manager();

            expect("officeNumber" in manager).toEqual(true);
        })
    })

    describe("getRole", () => {
        it("should return 'Manager'", () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe("Manager");
        })
    })
})