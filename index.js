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
const engineerQuestions = [
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
    name: 'school',
    message: "Please input the name of your School or Institution"

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
function promptEngineer(){
    inquirer.prompt(engineerQuestions).then(({name, id, email, github})=>{
        const employee = new Engineer(name, id, email, github)
        team.push(employee)
        promptMenu()
    
    })
}
function promptIntern(){
    inquirer.prompt(managerQuestions).then(({name, id, email, office})=>{
        const employee = new Intern(name, id, email, school)
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
//Create a function to write README file (use function for linked js file- generateMarkdown)
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateTeam(data), err => {
        console.log(err);
    } )
}

//Create a function to initialize app. (use "prompt" to display questions and redirect answers to a new README file generated using "writeToFile")
function init() {
    prompt(questions).then (answers => {
        writeToFile('./dist/team.html', answers);
    }) 
}

// Function call to initialize app
init();

promptManager()
promptEngineer()
promptIntern()