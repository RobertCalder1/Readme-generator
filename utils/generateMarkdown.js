// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseProject) {
  let badge;
  switch (licenseProject) {
    case "MIT":
      badge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
      break;
    case "APACHE 2.0":
      badge =
        "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
      break;
    case "GPL 3.0":
      badge =
        "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
      break;
    case "BSD 3":
      badge =
        "![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)";
      break;
    case "None":
      badge = "";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseProject) {
  let licenseLink;
  switch (licenseProject) {
    case "MIT":
      licenseLink = "https://opensource.org/licenses/MIT";
      break;
    case "APACHE 2.0":
      licenseLink = "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL 3.0":
      licenseLink = "https://www.gnu.org/licenses/gpl-3.0";
      break;
    case "BSD 3":
      licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      licenseLink = "";
      break;
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseProject) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectName}

  [${renderLicenseBadge(data.licenseProject)}](${renderLicenseLink(
    data.licenseProject
  )})

  ##Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${data.projectDescription}

  ## Installation
  To install necessary dependencies, run the following command: ${
    data.installDependencies
  }

  ## Usage
  ${data.usageProject}

  ## Contributing
  ${data.contributionProject}

  ## Tests
  ${data.testProject}

  ## License
  [${renderLicenseBadge(data.licenseProject)}](${renderLicenseLink(
    data.licenseProject
  )})
  This project is licensed under the ${data.licenseProject} license.

  ## Questions
  If you have any questions, you can find me in: </br>
  Github: https://github.com/${data.githubUsername} </br>
  Email: ${data.email}
  `;
}

module.exports = generateMarkdown;
