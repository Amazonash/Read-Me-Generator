// TODO: Include packages needed for this application
const inquirer=require("inquirer")
const generatemarkdown=require("./utils/generateMarkdown")
const fs= require("fs")
// TODO: Create an array of questions for user input
const questions = [
    {
type:"input",
name:"email",
message:"what is your email?"
    },
    {
type:"input",
name:"title",
message:"what is your projects title?"    
    },
    {
type:"input",
name:"description",
message:"what is your projects description?"
    },
    {
        type:"input",
        name:"installation",
        message:"how do you install dependencies?"
            },
    {
        type:"input",
        name:"usage",
        message:"what is your project used for?"
    },
    {
        type:"input",
        name:"contributing",
        message:"how should a user contribute?"
    },
    {
        type:"input",
        name:"git",
        message:"what`s your git user name?"   
    },
    {
        type:"input",
        name:"testing",
        message:"how could we test this repo?"
    },
    {
        type:"list",
        name:"license",
        message:"what kind of license do you have?",
        choices: ["MIT","None"]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {  
    fs.writeFile(fileName,data,function(err) {
        console.log(err)
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
     console.log(data)
     var markdown=generatemarkdown(data) 
     writeToFile("README.md",markdown)
    })
}

// Function call to initialize app
init();
