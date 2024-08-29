// Truthy and Falsyy

console.log('Truthy and falsyy values');

//Falsy values

console.log(Boolean(0));

console.log(Boolean(undefined));

console.log(Boolean(''));

console.log(Boolean(null));

console.log(Boolean(false));

console.log(Boolean(NaN));  //Not s Number


//Truthy Values

console.log(Boolean(1));

console.log(Boolean(143));

console.log(Boolean(-1));  // -1 also value so its print true

console.log(Boolean('Hello'));

console.log(Boolean(true));

console.log(Boolean([])); // empty array also true

console.log(Boolean({}));  // empty object also true, {} - > denots empty object

console.log(Boolean(function() {}));  // empty function - > true


//example
age = 10
if(age > 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

let hasPermission = false;
if(hasPermission) 
    { console.log("Have Permission");}
else 
    { console.log("Don't have permission");}


