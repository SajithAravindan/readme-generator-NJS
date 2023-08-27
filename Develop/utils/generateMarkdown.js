// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let LicenseBadge = `
//    [![License](https://img.shields.io/badge/license-${license}-green)](./LICENSE)
//   `
//   return LicenseBadge;
// }

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

var getUserGitDetails = userGitusernme => {

  let apiUrl = `https://api.github.com/users/${userGitusernme}`;
  
    fetch(apiUrl)
    .then(function (response) {
      if (response.ok) {        
        response.json().then(function (data) {
          console.log(data);
          return data;
        });
      } else {
        return response.statusText;
      }
    })
    .catch(function (error) {
      return 'Unable to connect to GitHub';
    });
}

// Function to generate markdown for README
function generateMarkdown(data) {

  // Conditionally Table of Contents
  let readMeTOC = `## Table of Contents `;

  if (data.installation !== '') readMeTOC += `* [Installation](#installation) `;

  if (data.usage !== '') readMeTOC += `* [Usage](#usage) `;

  if (data.contributing !== '') readMeTOC += `* [Contributing](#contributing) `;

  if (data.tests !== '') readMeTOC += `* [Tests](#tests) `;

  if (data.credits !== '') readMeTOC += `* [Credits](#credits) `; 

  readMeTOC += `* [License](#license) `;

  readMeTOC += `* [Questions](#questions) `;

  

  // Generate required portions of the README
  let readMeBody = 
  `## ${data.title} ![License](https://img.shields.io/badge/license-${data.license}-green)(./LICENSE)
  
  
  ## Description 
  
  ${data.description}

  `

  // Add Table of Contents to markdown
  readMeBody += readMeTOC;
 
  // Optional Installation section
  if (data.installation !== '') {
  
  readMeBody +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data.installation}`
  };
  

  // Optional Usage section
  if (data.usage !== '') {
  
  readMeBody +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data.usage}`
  };
  
  
  // Optional Contributing section
  if (data.contributing !== '') {

  readMeBody +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data.contributing}`
  };
  

  // Optional Tests section
  if (data.tests !== '') {
  
  readMeBody +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data.tests}`
  };


  // License section is required
  readMeBody +=
  `
  
  ## License
  
  ${data.license}
  `;


  // Questions / About Developer section
  let userGitDetails = 
  `
  ---
  
  ## Questions?

 
  For any questions, please contact me with the information below:
 
  GitHub:<a href='https://github.com/${data.username}' target='_blank'>Click here</a>
  `;

  // If GitHub email is not null, add to Developer section
  if (data.email !== null) {
  
  userGitDetails +=
  `

  Email: ${data.email}

  `};

  // Add developer section to markdown
  readMeBody += userGitDetails;

  // Return markdown
  return readMeBody;


}

module.exports = {generateMarkdown, getUserGitDetails};

