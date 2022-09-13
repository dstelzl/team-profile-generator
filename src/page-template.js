// PROVIDED BY INSTRUCTOR 2022-09-09
// create the team

// create the manager html
const generateManager = (manager) => {
  return `<div class="card text-bg-primary m-4" style="width: 18rem;">
          
        <h5 class="card-title">${manager.getName()}</h5>
        <h6 class="card-subtitle mb-2">Job Title: Manager</h6>
  
        <div class="card-body">

        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${manager.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
          <li class="list-group-item">Office number: ${manager.getOffice()}</li>
        </ul>
      </div>
    </div>`;
};

// create the html for engineers
const generateEngineer = (engineer) => {
  return `
        <div class="card text-bg-primary m-4" style="width: 18rem;">
          
        <h5 class="card-title">${engineer.getName()}</h5>
        <h6 class="card-subtitle mb-2">Job Title: Engineer</h6>
        <div class="card-body">

        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${engineer.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
          <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
        `;
};

// create the html for interns
const generateIntern = (intern) => {
  return `
        <div class="card text-bg-primary m-4" style="width: 18rem;">
          
        <h5 class="card-title">${intern.getName()}</h5>
        <h6 class="card-subtitle mb-2">Job Title: Intern</h6>
        <div class="card-body">

        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
    </div>
        `;
};

const generateTeam = (team) => {
  console.log(team);

  return `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>My Team</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
        <div class = "container-fluid bg-danger p-3">
        <div class="mx-auto p-4 text-light" style="width: 300px;">
        <h1>My Team</h1>
    </div>
    </div>
            <main class = "d-flex">
            <section class = "row justify-content-center">
                ${team.map((member) => {
                  switch (member.getRole()) {
                    case "Manager":
                      return generateManager(member);
                      break;
                    case "Engineer":
                      return generateEngineer(member);
                      break;
                    case "Intern":
                      return generateIntern(member);
                      break;
                  }
                })}
            </section>
                </main>
        </body>
    </html>
        `;
};

// export function to generate entire page
module.exports = generateTeam;
