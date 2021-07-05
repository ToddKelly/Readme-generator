//Packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
const licenses = ["none", "MIT", "Apache", "Ms-PL", "EPL", "BSD"]
//Array of questions for user input
const questions = [

{type: "Input",
message: "What is your project title",
name: "Title",
},

{type: "input",
message: "Please provide a description of your project",
name: "Description",
},

{type: "input",
message: "Table of Contents",
name: "Table of Contents",
},

{type: "input",
message: "Please provide the installation instructions to run this application",
name: "Installation"
},

{type: "list",
message: "Which license would you like to use",
name: "Licenses",
choices: licenses,
},

{type: "input",
message:"Please provide how you will be using this application",
name: "Usage",
},

{type: "input",
message: "Who contributed to this application",
name: "Contributors",
},

{type: "input",
message: "What commands are needed to test the application",
name: "test",
},

{type: "input",
message: "Please provide an email address",
name: "Email",
},

{type: "input",
message: "please provide a GitHub username",
name: "Username",
},

];

//Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
        console.log('README Created')
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
   
.then (function(answers) {
    let template = generateMarkdown(answers)
    writeToFile("README.md", template)})

    {}}

// Function call to initialize app
init()
