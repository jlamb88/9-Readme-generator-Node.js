// const data = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
license==="MIT" ? licenseBadge = "MIT badge" :
license==="GNU GPL" ? licenseBadge = "https://img.shields.io/badge/License-GPLv3-blue.svg" :
licenseBadge = "https://img.shields.io/badge/License-ISC-blue.svg";
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
license==="MIT" ? licenseURL = "https://spdx.org/licenses/MIT.html" :
license==="GNU GPL" ? licenseURL = "https://www.gnu.org/licenses/gpl-3.0-standalone.html" :
licenseURL = "https://opensource.org/licenses/ISC"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
licenseTxt = {body: '##License<br>License:'+license+renderLicenseBadge(license)+renderLicenseLink(license)}
return licenseTxt;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
  ## Description
  ${data.description}

  User Story<br>
  ${data.userstory}<br>
  Acceptance Criteria<br>
  ${data.acceptcrit}<br>
  ## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
<br>
  ## Deployment
  ${data.deploy}

  ## Usage
  ${data.usage}

  ## Collaborators
  ${data.collab}
  `
  +renderLicenseSection(`${data.license}`)+
  `
  ## Tests
  ${data.tests}

  ## Contact
  Github: 
  ${data.gitname}<br>
  E-mail: 
  ${data.email}`;
}


module.exports = generateMarkdown;
