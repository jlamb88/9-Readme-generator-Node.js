// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const genMD = require('./utils/generateMarkdown');
const { clear } = require('console');

// Array of questions for user input
const questions = [
    {
     name: 'title',
     message: 'What is the name of your project?',
    },
    {
    name: 'description',
    message: 'What is the description of the project?',}, 
    {
    name: 'userstory',
    message: 'What is your user story?',}, 
    {
    name: 'acceptcrit',
    message: 'What are your acceptance criteria?',},
    {
    name: 'deployGit',
    message: 'What is the deployment Github?',},
    {
    name:'deployURL',
    message: 'What is the deployed URL?'
    },
    {
    name: 'usage',
    message: 'What are the usage intructions?',},
    {
    name: 'collab',
    message: 'Are there any collaborators or credits?',},
    {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT','GNU GPL','ISC'],},
    {
    name: 'tests',
    message: 'Describe the tests for this project',},
    {
    name: 'gitname',
    message: 'What is your GitHub username?',},
    {
    name: 'email',
    message: 'What is your email address?',}];

    
// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, ()=>
    console.log (fileName +' markdown file generated with your inquirer input'));
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        fileFromTitle = `${answers.title}`.replaceAll(' ','_')
        writeToFile(fileFromTitle,genMD(answers))
    }
    )
}

// Function call to initialize app
init();

