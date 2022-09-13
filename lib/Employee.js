class Employee {
  constructor(passedName, passedId, passedEmail) {
this.name = passedName, this.id = passedId, this.email = passedEmail

  } 
  getName(){
    return this.name
  }
  getId(){
    return this.id
  }
  getEmail(){
    return this.email
  }
  getRole(){
    return "Employee"
  }
  
}

module.exports = Employee;
