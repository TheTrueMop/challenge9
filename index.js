const inquirer = require('inquirer');
const fs = require('fs');
const generateREADME = require('./utils/generateMarkdown');
const { log } = require('console');

const questions = [
    {
        type: 'list',
        name: 'projectStatus',
        message: 'What is the status of your project?',
        choices: ['Buggy', 'Stable', 'Under Development']
    },
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'title',   
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'what is the use case of your project?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'how do you use the project?',
        name: 'instructions',
    },
    {
        type: 'input',
        message: 'What contributed to the project?',
        name: 'contribution',
    },
    {
        type: 'list',
        message: 'Select the license you would like to include.',
        name: 'license',
        choices: ['Apache 2.0 License', 'Creative Commons', 'The MIT License', 'none' ]
    },
];


function writeToFile(fileName, data) {
    return fs.writeFile('newREADME.md', fileName, (err) => 
    err ? console.log(err) : console.log('Your README has been created.')
    );
}

function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        //console.log(answers);
        let createREADME = generateREADME(answers);
        //console.log(createREADME);
        fs.writeFile('yourNew-README.md', createREADME, function (err) {
        console.log('readme created');
        })
    });
}

init();
