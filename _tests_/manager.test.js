const Manager = require("../lib/manager");

describe("Manager", () => {
    it('should take in name, id, email, and school when it is passed', () => {
        // arrange & act
        const employee_1 = new Manager('John', 234, 'john@yahoo.com',505);

        // assert
        expect(employee_1.name).toBe("John");
        expect(employee_1.id).toBe(234);
        expect(employee_1.email).toBe('john@yahoo.com');
        expect(employee_1.officeNumber).toBe(505);
    });

    it('should return proper Role title', () => {
        const employee_1 = new Manager("John",234,'john@yahoomail.com',505);
        const role = employee_1.getRole();
        expect(role).toBe('Manager');
    });

    it('should create and return an Manager school based on what is passed in Manager', () => {
        const employee_1 = new Manager("John",234,'john@yahoomail.com',505);
        const officeNumber = employee_1.getOfficeNumber();
        expect(officeNumber).toBe(505);
    });
})