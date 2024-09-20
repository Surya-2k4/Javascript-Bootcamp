//same thing in different form  - > overrides 

//if both parent and child class have same function, it only tekes the child function
// It ovverides the parent class methods if functions have same name in both parent and child class
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
  
    getDetails() {
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
      
      getStuDetails(){
        const age = new Date().getFullYear() - this.dob;

        console.log(`${this.firstname} is ${age} years old, studying ${this.course}`);
      }

      getDetails() {
          console.log(`${this.firstname} is studying ${this.course} in ${this.dept} department.`);
      } 
  
  }
  
  //creating instance
  let st1 = new faculty('Surya','',2004,9898982324,true,'MCA','DBT');
  
  st1.getDetails();

  // st1.getDetails();
  
  // st1.getStudentStatus();
  
  // st1.getStuDetails();
  
let st2 = new faculty
('kavin','',2002,9978265523,true,'Bsc','CE');

st2.getStuDetails();

// st2.getDetails();
  
// st2.getStudentStatus();

// st2.getStuDetails();

//we can also access every single attribute present in both parent and child classes
  
// console.log(st1.firstname);
  
// console.log(st1.dob);
  
  class student extends person{
    constructor(firstname,dob,school,grade){
      super(firstname,dob);
      this.school = school;
      this.grade = grade;
    }

    //overriding the getDetails method
    getDetails(){
      console.log(`${this.firstname} completed school in ${this.school} with ${this.grade} grade`);
    }
  }

  let gopal = new student
  ('gopal',2001,'KEC','A');

  //console.log(gopal);

  gopal.getDetails();