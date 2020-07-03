const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questions = require("./lib/questions");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employee = [];
//function to write file to path determined by parameters
function writeToFile(path, response) {
  fs.writeFile(path, render(response), "utf-8", function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("successful");
    }
  });
}

// built it into a function to call it again
function getInfo() {
  //prompt to ask role of employee and ask the apporpriate questions
  const askRole = inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Pick your employee role",
        choices: ["Manager", "Engineer", "Intern"],
      },
    ])
    .then((response) => {
      {
        //switch to role questions depending on the response of the user
        switch (response.role) {
          case "Manager":
            inquirer.prompt(questions.managerQuestions).then((response) => {
              const newManager = new Manager(
                response.name,
                response.id,
                response.email,
                response.officeNumber
              );

              employee.push(newManager);
              addAnother();
              render(employee);
              writeToFile(outputPath, employee);
            });
            break;
          case "Engineer":
            inquirer.prompt(questions.engineerQuestions).then((response) => {
              const newEngineer = new Engineer(
                response.name,
                response.id,
                response.email,
                response.github
              );

              employee.push(newEngineer);
              addAnother();
              render(employee);
              writeToFile(outputPath, employee);
            });
            break;
          case "Intern":
            inquirer.prompt(questions.internQuestions).then((response) => {
              const newIntern = new Intern(
                response.name,
                response.id,
                response.email,
                response.school
              );

              employee.push(newIntern);
              addAnother();
              render(employee);
              writeToFile(outputPath, employee);
            });
            break;
        }
      }
    });
  // Asking user if they would like to add more employees
  function addAnother() {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "choice",
          message: "Would you like to add another employee?",
        },
      ])
      .then((response) => {
        if (response.choice) {
          getInfo();
        } else {
          stop();
        }
      });
  }
  //function stops function and continues rendering
  function stop() {
    process.exit();
  }
}
//call main function
getInfo();
