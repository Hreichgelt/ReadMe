// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// page where readme gets created to 
const createReadme = require('./Utilities/generateMarkdown.js');
// const questions = require('./questions.js');

// array of questions for user
const questions = () => {
    return inquirer. prompt([
        {
            type: 'input',
            name: 'Project',
            message: 'What is your projects name?',
        },
        {
            type: 'input',
            name: 'Live Site',
            message: 'please include your live site here',
        },
        {
            type: 'checkbox',
            message: 'What items would you like included in the table of contents?',
            name: 'stack',
            choices: ['Description', 'Usage', 'Visuals', 'Acknowledgments', 'Resources'],
        },
        {
            type: 'checkbox',
            message: 'What languages are in the project?',
            name: 'stack',
            choices: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'NodeJS'],
        },
        {
            type: 'input',
            name: 'Description',
            message: 'please include your description of the site here',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'please include your explaination on how to use the site here',
        },
        {
            type: 'input',
            name: 'Authors and Acknowledgments',
            message: 'please include authors and contributors here',
        },
        {
            type: 'input',
            name: 'Resources',
            message: 'please include your live site and repository links here',
        },
        {
            type: 'input',
            name: 'Visuals',
            message: 'please include your demo or visuals here',
        },
    ])
}

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
const writeFile = data => {
    fs.writeFile('ReadMe.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Your ReadMe has been Created')
        }
    })
}

// // TODO: Create a function to initialize app
questions().then(answers => {
    return generatePage(answers);
}).then(data => {
    return writeFile(data);
}).catch(err => {
    console.log(err)
})