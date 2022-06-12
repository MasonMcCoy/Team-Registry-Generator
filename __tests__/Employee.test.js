const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should return a class containing 'name', 'id', and 'email' properties", () => {
            const employee = new Employee();

            expect("name" && "id" && "email" in employee).toEqual(true);
        })

        it("should set 'name', 'id', and 'email' when created", () => {
            const name = 'Tommy Salami';
            const id = 1;
            const email = 'tsalami@hotmail.net';

            const employee = new Employee(name, id, email);

            expect(employee.name).toBe(name);
            expect(employee.id).toBe(id);
            expect(employee.email).toBe(email);
        })
    })

    describe("getName", () => {
        it("should return the provided employee name", () => {
            const employee = new Employee("Tommy Salami", 1, "tsalami@hotmail.net");

            expect(employee.getName()).toBe("Tommy Salami");
        })
    })

    describe("getId", () => {
        it("should return the provided employee ID", () => {
            const employee = new Employee("Tommy Salami", 1, "tsalami@hotmail.net");

            expect(employee.getId()).toBe(1);
        })
    })

    describe("getEmail", () => {
        it("should return the provided employee email", () => {
            const employee = new Employee("Tommy Salami", 1, "tsalami@hotmail.net");

            expect(employee.getEmail()).toBe("tsalami@hotmail.net");
        })
    })

    describe("getRole", () => {
        it("should return 'Employee'", () => {
            const employee = new Employee();

            expect(employee.getRole()).toBe("Employee");
        })
    })
})