
// Function to generate Content for README file
function generateMarkdown(data) {

  // Conditionally Table of Contents
  let readMeTOC = `## Table of Contents 
  
  `;

  if (data.installation !== '') readMeTOC += ` * [Installation](#installation) 
  
  `;

  if (data.usage !== '') readMeTOC += ` * [Usage](#usage)
  
  `;

  if (data.contributing !== '') readMeTOC += ` * [Contributing](#contributing) 
  
  `;

  if (data.tests !== '') readMeTOC += ` * [Tests](#tests)
  
  `;

  if (data.credits !== '') readMeTOC += ` * [Credits](#credits) 
  
  `; 

  readMeTOC += ` * [License](#license) 
  
  `;

  readMeTOC += ` * [Questions](#questions) `;  

  let strLicenseBadge = data.license.replace(/ /g,'_');//replace empty spaces in License name   
  // Generate required portions of the README
  let readMeBody = 
  `## ${data.title}  ![License](https://img.shields.io/badge/license-${strLicenseBadge}-green)
  
  
  ## Description 
  
  ${data.description}

  `

  // Add Table of Contents
  readMeBody += readMeTOC;
 
  // Installation section
  if (data.installation !== '') {
  
  readMeBody +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data.installation}`
  };
  

  //Usage section
  if (data.usage !== '') {
  
  readMeBody +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data.usage}`
  };
  
  
  //Contributing section
  if (data.contributing !== '') {

  readMeBody +=
    
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data.contributing}`
  };
  

  //Tests section
  if (data.tests !== '') {
  
  readMeBody +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data.tests}`
  };


  // License section
  readMeBody +=
  `
  
  ## License
  
  ${data.license}
  `;


  // Questions section
  let userGitDetails = 
  `
  ---
  
  ## Questions?

 
  For any questions, please contact me with the information below:
 
  GitHub:<a href='https://github.com/${data.username}' target='_blank'>Click here</a>
  `;

  // If email is not null, add to Developer section
  if (data.email !== '') {
  
  userGitDetails +=
  `

  Email: ${data.email}

  `};

  //Developer section
  readMeBody += userGitDetails;

  // Return Readme Body
  return readMeBody;
}

module.exports = generateMarkdown;

