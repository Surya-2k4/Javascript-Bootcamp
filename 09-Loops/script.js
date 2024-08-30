// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example
//using let - block scoped, not accessible outside of the loop
for(let i=0;i<5;i++){
    console.log(`Iteration ${i}\n`);
}

//using var - not good pracrice

//Looping Backwards
for(let i=5 ; i>0;i--){
    console.log(`Backward Iteration ${i}\n`);
}

//Nested Loop

for(let i=1;i<=3;i++){
    console.log('Outer loop');
    for(let j=1;j<=3;j++){
        console.log('Inner loop');
    }
}

// While Loop Example

let n = 1;
while(n<=5){
    console.log(n);
    n++;
}

// Do While Loop Example

do{
    let n = 1;
    console.log(n);
    n++;
}while(n<=5)