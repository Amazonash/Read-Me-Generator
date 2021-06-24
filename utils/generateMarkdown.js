// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} 
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)
  ## Description
  ${data.description}

  ## Table of contents
  
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Installation](#installation)
  * [Testing](#testing)
  * [License](#license)
  * [Question](#question)
  
  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Installation
  to install dependencies:
  ${data.installation}

  ## Testing
  ${data.testing}

  ## License
  ${data.license}
  ![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

 ## Questions
 Email me at ${data.email} or Git Hub ${data.git}
  

`;
}

module.exports = generateMarkdown;
