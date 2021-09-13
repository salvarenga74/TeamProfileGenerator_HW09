const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it('should take in name, id, and email when it is passed', () => {
        // arrange & act
        const employee_1 = new Engineer('John', 234, 'john@yahoo.com','john316');

        // assert
        expect(employee_1.name).toBe("John");
        expect(employee_1.id).toBe(234);
        expect(employee_1.email).toBe('john@yahoo.com');
        expect(employee_1.github).toBe('john316');
    });

    it('should return proper Role title', () => {
        const employee_1 = new Engineer("John",234,'john@yahoomail.com','john316');
        const role = employee_1.getRole();
        expect(role).toBe('Engineer');
    });

    it('should create and return an engineer Github username based on what is passed in Engineer', () => {
        const employee_1 = new Engineer("John",234,'john@yahoomail.com','john316');
        const githubUsername = employee_1.getGithub();
        expect(githubUsername).toBe('john316');
    });
})