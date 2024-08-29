/*
Type Conversion (Manually)

Type Conversion (also known as type casting) is when you explicitly 
convert a value from one type to another. JavaScript provides several function for this purpose.
*/

// Type Conversion  -(Manually by programmers)
console.log('Type Converiosn');


//String to Number
let string = '123'
let number = Number(string);
console.log(typeof(number));
console.log(number);

// Number to String

let num1 = 123;
let str = String(num1);
console.log(typeof(str));
console.log(str);

// Boolean to String

let isMe = true;
str = String(isMe);
console.log(typeof(str));
console.log(str);

// String to Boolean

str = 'bool';  //if any value presents it takes only true 
isMen = Boolean(str);  
console.log(typeof(isMe));
console.log(isMen);

//Parsing Integer and Float

let floatstr = '12.52';
let intnum = parseInt(floatstr); //it removes the decimal values (dataa loss)
console.log(intnum);

let floatnum = parseFloat(floatstr)
console.log(floatnum);  //doesn't remove any deceimal values, print exact value



//Type Coercion  -(Automatically while performing arithmatic operations)
/*
Type Coercion is when javascript automatically converts a value from one tyoe to another during an operation.
This often happens with equallity checks and arithmatic operations.
*/
console.log('Type Coercion');

// String and number

let res = '5' + 2;   //for only addition it concatenates two values
console.log(res);

res = '5' - 2;  // perform arithmatic operation
console.log(res);

res = '5' * 2;
console.log(res);

res = '5' / 2;
console.log(res);


//Boolean to Number  (True - 1) , (False - 0)

res = true + 1;
console.log(res);

res = false + 1;
console.log(res); 

// Coercion occurs in equality check (==). but not in strict equality checks (===).

console.log(1 == '1');

console.log(1 === '1');  //1 ==1 right but type mismatch so print false   (1 -> int === '1' -> string)

console.log(0 === false); // false

console.log(1 === 1 );  // true