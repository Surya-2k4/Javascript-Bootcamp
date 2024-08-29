/*
Decision Making - if, if else, if..elseif, switch, ternary

*/

//if

let age = 28;

if(age > 18)
console.log("Eligible to vote");


//if..else
age = 10
if(age > 18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote");
}

// if..elseif..else

let time = 15;

if(time <=12 ){
    console.log("Good Morning");
}else if(time <=17 ){
    console.log("Good Afternoon");
}else if(time <= 24){
    console.log("Good Evening");
}
else{
    console.log("Mid night");
}

//Nested info

age = 19;
let g = 'Devotional akka'
if(age > 18){
    if(g == 'Devotional akka'){
        console.log("listen her devotional song");
    }
    else{
        console.log("restricted");
    }
} else{
   console.log("Forgot everything");       
}

// switch
let choice = 'siva';
switch (choice) {
    case 'siva':
        console.log(`${choice} legend`);
        break;
    case 'surya':
        console.log('Bot');
        break;
    default:
        console.log('open eyes while input choice');
}

//ternary operator

let isBoy = true;

let res = isBoy ? 'yes' : 'no';
console.log(res);

isBoy = !true;
    // OR
console.log(isBoy ? 'yes' : 'no' );


