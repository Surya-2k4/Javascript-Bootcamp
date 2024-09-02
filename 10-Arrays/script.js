/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets

let name = ['siva', 'surya', 'selya', 'umaa'];

console.log(name);

// Accessing Array Elements:

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);

// Change Value in Array
name[0] = 'donSiva';
console.log(name[0]);

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/

for(let i=0;i<3;i++){
    console.log(name[i]);
}


/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
console.log(name.length);

for(let i=0;i<name.length;i++){
    console.log(name[i]);
}

// More Array Methods

/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/

let box = ['book', 'pen', 'toys'];

box.push('diary'); //stores the value to the end of the array
console.log(box);

/*
Remove element from array
Removes the last element from an array and
returns that element.
*/

box.pop();
console.log(box);

/*
Adds one or more elements to the beginning of an 
array and returns the new length of the array.
*/

box.unshift('map');
console.log(box);

/*
Removes the first element from an array and returns that element.
*/

box.shift();
console.log(box);

// box.shift(); the next first element will be removed from the array  

// Anonymous Functions

box.forEach(function (x,index) {   //index optional
    console.log(x, index);        
});
        //shortcut
box.forEach((x,index) =>{
    console.log(x, index);
});


// Combining Arrays

let containerOne =['Tv', 'Laptop'];
let containerTwo =['PlayStation', 'Table'];

let container = containerOne.concat(containerTwo);
console.log(container);

// - > console.log(containerOne.concat(containerTwo));

// Finding an Element Index, If not found it will return -1

let index = container.indexOf('Tv');
console.log(index);

let searchValue = 'surya';
if(index > 0){
    console.log(searchValue + ' available in the container');
}else{ console.log(searchValue + ' not available in the container');}

// Array with mixed data types
let mixedData = [
    42,
    3.4,
    'surya',
    'karthii',
    true,
    false,
    null,
    undefined,
];

console.log(mixedData);

console.log(mixedData.includes('surya'));
console.log(mixedData.includes(52));
console.log(mixedData.includes(null));


// Array of Employee Objects

let icons = [
    {id :1, name : 'surya', age:25},
    {id :2, name : 'selya', age:20},
    {id :3, name : 'umaa', age:15},
    {id :4, name : 'siva', age:10},
];

console.log(icons);

//printing values using loop

icons.forEach((icons)=>{
    console.log(`Icon Id : ${icons.id}`);
    console.log(`Icon name : ${icons.name}`);
    console.log(`Icon age : ${icons.age}`);
    console.log('---');
 });

//Fliters

let temp = icons.find((x) => x.id == 1);  //finding object using id not the array index
console.log(temp);

let iconsAge = icons.filter((iconsAge) => iconsAge.age >=20);
console.log(iconsAge);

// Map - used for manipulate and retrieve the datat 

let y = icons.map((iconsAge) => {
console.log(
    `Name : ${iconsAge.name}, DOB : ${new Date().getFullYear() - iconsAge.age}` 
);
});

