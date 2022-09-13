const Intern = require("../lib/Intern");

describe("Intern", () => {
    it('should return a name when prompted for a name',
    () => {
        const intern = new Intern("DeeAnn", 4, "dee@ann.com", "Clemson");
        expect(intern.getName()).toEqual("DeeAnn");
    })
    
    it('should return a number when prompted for an ID',
    () => {
        const intern = new Intern("DeeAnn", 4, "dee@ann.com", "Clemson");
        expect(intern.getId()).toEqual(4);
    })
    it('should return an email address when prompted for an email',
    () => {
        const intern = new Intern("DeeAnn", 4, "dee@ann.com", "Clemson");
        expect(intern.getEmail()).toEqual("dee@ann.com");
    })
    it('should return a school name when prompted for a school',
    () => {
        const intern = new Intern("DeeAnn", 4, "dee@ann.com", "Clemson");
        expect(intern.getSchool()).toEqual("Clemson");
    })
});
