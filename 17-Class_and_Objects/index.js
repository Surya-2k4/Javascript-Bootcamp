let surya = {
    firstname : 'surya',
    lastname : 'natarajan',
    dob : 2004,
    phoneNo : 1234567891,
    isStudent : true,
   
   
}

// getStudentStatus : function(){
//     console.log(
//         `${this.firstname} is ${this.isStudent ? 'student' : 'Not a student'}`
//     );
// }

// getDetails : function () {
//     const age = new Date().getFullYear() - this.dob;

//     console.log(
//         `${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
//     );
// }

console.log(surya);



// using objects, we want to write more code to perform the same calling for every different inputs, 
// for the code repetation, we use class

class person {
    constructor(firstname, lastname, dob, phoneNo, isStudent){
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = dob;
        this.phoneNo = phoneNo;
        this.isStudent = isStudent;
    }

    getStudentStatus(){
        console.log(
            `${this.firstname} is ${this.isStudent ? 'student' : 'Not a student'}`
        );
    }

    getDetails () {
        const age = new Date().getFullYear() - this.dob;

        console.log(
            `${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
        );
    }
}


//Instance or object creation

let billy = new person('billy','buthcer',2000,971232213,false);

billy.getDetails();

billy.getStudentStatus();


let siva = new person('siva','kumar',2003,999499912,true);

siva.getDetails();

siva.getStudentStatus();