//parent child relationship

// extends - > used for inherit

class person {
  constructor(firstname, lastname, dob, phoneNo, isStudent) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.phoneNo = phoneNo;
    this.isStudent = isStudent;
  }

  getStudentStatus() {
    console.log(
      `${this.firstname} is ${this.isStudent ? "student" : "Not a student"}`
    );
  }

  getStuDetails() {
    const age = new Date().getFullYear() - this.dob;

    console.log(
      `${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
    );
  }
}

// person is the parent class, faculty is a child class

class faculty extends person {
  constructor(
    firstname,
    lastname,
    dob, 
    phoneNo, 
    isStudent, 
    dept, 
    course) {
        super(firstname,lastname,dob,phoneNo,isStudent);
        this.dept = dept;
        this.course = course;
    }

    getDetails() {
        console.log(`${this.firstname} is studying ${this.course} in ${this.dept} department.`);
    } 

}

//creating instance
let st1 = new faculty('Surya','',2004,9898982324,true,'MCA','DBT');

st1.getDetails();

st1.getStudentStatus();

st1.getStuDetails();

//we can also access every single attribute present in both parent and child classes

console.log(st1.firstname);

console.log(st1.dob);

