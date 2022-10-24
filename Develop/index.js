// TODO: Include packages needed for this application

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
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};
// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
    .then((answers) => {
    }

// Function call to initialize app
init();
