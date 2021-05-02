
class University_Employee {
    constructor(empID,name,email,department) {
      this._empID =empID;
      this._name = name;
      this._email =email;
      this._department = department;
      
    }
    empInformation() {
      console.log( this._name +' is part of the '+ this._department+' department. '+ this._name + 's email is ' + this._email);
    }
  }
  
  class Faculty extends University_Employee {
    constructor(empID,name,email,department,officebuilding,officeroomnum) {
        super(empID,name,email,department)
        this._officebuilding = officebuilding
        this._officeroomnum = officeroomnum
    }
    Facultyinformation() {
        console.log(this._name + ' email is ' + this._email + ". "+ this._name + " office is located in " + this._officebuilding + " room number " + this._officeroomnum +".");
    }
    
  }
  class Class extends Faculty {
    constructor(empID,name,email,department,officebuilding,officeroomnum,classID,classname,classroom) {
        super(empID,name,email,department,officebuilding,officeroomnum)
        this._classID = classID
        this._classname = classname;
        this._classroom = classroom;
    }
    classinformation() {
        console.log(this._classname + ', '+ this._classID +' is held in ' + this._classroom + '. '+ this._classname + ' is taught by '+ this._name + '.');
    }
}
 
  
  let John_Smith = new Faculty("123","John_Smith","jsmith@gmail.com","Math", "Swarts Hall", "157");
  let stats = new Class("123","John_Smith","jsmith@gmail.com","Math", "Swarts Hall", "157","STAT110","Statistics","FISHR0206")

  John_Smith.empInformation();
  John_Smith.Facultyinformation();
  stats.classinformation();
  

 