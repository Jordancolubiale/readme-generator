// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [ {
    type: 'text',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'text',
    message: 'Where are you from?',
    name: 'location',
  },
  {
    type: 'text',
    message: 'What is your bio?',
    name: 'bio',
  },
  {
    type: 'text',
    message: 'What is your LinkedIn URL',
    name: 'linkedIn',
  },
  {
    type: 'text',
    message: 'What is your Github URL',
    name: 'gitHub',
  },
];

// TODO: Create a function to write README file
function writeToFile(README, README, function(err)) { 
    err? console.log(err) : console.log("Go check that README out!")
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
