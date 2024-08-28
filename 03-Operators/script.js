/* Operators

They are used to manipulate data and perform operations

1. Arithmatic Operators  
(+) (-) (*) (/) (%) (++) (--) 
*/
console.log('Add', 10 + 20);
console.log('Sub', 10 - 20);
console.log('mul', 10 * 20);
console.log('mod', 10 % 20);
console.log('div', 10 / 20);
let t=10;
console.log('increment of 10 :',t++ );
t=10;
console.log('decrement of 10 :',t--);


// 2. Assignment Operators  - used to assign values to variables
// (=) (+=) (-=) (*=) (/=) (%=) (**=)

let n = 10;
console.log(n);

n+=10;
console.log(n);

n-=10;
console.log(n);

n*=10;
console.log(n);

n/=10;
console.log(n);

n%=10;
console.log(n);

n**=10;
console.log(n);

// 3. Comparison Operators  - used to compare two variables 
// (==) (===) (!=) (!==) (>) (<) (>=) (<=)

let a = 5
let b = 5

console.log('equal to ',a==b);
console.log('strictly equal to ',a===b);
console.log('not equal to ',a!=b);
console.log('strictly not equal to ',a!==b);
console.log('greater than ',a>b);
console.log('less than ',a<b);
console.log('greaterthan equal to ',a>=b);
console.log('lesserthan equal to ',a<=b);


// 4. Logical Operators  - used to combine multiple conditions
// (&&) (||) (!)

console.log('AND ',a && b);
console.log('OR ',a || b);
console.log('NOT ',!true);


//5. String Operators

console.error('Hello Surya');

console.log('JavaScrii');

//String concatenation
let str = 'Java' + 'Bootcamp';
console.log(str);

str += 'Java Bootcamp';
console.log(str);

//String with differnt quotes

let message = "I'm " + 'getting' + "'better' " + 'day by day';
console.log(message);

console.log('I\'m Surya');


//String concatenation with object properties

let obj = {
    id : 1,
    name : 'surya',
    age : 20,
    Grade : 'A+'
} 

console.log('The id '+obj.id + ' will having name of ' + obj.name + " and age of " +obj.age + ' with Grade of '+ obj.Grade );

//Template literal

console.log(`Welcome ${obj.name} your user id is ${obj.id}`);

