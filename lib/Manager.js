const inquirer = require("inquirer");

const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
    this.role = "Manager";
  }

  validateOfficeNumberResponse = (val) => /\d+/gi.test(val);

  getOfficeNumber() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "managerNumber",
          message: "What is your office number?",
          validate: (val) => /\d+/gi.test(val),
        },
      ])
      .then((val) => {
        this.setOfficeNumber(val.managerNumber);
      });
  }
  setOfficeNumber(value) {
    this.officeNumber = value;
  }
}
module.exports = Manager;
