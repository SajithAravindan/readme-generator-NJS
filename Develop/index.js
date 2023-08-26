//External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//Internal Files
const {generateMarkdown, getUserGitDetails} = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the Title of your project',
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a Description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can Contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any Tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'input',
        message: "If applicable, list any third-party assets that you have used and require attribution.",
        name: 'credits'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'username',
        default: 'SajithAravindan',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
        validate: function (answer) {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer);
        }
    }
];

var startProcess = function () {
    inquirer
        .prompt(questions)
        .then((response) => {
            // const userGitInfo = getUserGitDetails(response.username);
            // console.log(userGitInfo);
            const readMeBody = generateMarkdown(response);
            writeToFile('Sample-Readme.md', readMeBody);
        }
        );   
}

//Function to create the Readme file
var fileCreateProc = userInputData => {
    //test
}

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

// TODO: Create a function to initialize app
function init() {
    startProcess();
}

// Function call to initialize app
init();
