//Creates a function that returns a license badge based on which license is passed in
const inquirer = require("inquirer");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
 return `[![license:](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/${license})`

}

// Creates a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

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
 - Email: [${data.email}](mailto:donkeyskates21@gmail.com)
 
 - Github: [${data.username}](https://github.com/ToddKelly)
`
}

module.exports = generateMarkdown;


