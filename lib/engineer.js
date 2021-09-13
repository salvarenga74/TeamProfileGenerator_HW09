const EmployeeCard = require('./employee');

class Engineer extends EmployeeCard{
    
    constructor(name,id,email,github){
        super(name, id, email);
        this.github = github;
    }
    
    getRole(){
        return "Engineer";
    }

    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;