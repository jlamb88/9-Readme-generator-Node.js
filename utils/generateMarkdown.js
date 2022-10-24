// const data = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
license==="MIT" ? licenseBadge = " ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" :
license==="GNU GPL" ? licenseBadge = " ![GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)" :
license==='ISC' ? licenseBadge = " ![ISC](https://img.shields.io/badge/License-ISC-blue.svg)":
licenseBadge==="";
return licenseBadge;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
license==="MIT" ? licenseURL = "https://opensource.org/licenses/MIT" :
license==="GNU GPL" ? licenseURL = "https://www.gnu.org/licenses/gpl-3.0-standalone.html" :
license==='ISC'? licenseURL = "https://opensource.org/licenses/ISC" :
licenseURL = ''
return licenseURL;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
licenseTxt = '## License\n'+renderLicenseBadge(license)+'<br />'+renderLicenseLink(license)
return licenseTxt;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}
## Description
  ${data.description}\n
  
### User Story
  ${data.userstory}\n

### Acceptance Criteria
  ${data.acceptcrit}\n
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- Github: ${data.deployGit}
- URL: ${data.deployURL}

## Usage
  ${data.usage}

## Credits
  ${data.collab}
  
${renderLicenseSection(data.license)}
  
## Tests
  ${data.tests}

## Questions
  Github: ${data.gitname}\n
  E-mail: ${data.email}`;
}


module.exports = generateMarkdown;
