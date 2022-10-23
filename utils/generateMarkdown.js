const data = require('../index.js')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
license==="MIT" ? licenseBadge = "MIT badge" :
license==="GNU GPL" ? licenseBadge = "UFC badge" :
licenseBadge = "thirdOne"
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
license==="MIT" ? licenseURL = "MIT URL" :
license==="GNU GPL" ? licenseURL = "UFC URL" :
licenseURL = "thirdOne"
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
licenseTxt = {body: '##License<br>License:'+license+renderLicenseBadge(license)+renderLicenseLink(license)}
return licenseTxt;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  return `# ${data.title}<br>
  ##Description<br>
  ${data.description}<br>
  ${data.userstory}<br>
  ${data.acceptcrit}<br>
  ##Deployment<br>
  ${data.deploy}<br>
  ##Usage<br>
  ${data.usage}<br>
  ##Collaborators<br>
  ${data.collab}<br>` +
  renderLicenseSection(`${data.license}`) +
  `<br>##Tests<br>
  ${data.tests}<br>
  ##Contact<br>
  ${data.gitname}<br>
  ${data.email}`;
}

module.exports = generateMarkdown;
