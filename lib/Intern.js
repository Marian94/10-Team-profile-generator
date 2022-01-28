const inquirer = require("inquirer");

const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    this.role = "Intern";
  }

  validateSchoolResponse = (val) =>
    /^(?!\s*$)[-a-zA-Z0-9_:,.\s]{1,100}$/.test(val);

  getSchool() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "internSchool",
          message: "What is the school of the employee?",
          validate: (val) => /^(?!\s*$)[-a-zA-Z0-9_:,.\s]{1,100}$/.test(val),
        },
      ])
      .then((val) => {
        this.setSchool(val.internSchool);
      });
  }

  setSchool(value) {
    this.school = value;
  }
}
module.exports = Intern;
