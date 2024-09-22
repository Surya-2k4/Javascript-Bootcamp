/*
Higher-Order Function:
A Function that take other function as arguments or return them as results.
*/

function startEngine(){
    return `Engine is startd!`;
}

//console.log(startEngine());

//this function takes another function as input
//Higher order function
function drive(driverName , engine){

    const message = engine();  // callback function
    
    console.log(`${message} by ${driverName}`);
}

drive('surya', startEngine);

/*
pure function : Function that, given the same input,
will always return the same output and have noo side efffects. 
*/


//Pure Function
function add(a, b){
    return a+b;
}

console.log(add(2,3));
console.log(add(2,3));
console.log(add(2,3));  //return the same op for every call


//Inpure Funtion
let counter = 0;

function increment(value){

        counter += value;
        return counter;
}

console.log(increment(2));
console.log(increment(2)); //return different op for every call (2, 4 ,6)
console.log(increment(2));

