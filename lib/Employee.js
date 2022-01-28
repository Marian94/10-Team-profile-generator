const inquirer = require("inquirer");

class Employee {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = "Employee";
  }

  validateNameResponse = (val) => /^(?!\s*$)[-a-zA-Z_:,.\s]{1,100}$/.test(val);

  getName() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeName",
          message: "What is the name of the employee?",
          validate: (val) => /^(?!\s*$)[-a-zA-Z_:,.\s]{1,100}$/.test(val),
        },
      ])
      .then((val) => {
        this.setName(val.employeeName);
      });
  }

  setName(value) {
    this.name = value;
  }

  validateIdResponse = (val) => /\d+/gi.test(val);

  getId() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeId",
          message: "What is the id of the employee?",
          validate: (val) => /\d+/gi.test(val),
        },
      ])
      .then((val) => {
        this.setId(val.employeeId);
      });
  }

  setId(val) {
    this.id = val;
  }

  validateEmailResponse = (val) =>
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      val
    );

  getEmail() {
    return inquirer
      .prompt([
        {
          type: "input",
          name: "employeeEmail",
          message: "What is the email of the employee?",
          validate: (val) =>
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              val
            ),
        },
      ])
      .then((val) => {
        this.setEmail(val.employeeEmail);
      });
  }

  setEmail(val) {
    this.email = val;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;
