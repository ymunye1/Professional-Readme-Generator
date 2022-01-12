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
  case 'NONE':
    return ""
    break;
}
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

switch (license) {
  case 'NONE':
    return "(https://opensource.org/licenses/category)"
    break;
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
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}
        
        
  ## Table of Contents
  
   [Installation](#installation)
   [Usage](#usage)
   [License](#license)
   [Contribution](#contribute)
   [Test](#test)
   [Questions](#questions)
        
        
  ## Installation
        
  To install dependencies use the following command:     
  ${data.install}
        
  ## Usage 
  ${data.usage}
        
  ## License This project is licensed under ${data.license}, see ${renderLicenseLink(data.license)} for more info.
        
  ## Contribution
  ${data.credits}
        
  ## Test
  To run test, use the following command:
  ${data.test}
    
  ## Questions  
  
  My GitHub username is [${data.github}](https://github.com/${data.github}).
  

  If you have any questions you can reach me at ${data.email}       
`;
}

module.exports = generateMarkdown;