//External Package
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require('util');
const generateReadMe = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
function userQ(){
    return inquirer.prompt([
    {
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
        choices: ["Apache", "MIT", "MPL2.0", "GPL 3.0"],
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
    }
    ])
    // {
    //     type: "input",
    //     message: "Any question please message us at",
    //     name: "question"
    // }
    // ]).then(function(data){
    //     console.log(data);
        // let readMe = generateReadMe(data);
        // //test
        // // console.log(readMe);

        // writeFileAsync("myREADME.md", readMe)
        //     err => console.log(("Success!"));
    // })
};
userQ()
    .then(function(data){
        if (data.license === "Apache"){
            data.icon = "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
        }
        if (data.license === "MIT"){
            data.icon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        if (data.license === "MPL2.0"){
            data.icon = "[![License: MPL2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        }
        if (data.license === "GPL 3.0"){
            data.icon = "[![License: GPL 3.0](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
        }
        const readMe = generateReadMe(data)

        return writeFileAsync("myREADME.md", readMe)
    })
    .then(function (){
        console.log("Success");
    })

