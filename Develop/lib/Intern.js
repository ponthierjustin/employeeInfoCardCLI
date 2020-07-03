const Employee = require("./Employee");

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
const internQuestions = [
  {
    type: "input",
    name: "school",
    message: "What school do you attend",
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
  Intern,
  internQuestions,
};
