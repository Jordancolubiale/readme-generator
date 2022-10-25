// TODO: Include packages needed for this application
const fs = require ('fs')
const path = require ('path')
const inquirer = require ('inquirer')
const generateMarkdown = require ('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'text',
    message: 'Github username?',
    name: 'github',
},
{
    type: 'text',
    message: 'Email used for github?',
    name: 'email',
},

{
    type: 'text',
    message: 'Project Name?',
    name: 'title',
},
{
    type: 'text',
    message: 'Short Project Description.',
    name: 'description',
},
{
    type: 'input',
    message: 'What should be done to run tests?',
    name: 'test',
},
{
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
},
{
    type: 'input',
    message: 'Who else helped contribute to the project?',
    name: 'contributions',
},

{
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'GNU'],
    default: ["MIT"],
    validate: nameInput => {
        if (nameInput) {
            return true;
        } else {
            console.log('Please choose a license!');
            return false;
        }
    }
},

{
    type: 'text',
    message: 'What is your Github URL',
    name: 'gitHub',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(path.join(process.cwd(), fileName), data);
}

// init function in order to initialize inquirer
function init() {
    inquirer
        .prompt(questions)
        .then(responses => {writeToFile('README.md' ,generateMarkdown({...responses}));
});}
// Function call to initialize app
init();
