// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}




// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
    <img src="https://shields.io/badge/license-${data.license}-${color}" alt="Badge-${data.license}" height="44"/>


// const generateLicense = (type) => {
//     let color;
//     if (type === "MPL") color = "red";
//     if (type === "GPL") color = "green";
//     if (type === "Apache") color = "purple";
//     if (type === "MIT") color = "orange";
//     if (type === "CC") color = "blue";
//     if (type === "BSD") color = "goldenrod";

## Table of Contents
    1.[Title](#Title)
    2.[Live](#Live)
    3.[TOC](#TOC)
    4.[Description](#Description)
    5.[Usage](#Usage)
    6.[Visuals](#Visuals)
    7.[Contributors](#Contributors)
    8.[Resources](#Resources)
    9.[Licenses](#Licenses)


## Title
${data.Title}

## Live
${data.Live}
    
## Description
${data.Description}
    
## Usage
${data.Usage}
    
## Visuals
${data.Visuals}
    
## Contributors
${answers.Contributors} 
    
## Resources
${data.Resources}
    
## Licenses

`;
}
