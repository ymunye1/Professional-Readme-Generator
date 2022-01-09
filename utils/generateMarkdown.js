// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
switch (license) {
  case 'MIT':
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)"
    break;
  case 'Apache 2.0':
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue)](https://opensource.org/licenses/Apache-2.0)"
    break;
  case 'ISC':
    return "[![License: MIT](https://img.shields.io/badge/License-ISC-orange)] (https://opensource.org/licenses/ISC)"
    break;
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

switch (license) {
  case 'MIT':
    return "(https://opensource.org/licenses/MIT)"
    break;
  case 'APACHE 2.0':
    return "(https://opensource.org/licenses/Apache-2.0)"
    break;
  case 'ISC':
    return "(https://opensource.org/licenses/ISC)"
    break;
  
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
