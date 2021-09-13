const EmployeeCard = require("../lib/employee");

describe("EmployeeCard", () => {
    it('should take in name, id, and email when it is passed', () => {
        // arrange & act
        const employee_1 = new EmployeeCard('John', 234, 'john@yahoo.com');

        // assert
        expect(employee_1.name).toBe("John");
        expect(employee_1.id).toBe(234);
        expect(employee_1.email).toBe('john@yahoo.com');
    });

    it('should create an employee name based on what is passed in EmployeeCard', () => {
        // arrange
        const employee_1 = new EmployeeCard("John",234,'john@yahoomail.com');

        // act
        const name = employee_1.getName();
       
        // assert
        expect(name).toBe("John");
    });

    it('should create an employee id based on what is passed in EmployeeCard', () => {
        const employee_1 = new EmployeeCard("John",234,'john@yahoomail.com');
        const id = employee_1.getId();
        expect(id).toBe(234);
    });

    it('should create an employee email based on what is passed in EmployeeCard', () => {
        const employee_1 = new EmployeeCard("John",234,'john@yahoomail.com');
        const email = employee_1.getEmail();
        expect(email).toBe('john@yahoomail.com');
    });

    it('should return proper Role title', () => {
        const employee_1 = new EmployeeCard("John",234,'john@yahoomail.com');
        const role = employee_1.getRole();
        expect(role).toBe('Employee');
    });
})