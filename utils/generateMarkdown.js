function renderLicenseBadge(license) {
  if (license !=="None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}

function renderLicenseLink(license) {
  if (license !=="None") {
    return (
      `\n *[License](#license) \n`
    )
  }
  return ''

}

function renderLicenseSection(license) {
  if (license !=="None") {
    return (
      `## License
      
    This project is licensed under the ${license} license. `
    )
  }
  return ''

}

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  ${renderLicenseBadge(data.license)}
  
  ## ${data.title} 

  ${data.liveLink}

  ## Description 
  ${data.description}

  ## Table of Contents
  *[Installation](#installation)
  
  *[Usage](#usage)
  
  ${renderLicenseLink(data.license)}
  
  *[Contributing](#contributing)
  
  *[Tests](#tests)
  
  *[Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command(s): ${data.installation}


  ## Usage 
  ${data.usage}

${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests 

  To run tests, run the following command: ${data.test}
<br>

  ## Questions 
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}.`;

}

module.exports = generateMarkdown;
