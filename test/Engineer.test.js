const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it(`Should accept the github link of the Employee`, () => {
    const name = "https://github.com/marian94";
    const engineer = new Engineer();
    expect(engineer.validateGithubResponse(name)).toBe(true);
  });

  it(`Should not accept an incorrect github link of the Employee`, () => {
    const name = "github.com/marian94";
    const engineer = new Engineer();
    expect(engineer.validateGithubResponse(name)).toBe(false);
  });
});
