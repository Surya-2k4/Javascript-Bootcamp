let x;

x = 20;

let userName = 'surya'; //camelCase


// Incorrect variable names
// let 2surya = 3; invalid var name
// let name@surya = 'surya';

// Reserved keywords  (invalid keywords)
// let new = 'surya'
// let function = 'add';

//Symbols in variable name are invalid

let $name = 'surya';  //allowed (valid)


let a = 10;
console.log(a);
a = 'surya';   //let is genric
console.log(a);


const b = 10;  //we cant again assign any value to b

var name; // also like let type

/*
var keyword we can able to reassign it and also redeclare it
let cannot allow us to redeclare, instead we can reassign
const  doesn't allow us to Reassignment, value is fixed

scope of variable will on functions and loops
var : function scoped
let : block scoped
const : block scoped
*/

/*
wrong methods....

let name = 'surya'
name = 'sesha'
let name = 'raj' //display error

const name = 'surya'
name = 'sesha'

*/