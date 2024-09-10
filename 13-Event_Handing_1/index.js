const button = document.getElementById('button');

console.log(button);

// it takes 2 input : 1- event 2- anonymous function

button.addEventListener('click',()=>{
   console.log('Button clicked');
   alert('Button clicked');
});

//mouse hover events 

button.addEventListener('mouseover',()=>
{
    button.classList.add('buttonHover');
});;

button.addEventListener('mouseout',()=>
{
        button.classList.remove('buttonHover');
});

//key pressed event

// document.addEventListener('keydown',(event)=>{
//     if(event.key == 'Enter'){
//         alert('Enter key pressed.');
//     }
// });

// document.addEventListener('keypress',(event)=>{
//     if(event.key == 'Enter'){
//         alert('Enter key pressed.');
//     }
// });

document.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter'){
        alert('Enter key pressed.');
    }
});

document.addEventListener('keydown',(event)=>{
    if(event.shiftKey){
        alert('Shift key pressed');
    }

    if(event.ctrlKey){
        alert('Ctrl key pressed');
    }

    if(event.key >='a' && event.key <='z'){
        alert(`alphabet key " ${event.key} " pressed. `);
    }

    if(event.key >='0' && event.key <='9'){
        alert(`number key " ${event.key} " pressed. `);
    }


})



