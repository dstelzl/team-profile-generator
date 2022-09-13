const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    it('should return a name when prompted for a name',
    () => {
        const engineer = new Engineer("DeeAnn", 4, "dee@ann.com", "dsmith");
        expect(engineer.getName()).toEqual("DeeAnn");
    })
    
    it('should return a number when prompted for an ID',
    () => {
        const engineer = new Engineer("DeeAnn", 4, "dee@ann.com", "dsmith");
        expect(engineer.getId()).toEqual(4);
    })
    it('should return an email address when prompted for an email',
    () => {
        const engineer = new Engineer("DeeAnn", 4, "dee@ann.com", "dsmith");
        expect(engineer.getEmail()).toEqual("dee@ann.com");
    })
    it('should return a name when prompted for a name',
    () => {
        const engineer = new Engineer("DeeAnn", 4, "dee@ann.com", "dsmith");
        expect(engineer.getGithub()).toEqual("dsmith");
    })
});
