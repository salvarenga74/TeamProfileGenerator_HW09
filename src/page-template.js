function generatingManager(manager){
    return `<section class="card">
    <article class="card-header featuredName">
        <h4>${manager.name}</h4>
        <h5>☕️ Manager</h5>
    </article>
    <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id} </li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li class="list-group-item">OfficeNumber: ${manager.officeNumber} </li>
        </ul>
    </div>
</section>`
}

function generatingEngineer(engineer){
    return `<section class="card">
    <article class="card-header featuredName">
        <h4>${engineer.name}</h4>
        <h5>👓 Engineer</h5>
    </article>
    <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id} </li>
        <li class="list-group-item">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
        </ul>
    </div>
</section>`
}

function generatingIntern(intern){
    return `<section class="card">
    <article class="card-header featuredName">
        <h4>${intern.name}</h4>
        <h5>🎓 Intern</h5>
    </article>
    <div class="card-body">
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id} </li>
        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</section>`
}

function printsEmployeeList(employees){
    let employeesBeingPrinted = "";
    for (let i = 0; i < employees.length; i++) {
        const employee = employees[i];

        if (employee.getRole() === "Manager"){
            employeesBeingPrinted +=  generatingManager(employee);
        }else if (employee.getRole() === "Engineer") {
            
            employeesBeingPrinted +=  generatingEngineer(employee);
        }else if (employee.getRole() === "Intern") {

            employeesBeingPrinted +=  generatingIntern(employee);
        }else {
            console.log("err there is an employee without a role!!")
        }
    }
    return employeesBeingPrinted;
}

function generateHTML(employees) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Workforce Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="./style.css">
</head>
<body>
    <section class="jumbotron jumbotron-fluid" id ="titleBanner">
        <div class="container">
          <h1 class="display-3">My Team</h1>
        </div>
    </section>
    <main class="container">
        <div class="card-deck">
        ${printsEmployeeList(employees)}
        </div>
    </main>
</body>
    </html>
    `;
}

module.exports = generateHTML;