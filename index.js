// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const genMD = require('./utils/generateMarkdown');
// const { title } = require('process');

// TODO: Create an array of questions for user input
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
    name: 'deploy',
    message: 'What are the deployment features?',},
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

inquirer.prompt(questions)
.then((data) => {
    console.log(data);
    return data;

})

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

fs.appendFile(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
fs.writeToFile('./test/readMe.md')
}

// Function call to initialize app
init();

writeToFile('./test/readMe.md',genMD);
