// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "projectName",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "projectDescription",
    message: "Please write a short description of the project.",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your github username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "list",
    name: "licenseProject",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "installDependencies",
    message: "What command should be run to install dependencies?",
  },
  {
    type: "input",
    name: "testProject",
    message: "Please provide test instructions:",
  },
  {
    type: "input",
    name: "usageProject",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributionProject",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((userInput) =>
      writeToFile("./readme-folder/README.md", generateMarkdown(userInput))
    )
    .then(() => console.log("README successfully created"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
