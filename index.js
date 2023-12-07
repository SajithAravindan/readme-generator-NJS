//External packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

//Internal Files
const generateMarkdown = require('./utils/generateMarkdown.js');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: '**What is the Title of your project',//Title Question
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid Title is required.");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "**Write a Description of your project.",//Description Question
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',//Installation Question
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',//Usage Question
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',//Contributing Question
        message: "If applicable, provide guidelines on how other developers can Contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',//Tests Question
        message: "If applicable, provide any Tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'input',//Credits Question
        message: "If applicable, list any third-party assets that you have used and require attribution.",
        name: 'credits'
    },
    {
        type: 'list',//License Question
        message: "**Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'input',//GitHub username Question
        message: " **What is your GitHub username?",
        name: 'username',
        //default: 'SajithAravindan',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
                return false;
            }
            return true;
        }
    },
    {
        type: 'input',//Email Question
        message: "What is your email address?",
        name: 'email',
        validate: function (answer) {
            if (answer.length > 1) {
                // Regex mail check (return true if valid mail)
                if (/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(answer))
                    return true;
                else {
                    console.log('Please enter a valid email id.')
                    return false;
                }               
            }
            return true;
        }
    }
];

//Function to start the App
var startProcess = function () {
    inquirer
        .prompt(questions)
        .then((response) => {            
            const readMeBody = generateMarkdown(response);//Call to create the body content 
            writeToFile('Sample-Readme.md', readMeBody);
        }
        );
}

// Function to create the README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }
        console.log("Success! Your README.md file has been generated")
    });
}

// Function to initialize app
function init() {
    startProcess();
}
// Function call to initialize app
init();
