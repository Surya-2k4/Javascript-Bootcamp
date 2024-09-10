//Input events

const ipname = document.getElementById('name');

const outputName = document.getElementById('name-output');

 
ipname.addEventListener('input', ()=>{
    console.log(ipname);
    outputName.textContent = `Typed Name: ${ipname.value}`;
});


//change event 

const pet = document.getElementById('pet');

const opPet = document.getElementById('selected-pet');

pet.addEventListener('change', () =>{
    opPet.textContent = `Selected pet : ${pet.value}`;
});