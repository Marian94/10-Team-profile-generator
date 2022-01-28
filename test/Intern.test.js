const Intern = require("../lib/Intern");

describe("Intern", () => {
  it(`Should accept the name of the School`, () => {
    const school = "Tecnologico de monterrey";
    const intern = new Intern();
    expect(intern.validateSchoolResponse(school)).toBe(true);
  });

  it(`Should not accept blank space as name of the School`, () => {
    const school = "";
    const intern = new Intern();
    expect(intern.validateSchoolResponse(school)).toBe(false);
  });

  it(`Should not accept incorrect characters name of the School`, () => {
    const school = "#$#$%#$%@#";
    const intern = new Intern();
    expect(intern.validateSchoolResponse(school)).toBe(false);
  });
});
