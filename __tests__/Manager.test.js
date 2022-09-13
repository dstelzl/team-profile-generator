const Manager = require("../lib/Manager");

describe("Manager", () => {
    it('should return a name when prompted for a name',
    () => {
        const manager = new Manager("DeeAnn", 4, "dee@ann.com", "123");
        expect(manager.getName()).toEqual("DeeAnn");
    })
    
    it('should return a number when prompted for an ID',
    () => {
        const manager = new Manager("DeeAnn", 4, "dee@ann.com", "123");
        expect(manager.getId()).toEqual(4);
    })
    it('should return an email address when prompted for an email',
    () => {
        const manager = new Manager("DeeAnn", 4, "dee@ann.com", "123");
        expect(manager.getEmail()).toEqual("dee@ann.com");
    })
    it('should return a name when prompted for a name',
    () => {
        const manager = new Manager("DeeAnn", 4, "dee@ann.com", "123");
        expect(manager.getOffice()).toEqual("123");
    })
});

