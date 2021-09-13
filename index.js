const inquirer = require('inquirer');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/page-template.js");
const fs = require('fs');


let employees = [];

generateManager();

function generateManager() {
 inquirer
 .prompt([
    {
      type: 'input',
      name: 'managerName',
      message: 'Enter Team Manager Name: ',
    },
    {
      type: 'input',
      name: 'managerID',
      message: 'Enter manager ID: ',
    },
    {
      type: 'input',
      name: 'managerEmail',
      message: "What is team manager`s email?",
    },
    {
      type: 'input',
      name: 'managerOfficeNumber',
      message: "What is team manager's office number?",
    },
    ])
 .then((data) => {
     const newManager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNumber)
     employees.push(newManager);
     createOtherTeamMember()
})
.catch((err) => console.error(err));
}

function createOtherTeamMember(){
 inquirer
 .prompt([
    {
      type: 'list',
      name: 'memberChoice',
      message: "Which type of team member would you like to add?",
      choices: ['Engineer','Intern','Done Building']
    }])
    .then((data) =>{
        switch (data.memberChoice) {
        case 'Engineer':
            generateEngineer()
            break;
        case 'Intern':
            generateIntern()
            break;
        default:
            const filename = `./output/workTeam.html`;
            writeToFile(filename)
            break;
        }
    })
  .catch((err) => console.error(err));
}

function writeToFile(filename){

  fs.writeFile(filename,generateHTML(employees), (err) =>
  err ? console.log(err) : console.log("Successfully wrote to workTeam.html")
  );
}

function generateEngineer() {
 inquirer
 .prompt([
    {
      type: 'input',
      name: 'engineerName',
      message: "Enter Engineer's Name:",
    },
    {
      type: 'input',
      name: 'engineerID',
      message: "Enter Engineer's ID:",
    },
    {
      type: 'input',
      name: 'engineerEmail',
      message: "Enter Engineer's Email:",
    },
    {
      type: 'input',
      name: 'engineerGithub',
      message: "What is your Engineer's Github username?",
    },
])
.then((data) => {
        const newEngineer = new Engineer(data.engineerName, data.engineerID, data.engineerEmail, data.engineerGithub)
        employees.push(newEngineer);
        createOtherTeamMember();
})
.catch((err) => console.error(err));
}

function generateIntern() {
    inquirer
    .prompt([
       {
         type: 'input',
         name: 'internName',
         message: "Enter Intern's Name:",
       },
       {
         type: 'input',
         name: 'internID',
         message: "Enter Intern's ID:",
       },
       {
         type: 'input',
         name: 'internEmail',
         message: "Enter Intern's Email:",
       },
       {
         type: 'input',
         name: 'internSchool',
         message: "What is your Intern's school?",
       },
   ])
   .then((data) => {
           const newIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
           employees.push(newIntern);
           createOtherTeamMember();
   })
   .catch((err) => console.error(err));
}


