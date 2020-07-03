const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email,);
    this.github = github;
  }
  getRole() {
    return this.constructor.name;
  }
  getGithub() {
    return this.github;
  }
}

const engineerQuestions = [
  {
    type: "input",
    name: "github",
    message: "What is your github username?",
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
  Engineer,
  engineerQuestions,
}