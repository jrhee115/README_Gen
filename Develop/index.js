//External Package
const inquirer = require ('inquirer');
const fs = require ('fs');
const until = require('util');

const writeFileAsync = until.promisify(fs.writeFile);

// array of questions for user
const userQ = () => {
    inquirer.prompt([{
        type: "input",
        message: "What is the project's name?",
        name: "title"
    },
    {
        type: "input",
        message: "Please add a small description about the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Please indicate the steps you took for the Installation.",
        name: "installation"
    },
    {
        type: "input",
        message: "Please provide the usage of your project.",
        name: "usage"
    },
    {
        type: "list",
        message: "Please choose the current license you are using.",
        choices: ["Apache License 2.0", "MIT", "ISC", "Mozilla Pubilc License", "Eclipse Public License"],
        name: "license"
    },
    {
        type: "input",
        message: "If this was a group project please indicate how others contributed.",
        name: "contribution"
    },
    {
        type: "input",
        message: "If you tested your project please provide any test resutls",
        name: "test"
    },
    {
        type: "input",
        message: "Any question please message --",
        name: "question"
    }
    ]).then(function(data){
        console.log(data);
        let readMe = generateReadMe(data);
        //test
        // console.log(readMe);

        writeFileAsync("myREADME.md", readMe)
            err => console.log(("Success!"));
    })
};
// function to write README file
function generateReadMe(data) {
    let ReadMeString = `
    ## Project Title
    ${data.title}
    # Description
    ${data.description}
    # Installation
    ${data.installation}
    # Usage
    ${data.usage}
    # License
    ${data.license}
    # Contribution
    ${data.contribution}
    # Test
    ${data.test}
    # Quesiton
    ${data.question}
    `
    return (ReadMeString);
}
userQ();

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
