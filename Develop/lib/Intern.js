const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return this.constructor.name;
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern
inquirer.
prompt([
  {
    type: "input",
    name: "school",
    message: "What school do you attend?",
  },
]);
