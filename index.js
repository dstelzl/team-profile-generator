const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { listenerCount } = require('process');
const { choices } = require('yargs');
const team = []

const managerQuestions = [
    {
    type: 'input',
    name: 'name',
    message: "Please input your full name"

},
{
    type: 'input',
    name: 'ID',
    message: "Please input your ID"

},
{
    type: 'input',
    name: 'email',
    message: "Please input your email"

},
{
    type: 'input',
    name: 'officeNumber',
    message: "Please input your office number"

},
]
const menuQuestion = {
    type: 'list',
    name: 'menuOption',
    message: 'What would you like to do next?',
    choices: ['Add an Engineer', 'Add and Intern', 'Finish']

}
function promptManager(){
    inquirer.prompt(managerQuestions).then(({name, id, email, office})=>{
        const employee = new Manager(name, id, email, office)
        team.push(employee)
        promptMenu()
    
    })
}
function promptMenu(){
    inquirer.prompt(menuQuestion).then(({menuOption})=> {
        switch (menuOption) {
            case 'Add an Engineer' : 
                promtEngineer()
                break;
            case 'Add and Intern' : 
                promptIntern()
                break;
            case  'Finish' : 
                buildHtml()
                break;
    
        }
    })
}
promptManager()