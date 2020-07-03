const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);

    this.officeNumber = officeNumber;
  }
  getRole() {
    return this.constructor.name;
  }
  getOffice() {
    return this.officeNumber;
  }
}

module.exports = Manager,
inquirer.
prompt([
  {
    type: "input",
    name: "officeNumber",
    message: "Give us your office number.",
  },
]);
