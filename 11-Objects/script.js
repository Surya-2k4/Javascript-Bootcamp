let person = {
    name : 'surya',
    age : 20,
    isHuman : true,         //key pair value (left -> key ) () right -> value)
}

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isHuman);

// Adding a new property
person.city = 'Tiruppur';
console.log(person);

// Modifying an existing property

person.age = 22;
console.log(person);

// Object with method

let car = {
    brand : 'Toyota',
    model : 'Supraa',
    year : 2010,
    displayInfo : function() {
        return `${this.year} ${this.brand} ${this.model}`;
    },
}

console.log(car); //prints all the fields except function

console.log(car.displayInfo());  //calling the function 

// Destructuring assignment

let student = {
    name : 'siva',
    age : 21,
    dept : 'MCA',
}

// for easily access the object attributes
let {name, age, dept} = student;

console.log(name);
console.log(age);
console.log(dept);

//Nested Complex Objects

let restaurant = {
    name : 'Chutney spot',
    location : 'Tiruppur',
    owner : {
        name : 'surya',
        age : 20,
        contact : {
            email : 'saaptuponga@gmail.com',
            mob : '2424-143-9791', 
        },
    },
    menu : [
        {dish : 'Masala Dosa', price :50 , isSpicy : true},
        {dish : 'poori', price :40 , isSpicy : true},
        {dish : 'Pongal', price :45 , isSpicy : false},
    ],
};

console.log(restaurant);

// Accessing properties of the nested objects

console.log(`Welcome to ${restaurant.name} in ${restaurant.location}`);

console.log(`Owned by ${restaurant.owner.name} his age ${restaurant.owner.age}`);

console.log(`Contact by ${restaurant.owner.contact.email} or ${restaurant.owner.contact.mob}`);

//Accessing array 
restaurant.menu.forEach((item) =>
{
    console.log(`${item.dish}: Rs.${item.price} (${item.isSpicy ? 'Spicy' : 'Not Spicy'})`);
});

// Destructure owner object

let {
    name : ownerName,
    age : ownerAge,
    contact : {email : ownerEmail, phone : mob}, 
} = restaurant.owner;

// Output details about the restaurant

console.log(`Owned by ${ownerName}, age ${ownerAge}`);
console.log(`Conatct ${ownerEmail}, ${mob}`);



// Output the menu items using destructuring within forEach

restaurant.menu.forEach(({dish,price,isSpicy}) => {
    console.log(`${dish} : Rs.${price} (${isSpicy ? 'Spicy' : 'Not Spicy'})`);
})