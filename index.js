//start on getting questions starting with inquirer and fs
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/page-generator');
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

const yes = [
    {
        type : 'list',
        name :'yes',
        message : 'What would you like to do?',
        choices : ['Add Engineer','Add Intern','Finish building team!']
    }
]
//adding engineer to project --will test to see if it works
const engineer = [
    {
        type : 'input',
        name : 'enName',
        message : 'What is the engineers name?'
    },
    {
        type : 'input',
        name : 'enID',
        message : 'What is the engineers ID?'
    },
    {
        type : 'input',
        name : 'enEmail',
        message : 'What is the engineers E-mail?'
    },
    {
        type : 'input',
        name : 'enGit',
        message : 'What is the engineers Github username?'
    }
];
//after finishing here you are to be taken back to the menu to see if you want to add
//an intern.
//also adding intern here with relevent questions.
const intern = [
    {
        type : 'input',
        name : 'inName',
        message : 'What is the interns name?',
    },
    {
        type : 'input',
        name : 'inID',
        message : 'What is the interns ID?',
    },
    {
        type : 'input',
        name : 'inEmail',
        message : 'What is the interns E-mail?'
    },
    {
        type : 'input',
        name : 'inSchool',
        message : 'Where did the intern go to school?'
    }
];

//the call back function to write out prompt yes
function yesCall (answers) {
    console.log(answers)
     if(answers.yes === 'Add Engineer'){
        inquirer
        .prompt(engineer)
        .then(function (){
            //ansers.yes is included to clear previous answer... hopefully
            inquirer
            .prompt(yes)
            .then(function(answers){
                 yesCall(answers); 
            })
            })
        }
    else if(answers.yes === 'Add Intern'){
        inquirer
        .prompt(intern)
        .then(function () {
            inquirer
            .prompt(yes)
            .then(function(answers){
                 yesCall(answers); 
                })
        })
    }
    //here return to just finish page. ( which is writing new HTML)
    else {
        writeHTML('./index.HTML',generateHTML(answers));
    }

};

function writeHTML (fileName, data) {
    fs.writeFile(fileName, data, err => err ? console.log(err) : console.log('Your HTML page has been generated!'));  
};

//function to run the questions
function init (){
inquirer
//prompting initial teamManager array to prompt user
.prompt(teamManager)
//with the answers i am then checking what they selected to continue
.then(function (answers){
    // console.log(answers);
    //in this senario if they do agree then the application continues and prompts yes
    if(answers.choice === 'Yes'){
        inquirer
        .prompt(yes)
        .then(function (answers) {
            //depending on who they choose we will select what to do

            //changes so that it gets a call back.
           yesCall(answers);
        })
    }
    //add function for if they choose no (just build the app at this point)
    else {
        writeHTML('./index.HTML',generateHTML(answers));
    }
});
};

init();
//then generate Html page to get information displayed 
//lastly run test programs i think usiing another npm thingy

//TODO
//currently answers work but running into mirror effect where I will have to keep
//going and going

//create CALL BACK functions for the YES prompt 
//then prompt the yes callback

//figure out why index.html file is not being created at the writeHTML function!

//then figure out jEST :()