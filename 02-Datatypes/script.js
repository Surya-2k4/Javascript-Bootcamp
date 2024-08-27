/* Datatypes
 
Primitive Datatype
    Number, String, Boolean, Undefined, Null, Symbole, Big Int

Non Primitive Datatype
    Object, Array, Function, Date

Javascript is Dynamic typing

*/ 
//Primitive-Datatype

// Number - Represents Both int and floating numbers
let num = 10;
console.log(num);
console.log(typeof(num)); // prints number

// String
let str = 'surya';
console.log(str);
console.log(typeof(str)); // prints string 

//boolean 
let isActive = true;        //only true or false value will be assigned 
console.log(isActive);
console.log(typeof isActive);

//undefined
let car;    // nothing will be assigned, OP will be undefined
console.log(car); 

//null
let box = null;   //null is a value that is assigned to box
console.log(box);

//BigInt
let largeNumber = BigInt(23242423232424);
      //or
let larNumber = 4343434343564646646n; 



//Non-Primitive Data Types

/*
Represents a collection of properties, each containig of a key (usually a string)
and a value (which can be any data type, including another object).
*/

//1.Object - key pair value

let person = {
    name : 'Surya',
    age : 20,
    isEmployed : true,
};
console.log(person);
console.log(person.age);
console.log(person.isEmployed);

//empty object
let emptyObj = {};
console.log(emptyObj);


//2.Array
//A special type of object used for storing ordered collection of data.

let numbers = [1,2,3,4,5];
console.log(numbers);

let mixed = [1,"surya",true,null];

//3.Functions
//A special type of object that is callable and can perform an action

function push(){
    console.log("You are exposed..:)");
}

push();

//4.Date  - A built-in object for handling dates and times

let now = new Date();
console.log(now);



