// function to generate markdown for README
function generateReadMe(data) {
  const ReadMeString = `
  ## Project Title
  ${data.title}

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
  
  You can also email me at: ${data.email}
  `
  return (ReadMeString);
}

module.exports = generateReadMe;
