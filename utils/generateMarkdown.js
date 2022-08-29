function renderLicenseBadge(license) {
  if(license == 'MIT'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }else if(license == 'Mozilla Public License 2.0'){
    return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }else{
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Current State
  ${data.projectStatus}
  <!--ts-->
  * [Description](#description)
  * [Usage](#Usage)
  * [Installation](#installation)
  * [Instructions](#instructions)
  * [License](#license)
  * [Contributions](#contribution)
  <!--te-->
  ## Description
  ${data.description}
  ## Usage
  ${data.Usage}
  ## Table of Contents
  ## Installation
  ${data.installation}
  ## Instructions
  ${data.instructions}
  ## License
  ${data.license}
  ## Contributions
  ${data.contribution}
`;
}

module.exports = generateMarkdown;