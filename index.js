// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your projects name?',
    },
    {
        type: 'input',
        name: 'live',
        message: 'please include your live site here',
    },
    // {
    //     type: 'checkbox',
    //     message: 'What items would you like included in the table of contents?',
    //     name: 'TOC',
    //     choices: ['Description', 'Usage', 'Visuals', 'Authors', 'Resources', "Questions", "Licenses"],
    // },
    {
        type: 'input',
        name: 'description',
        message: 'please include your description of the site here',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'please include your explaination on how to use the site here',
    },
    {
        type: 'input',
        name: 'visuals',
        message: 'please include your demo or visuals here',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'please include authors and contributors here',
    },
    {
        type: 'input',
        name: 'resources',
        message: 'please include your live site and repository links here',
    },
    {
        type: 'rawlist',
        message: 'what License was this created with?',
        name: 'licenses',
        choices: [
            "MPL",
            "GPL",
            "Apache",
            "MIT",
            "CC",
            "BSD",
            "None",
        ]
    },
]
// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let content = generateMarkdown(data);
    fs.writeFile('./output/readme.md', content, function (error){
        if (error) {
            return console.log(error)
        }
        console.log('TEMPLATE GENERATED!');
    });
};


// // TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function (data) {
        let fileName = "readme.md"
        writeToFile(fileName, data)
    });
}

init();