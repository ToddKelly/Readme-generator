//Packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
//Array of questions for user input
const questions = [

{type: "Input",
message: "What is your project title",
name: "title",
},

{type: "input",
message: "Please provide a description of your project",
name: "description",
},

{type: "input",
message: "Table of Contents",
name: "Table of Contents",
},

{type: "input",
message: "Please provide the installation instructions to run this application",
name: "install"
},

{type: "list",
message: "Which license would you like to use",
name: "license",
Choices: [
"none",
"MIT",
"Apache",
"Ms-PL",
"EPL",
"BSD",
],
},

{type: "input",
message:"Please provide how you will be using this application",
name: "usage",
},

{type: "input",
message: "Who contributed to this application",
name: "contributors",
},

{type: "input",
message: "What commands are needed to test the application",
name: "test",
},

{type: "input",
message: "Please provide an email address",
name: "email",
},

{type: "input",
message: "please provide a GitHub username",
name: "username",
},

];

//Function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    console.log(fileName);
    console.log(data);
    if (error) {
        return  console.log(error)
    }
else 
{
    console.log("README sucessfully created").then (function(answers) {
    let template = generateMarkdown(answers)
    writeToFile("README.md", template)})
    console.log (data),
}


// Function call to initialize app
init();
