const Intern = require("../lib/intern");

describe("Intern", () => {
    it('should take in name, id, email, and school when it is passed', () => {
        // arrange & act
        const employee_1 = new Intern('John', 234, 'john@yahoo.com','SMU');

        // assert
        expect(employee_1.name).toBe("John");
        expect(employee_1.id).toBe(234);
        expect(employee_1.email).toBe('john@yahoo.com');
        expect(employee_1.school).toBe('SMU');
    });

    it('should return proper Role title', () => {
        const employee_1 = new Intern("John",234,'john@yahoomail.com','SMU');
        const role = employee_1.getRole();
        expect(role).toBe('Intern');
    });

    it('should create and return an Intern school based on what is passed in Intern', () => {
        const employee_1 = new Intern("John",234,'john@yahoomail.com','SMU');
        const schoolName = employee_1.getSchool();
        expect(schoolName).toBe('SMU');
    });
})