const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generateTeam = require('./src/page-template')
const fs = require('fs')
const team = []

const managerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "Please input your full name"

},
{
    type: 'input',
    name: 'id',
    message: "Please input your ID"

},
{
    type: 'input',
    name: 'email',
    message: "Please input your email"

},
{
    type: 'input',
    name: 'office',
    message: "Please input your office number"

},
]
const menuQuestion = {
    type: 'list',
    name: 'menuOption',
    message: 'What would you like to do next?',
    choices: ['Add an Engineer', 'Add and Intern', 'Finish']

}
const engineerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "Please input your full name"

},
{
    type: 'input',
    name: 'id',
    message: "Please input your ID"

},
{
    type: 'input',
    name: 'email',
    message: "Please input your email"

},
{
    type: 'input',
    name: 'github',
    message: "Please input your GitHub username"

},
]
const internQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "Please input your full name"

},
{
    type: 'input',
    name: 'id',
    message: "Please input your ID"

},
{
    type: 'input',
    name: 'email',
    message: "Please input your email"

},
{
    type: 'input',
    name: 'school',
    message: "Please input the name of your School or Institution"

},
]

function promptManager(){
    inquirer.prompt(managerQuestions).then(({name, id, email, office})=>{
        const employee = new Manager(name, id, email, office)
        team.push(employee)
        promptMenu()
    
    })
}
function promptEngineer(){
    inquirer.prompt(engineerQuestions).then(({name, id, email, github})=>{
        const employee = new Engineer(name, id, email, github)
        team.push(employee)
        promptMenu()
    
    })
}
function promptIntern(){
    inquirer.prompt(internQuestions).then(({name, id, email, school})=>{
        const employee = new Intern(name, id, email, school)
        team.push(employee)
        promptMenu()
    
    })
}
function promptMenu(){
    inquirer.prompt(menuQuestion).then(({menuOption})=> {
        switch (menuOption) {
            case 'Add an Engineer' : 
                promptEngineer()
                break;
            case 'Add and Intern' : 
                promptIntern()
                break;
            case  'Finish' : 
            writeToFile()
                break;
    
        }
    })
}
function writeToFile( ) {
    fs.writeFile("./dist/team.html", generateTeam(team), err => {
        console.log(err);
    } )
}


// Function call to initialize app
//init();

promptManager()
