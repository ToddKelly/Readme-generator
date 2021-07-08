// TODO: Create a function that returns a license badge based on which license is passed in
const inquirer = require("inquirer");

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "[None]"){
    return "";
  }else{
    switch (license) {
      case "Apache 2.0":
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;

      case "GNU GPL v3":
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;

      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        break;

      case "Mozilla Public License 2.0":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
        break;
      
      case "[None]":
        return "";
        
      default:
        break;
    }
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "[None]"){
    return "";
  }else{
    switch (license) {
      case "Apache 2.0":
        return 'https://choosealicense.com/licenses/apache-2.0/';
        break;
  
      case "GNU GPL v3":
        return "https://choosealicense.com/licenses/gpl-3.0/";
        break;
  
      case "MIT":
        return "https://choosealicense.com/licenses/mit/";
        break;
  
      case "Mozilla Public License 2.0":
        return "https://choosealicense.com/licenses/mpl-2.0/";
        break;
      default:
        break;
    }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license === "[None]"){
    return "";
  }else{
    
    return `### License: <br />  ${renderLicenseBadge(license)} <br /> This application is developed and distributed under the ${license} license. More information on this license can be found by clicking [here](${renderLicenseLink(license)}).`;
    
  }
}

// Creates a function to generate markdown for README
function generateMarkdown(data) {

  return `


  
  ## Title of Project:
  ${data.title}
  ## DESCRIPTION
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [License](#license)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  ## Installation
  ${data.installation}
  ## License
  ${renderLicenseBadge(data.license)}
  
  ${renderLicenseLink(data.license)}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contributors}
  ## Test
  ${data.test}
 ## Questions
 If you have any questions or concerns please contact me:
 - Email: <${data.email}>!
 
 - Github: [Github Profile](https://github.com/${data.username})!
`
}

module.exports = generateMarkdown;


