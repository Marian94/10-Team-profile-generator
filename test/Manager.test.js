const Manager = require("../lib/Manager");

describe("Employee", () => {
  it(`Should accept numbers for the office telephone of the Employee`, () => {
    const id = "1213123321";
    const manager = new Manager();
    expect(manager.validateOfficeNumberResponse(id)).toBe(true);
  });

  it(`Should not accept accept numbers for the office telephone of the Employee`, () => {
    const id = "a";
    const manager = new Manager();
    expect(manager.validateOfficeNumberResponse(id)).toBe(false);
  });
});
