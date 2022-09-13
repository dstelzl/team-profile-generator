
const Employee = require("../lib/Employee");

describe("Employee", () => {
it('should return a name when prompted for a name',
() => {
    const employee = new Employee("DeeAnn", 4, "dee@ann.com");
    expect(employee.getName()).toEqual("DeeAnn");
})

it('should return a number when prompted for an ID',
() => {
    const employee = new Employee("DeeAnn", 4, "dee@ann.com");
    expect(employee.getId()).toEqual(4);
})
it('should return an email address when prompted for an email',
() => {
    const employee = new Employee("DeeAnn", 4, "dee@ann.com");
    expect(employee.getEmail()).toEqual("dee@ann.com");
})

});
