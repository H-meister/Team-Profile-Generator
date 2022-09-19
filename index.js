//start on getting questions starting with inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');

const teamManager = [
    {
        type : 'input',
        name : 'teamManager',
        message: 'What is your Team Manager name?'
    }
    {
        type : 'input',
        name : 'email',
        message : 'What is their e-mail?'
    }
    {
        
    }
]
//then prompt questions to the user and get the results back
//then generate Html page to get information displayed 
//lastly run test programs i think usiing another npm thingy