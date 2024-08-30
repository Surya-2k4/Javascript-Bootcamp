console.log('Functions.............');
/*
Functions are reusable block of code designed to perform specific task,
They help in organizing code, avoid repetition and improving readability and maintainability.

if(condition){
....code block....
}

Types of Functions:

1.Function Declaration
2.Function Expression
3.Arrow Function
4.Anonymous Function (On Arrows)


// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

 function FunctionName(){
    //code block
}

displayMessage();  // script allows us to call the function before func define,, this process called Hoisting

function displayMessage(){
    console.log("We are Developers..");
}

//calling function
displayMessage(); 

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/
 

// function FunctionName(parameter){
//     //code block
// }
// FunctionName(arguments)


function dispName(name){
    console.log('Helloo, '+name);
}
dispName('Surya');

//multiple parameter
function add(a,b,c){
    console.log(a+b+c);
}
add(2,4,6);


// Default Parameter

function printer(color='Black'){
 console.log(`Print document in ${color} color`);
}
printer('Blue');
printer();

// Function with Return Type

function add(a,b){
    return a + b;
}

console.log(add(2,6));

///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

const morning = function(){
    console.log("Gud morning everyone");
}

morning();

// With Argument

//morningWithName('Surya') - > Error

const morningWithName = function(name){
    console.log('Gud morning '+name);
}
morningWithName('Harini');

// Function Expression with Return Type

const diff = function(a,b){
    return a-b;
}
console.log(diff(4,2));


///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.

const FunctionNameee = () => {
    //code block
}
FunctionNameee();

const greet = () => {
    console.log("Wellcome");
}
greet();

// With Argument

const evening=(name)=>{
    console.log(`Evening ${name}`);
}
evening('jessy');

// Arrow Function with Return Type

const multi = (a,b) => {
        return a*b;
}
console.log(multi(5,5));

// Shorter Way

const multii = (a,b) => a*b;
console.log(multi(2,5));

let oddOreven = (n) => n%2==0 ? 'even' : 'odd';  
console.log(oddOreven(5));


//Function Calling Other Function

function WelcomeShopper(name){
    console.log(`Welcome, ${name}! Enjoy your shopping experience.`);
}

function main(name){
// let shopperName = name;
    WelcomeShopper(name);
}
main('Raju');

//Anonymous Functions: Later on Course on Arrays

// setTimeout(() => {
// console.log("Anonymous Function Executed");
// }, 2000);  //it will executed after 2 seconds

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

function demo(){
    var a = 20;

    console.log(a);

    if(true) {
        var x = 'var';
        let y = 'let';
        const z = 'const';

        console.log(x);
        console.log(y);
        console.log(z);
    }

    console.log(x);
    //console.log(y);
    console.log(z);

}

demo();

//console.log(y);
