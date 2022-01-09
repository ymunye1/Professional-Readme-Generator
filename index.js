// TODO: Include packages needed for this application
const fs = require('fs');
const inquire = require('inquirer');
const generateMarkdown = require('generateMarkdown');
// TODO: Create an array of questions for user input

inquire
 .prompt([
    {
        type: 'input',
        name: 'Github:',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'Project:',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'Description:',
        message: 'Write a description of your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will be used?'
        choices: ['MIT','ISC', 'APACHE']
    },
    {
        type: 'input',
        name: 'install',
        message: 'How to install dependecies?'
        default: 'npm i'
    },
])
 .then(data =>{
     console.log(`Program started`)
 });
     


 
// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {
//     node index.js
// }

// // Function call to initialize app
// init();
