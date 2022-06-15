// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(License) {

}

// TODO: create a function that returns a license badge based on which license is passed in 
// if there is no license, return an empty string
function renderLicenseBadge(license) {

}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
<img src="https://shields.io/badge/license-${data.licenses}-goldenrod" alt="Badge-${data.licenses}"/> \n
  
    
## Table of Contents
1. [Title](#title)
2. [Live](#live)
3. [Description](#description)
4. [Usage](#usage)
5. [Visuals](#visuals)
6. [Contributors](#contributors)
7. [Resources](#resources)
8. [Licenses](#licenses)



## ${data.title}

## Live
${data.live}
    
## Description
${data.description}
    
## Usage
${data.usage}
    
## Visuals
${data.visuals}
    
## Contributors
${data.contributors} 
    
## Resources
${data.resources}
    
## Licenses
this is licensed with ${data.licenses}

`;
}


module.exports = generateMarkdown;






