// Returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
license==="MIT" ? licenseBadge = " ![MIT](https://img.shields.io/badge/License-MIT-yellow.svg)" :
license==="GNU GPL" ? licenseBadge = " ![GNU](https://img.shields.io/badge/License-GPLv3-blue.svg)" :
license==='ISC' ? licenseBadge = " ![ISC](https://img.shields.io/badge/License-ISC-blue.svg)":
licenseBadge==="";
return licenseBadge;
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
license==="MIT" ? licenseURL = "https://opensource.org/licenses/MIT" :
license==="GNU GPL" ? licenseURL = "https://www.gnu.org/licenses/gpl-3.0-standalone.html" :
license==='ISC'? licenseURL = "https://opensource.org/licenses/ISC" :
licenseURL = ''
return licenseURL;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
license ? 
licenseTxt = '## License\n'+renderLicenseBadge(license)+'\n'+renderLicenseLink(license) :
licenseTxt=""
return licenseTxt;
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
  ${data.description}\n
 ### User Story
  ${data.userstory}\n
### Acceptance Criteria
  ${data.acceptcrit}\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)

## Installation
- Github: ${data.deployGit}
- URL: ${data.deployURL}\n
## Usage
  ${data.usage}\n
## Credits
  ${data.collab}\n
${renderLicenseSection(data.license)}\n
## Tests
  ${data.tests}\n
## Questions
  Github: ${data.gitname}\n
  E-mail: ${data.email}`;
}

module.exports = generateMarkdown;
