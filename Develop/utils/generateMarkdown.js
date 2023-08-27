
// Function to generate markdown for README
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

  

  // Generate required portions of the README
  let strLicenseBadge = data.license;
  strLicenseBadge = strLicenseBadge.replace('/ /g ','_');
  let readMeBody = 
  `## ${data.title}  ![License](https://img.shields.io/badge/license-${strLicenseBadge}-green)
  
  
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

module.exports = generateMarkdown;

