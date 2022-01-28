const inquirer = require("inquirer");

const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamMembers = [];

async function addIntern() {
  const intern = new Intern();
  await intern.getName();
  await intern.getEmail();
  await intern.getId();
  await intern.getSchool();
  await teamMembers.push(intern);
  await welcome();
}

async function addManager() {
  const manager = new Manager();
  await manager.getName();
  await manager.getEmail();
  await manager.getId();
  await manager.getOfficeNumber();
  await teamMembers.push(manager);
  await welcome();
}

async function addEngineer() {
  const engineer = new Engineer();
  await engineer.getName();
  await engineer.getEmail();
  await engineer.getId();
  await engineer.getGithub();
  await teamMembers.push(engineer);
  await welcome();
}

function addNewMember() {
  const message = `Which member do you want to add
    1) Manager
    2) Intern
    3) Engineer: `;
  inquirer
    .prompt([
      {
        type: "input",
        name: "addNewMember",
        message: message,
        validate: (val) => /\d+/gi.test(val),
      },
    ])
    .then(function (val) {
      switch (val.addNewMember) {
        case "1":
          addManager();
          break;
        case "2":
          addIntern();
          break;
        case "3":
          addEngineer();
          break;
        default:
          console.log("Option no valid");
          welcome();
          break;
      }
    });
}

function createTeamFile(fileName, data) {
  if (teamMembers.length > 0) {
    fs.writeFileSync(fileName, data, (err) => {
      err ? console.log(err) : console.log("Successfully created team.html!");
    });
  }
  console.log("Bye! :)");
}

function createCards(teamMembers) {
  let createCard = "";
  let otherInformation = "";
  let icon = "";
  let className = "";
  for (let i = 0; i < teamMembers.length; i++) {
    if (teamMembers[i].role === "Manager") {
      otherInformation = `<li class="list-group-item">Office Number: ${teamMembers[i].officeNumber}</li>`;
      icon = `<i class="bi bi-cup"></i>`;
      className = "bg-success";
    }
    if (teamMembers[i].role === "Intern") {
      otherInformation = `<li class="list-group-item">School: ${teamMembers[i].school}</li>`;
      icon = `<i class="bi bi-journal-code"></i>`;
      className = "bg-warning";
    }
    if (teamMembers[i].role === "Engineer") {
      otherInformation = `<li class="list-group-item">Github:<a href="${teamMembers[i].github}"> ${teamMembers[i].github}</a></li>`;
      icon = `<i class="bi bi-laptop"></i>`;
      className = "bg-primary";
    }
    createCard += `
    <div class="col mb-5">
        <div class="card h-100">
            <div class="card-header text-center ${className} text-white">
            <h1 class="w-bolder">${teamMembers[i].name}</h1>
            <h1 class="w-bolder">${icon} ${teamMembers[i].role}</h1>
            </div>
            <div class="card-body p-4">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Id: ${teamMembers[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${teamMembers[i].email}"> ${teamMembers[i].email}</a></li>
               ${otherInformation}
            </ul>
            </div>
        </div>
    </div>
    `;
  }
  return createCard;
}

function generateHTML(teamMembers) {
  return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Team Generator</title>
    <!-- Bootstrap icons-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
      rel="stylesheet"
    />
    <!-- Core theme CSS (includes Bootstrap)-->
    <link href="../css/reset.css" rel="stylesheet" />
    <link href="../css/styles.css" rel="stylesheet" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <!-- Header-->
    <header class="bg-info py-5">
      <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
          <h1 class="display-4 fw-bolder">My Team</h1>
        </div>
      </div>
    </header>
    <!-- Section-->
    <section class="py-5">
      <div class="container px-4 px-lg-5 mt-5">
        <div
          class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center"
        >
          <!-- Cards -->
           ${createCards(teamMembers)}
          
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="py-5 bg-info">
      <div class="container">
        <p class="m-0 text-center text-white">
          Made by <a href="https://github.com/marian94"> Mariana</a>
        </p>
      </div>
    </footer>
    <!-- Bootstrap core JS-->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <!-- Core theme JS-->
    <script src="js/scripts.js"></script>
  </body>
</html>

    `;
}

function welcome() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "yesNo",
        message: "Welcome, do you want to add a new member to your team? (Y/n)",
      },
    ])
    .then(function (val) {
      const isItYes = val.yesNo[0].toLowerCase() === "y";
      if (isItYes) {
        addNewMember();
      } else {
        const readmeFileContent = generateHTML(teamMembers);
        createTeamFile("team.html", readmeFileContent);
      }
    });
}

welcome();
