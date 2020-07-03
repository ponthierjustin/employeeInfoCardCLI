const Employee = require("./Employee");

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
const managerQuestions = [
  {
    type: "input",
    name: "officeNumber",
    message: "Give us your office number.",
    
  },
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is your employee id number?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address",
  },
];

module.exports = {
  Manager,
  managerQuestions,
};
