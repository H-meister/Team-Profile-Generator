const Employee = require('./Employee');
//extends inherits other classes 
class Manager extends Employee{
    constructor(name, id, email, officenum){
        super(name, id, email);
        this.officenum = officenum;
    }
    getofficenum(){
        return this.officenum;
    }
}

module.exports = Manager;