const Employee = require("../lib/Employee");

describe("Employee", () => {
  it(`Should accept the name of the Employee`, () => {
    const name = "Mariana Gonzalez";
    const employee = new Employee();
    expect(employee.validateNameResponse(name)).toBe(true);
  });

  it(`Should not accept a blank space as the name of the Employee`, () => {
    const name = "";
    const employee = new Employee();
    expect(employee.validateNameResponse(name)).toBe(false);
  });

  it(`Should accept numbers for id of the Employee`, () => {
    const id = "1";
    const employee = new Employee();
    expect(employee.validateIdResponse(id)).toBe(true);
  });

  it(`Should not accept letters for id of the Employee`, () => {
    const id = "a";
    const employee = new Employee();
    expect(employee.validateIdResponse(id)).toBe(false);
  });

  it(`Should accept the email of the Employee`, () => {
    const email = "hola@hotmail.com";
    const employee = new Employee();
    expect(employee.validateEmailResponse(email)).toBe(true);
  });

  it(`Should not accept an invalid email of the Employee`, () => {
    const email = "hola@.com";
    const employee = new Employee();
    expect(employee.validateEmailResponse(email)).toBe(false);
  });
});
