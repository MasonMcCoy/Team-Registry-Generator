const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should inherit from the Employee class", () => {
            const engineer = new Engineer();

            expect(engineer.prototype instanceof Employee).toBe(true);
        })

        it("should return a class containing an 'gitHub' property", () => {
            const engineer = new Engineer();

            expect("gitHub" in engineer).toEqual(true);
        })
    })

    describe("getGitHub", () => {
        it("should return the provided engineer's GitHub username", () => {
            const engineer = new Engineer("Benny Hana", 2, "bhana@aol.gov", "BennyHana");

            expect(engineer.getGitHub()).toHaveReturnedWith("github.com/BennyHana");
        })
    })

    describe("getRole", () => {
        it("should return 'Engineer'", () => {
            const engineer = new Engineer();

            expect(engineer.getRole()).toHaveReturnedWith("Engineer");
        })
    })
})