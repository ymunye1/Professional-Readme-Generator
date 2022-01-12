// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input

// inquire
//  .prompt([
const questions = [
   
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is it being used for?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license will be used?',
        choices: ['MIT','ISC', 'APACHE 2.0', 'NONE']
    },
    {
        type: 'input',
        name: 'test',
        message: 'How to test?',
        default: `None`
    },
    {
        title: 'input',
        message: 'List of collaborators?',
        name: 'credits',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How to install dependecies?',
        default: 'npm i'
    },
]

{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?'
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
},

 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) {
            return console.log(`Error`)
        }else{
            console.log('Making a new README.md')
        }
    })
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        const readmeInfo = generateMarkdown(data);
        writeToFile('./utils/README.md', readmeInfo);
    })
   .catch(err => { console.log(err)});
}

// Function call to initialize app

init();