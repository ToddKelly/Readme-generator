//Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
const { clear } = require("console");

const licenses = ["none", "MIT", "Apache", "Ms-PL", "EPL", "BSD"]

//Array of questions for user input
const questions = [

{type: "input",
message: "What is your project title",
name: "title",
},

{type: "input",
message: "Please provide a description of your project",
name: "description",
},

{type: "input",
message: "Table of Contents",
name: "table of Contents",
},

{type: "input",
message: "Please provide the installation instructions to run this application",
name: "installation"
},

{type: "list",
message: "Which license would you like to use",
name: "licenses",
choices: licenses,
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

// Function to write README file
function writeToFile(fileName, data) { 
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
console.log("README Created")
}

// Function to initialize app
function init() {

inquirer.prompt(questions)
// .then(function(answers){
    .then((answers)=>{
    let template =  generateMarkdown(answers);
    console.log(template)
    writeToFile('README.md', template );
    

})
}  

// Function call to initialize app
init()
