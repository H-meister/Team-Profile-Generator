//start on getting questions starting with inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');
//make a teamManager objectarray
const teamManager = [
    {
        type : 'input',
        name : 'teamManager',
        message: 'What is your Team Manager name?'
    },
    {
        type : 'input',
        name : 'empID',
        message : 'What is their employee ID?'
    },
    {
        type : 'input',
        name : 'email',
        message : 'What is their e-mail?'
    },
    {
        type : 'input',
        name : 'officeNum',
        message : 'What is their office number?'
    },
    {
        type : 'list',
        name : 'choice',
        message : 'Would you like to add another team member?',
        choices : ['Yes', 'No']
    }
];
function init (){
inquirer
.prompt(teamManager);
};

init();
//then prompt questions to the user and get the results back
//then generate Html page to get information displayed 
//lastly run test programs i think usiing another npm thingy