const inquirer = require("inquirer");

const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }
  validateGithubResponse = (val) => /^(ftp|http|https):\/\/[^ "]+$/gi.test(val);

  getGithub() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "engineerGithub",
          message: "What is your github profile link?",
          validate: (val) => /^(ftp|http|https):\/\/[^ "]+$/gi.test(val),
        },
      ])
      .then((val) => {
        this.setGithub(val.engineerGithub);
      });
  }
  setGithub(value) {
    this.github = value;
  }
}
module.exports = Engineer;
