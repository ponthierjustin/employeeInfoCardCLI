// Main questions array to pull for switch cases.
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

module.exports = { managerQuestions, internQuestions, engineerQuestions };
