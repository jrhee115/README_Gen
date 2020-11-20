// function to generate markdown for README
function generateReadMe(data) {
  return `
  # ${data.title} <div align= "right">${data.icon}</div>

  \n ## Description
  ${data.description}

  \n ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Question](#question)

  \n ## Installation
  ${data.installation}

  \n ## Usage
  ${data.usage}

  \n ## License
  ${data.license}

  \n ## Contribution
  ${data.contribution}

  \n ## Test
  ${data.test}

  \n ## Quesiton
  If you have any questions, contact me at my github: jrhee115 
  or
  You can email me at: ${data.email}
  `
}
module.exports = generateReadMe;
