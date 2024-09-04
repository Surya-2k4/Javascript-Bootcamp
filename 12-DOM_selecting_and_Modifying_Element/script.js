/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/

//1.getElementById
//Select a single element based on unique id.

const heading = document.getElementById('main-heading');
console.log(heading);

console.log(heading.innerHTML);   //it display the inner tags like <p> in the console

console.log(heading.textContent);  //it only display the text message does'nt print tags like <p>

//changing values
heading.innerHTML = 'See, Im a Monster';

heading.textContent = 'See, Im Moon';

function changeHeading(){
    setTimeout(() => {
        heading.textContent = 'see, Im gonna capture you'
    }, 4000);
}

changeHeading();


//2.getElementsByClassName  - select multiple elements

const listItems = document.getElementsByClassName('list-item');
console.log(listItems);

console.log(listItems.item(0).innerHTML);

for(let i=0;i< listItems.length;i++){
    console.log(listItems.item(i).textContent);
}

for(let i=0; i < listItems.length;i++ ){
    listItems.item(i).innerHTML = `Modified items ${i +1 }`;
}

const itemsArray = Array.from(listItems);

itemsArray.forEach((item) => {
    console.log(item.textContent);
})

//3.getElementsByTagName

const contents = document.getElementById('content').getElementsByTagName('p');

console.log(contents);

function contentItemStyle() {
    contents.item(0).style.color = 'red';
    contents.item(1).style.fontSize = '14px';
    contents.item(2).style.color = 'blue';
    contents.item(3).style.backgroundColor = 'pink';
}

contentItemStyle();

//for all contents

function contentStyle (){
    for(let i=0;i< contents.length;i++){
        contents.item(i).style.paddingBottom = '10px'
    }
}

contentStyle();

//Rwmove element from DOM
const message = document.getElementById('message');

setTimeout(()=>{  //
    message.remove();
}, 3000);

//Adding element to DOM

const newPara = document.createElement('p');

newPara.textContent = 'This is a new BOss added to DOM dynamically';

newPara.style.color = 'green';

newPara.classList.add('newPara');  // add css class style

const container = document.getElementById('main');

/*
appendChild(): Adds a new element as the last child of the program element.
insertBefore(): Inserts a new element before an existing child element.
insertAdjacement(): Inserts HTML content at a specified position relative to an 
*/

//container.appendChild(newPara);


//container.insertBefore(newPara);

container.insertAdjacentHTML('afterbegin','<p>see me After Main Begin</p>');
container.insertAdjacentHTML('afterend','<p>see me After end</p>');
container.insertAdjacentHTML('beforebegin','<p>see me before begin</p>');
container.insertAdjacentHTML('beforeend','<p>see me before Main end</p>');
 
//4.querySelector

// Sellecting  elements using queryselector (work both class or id more flexibility)

const subTitle = document.querySelector('#subtitle');

console.log(subTitle);
console.log(subTitle.textContent);

setTimeout(() => {
    subTitle.textContent = 'New Subtitle from Sun';
},4000);

//5.querySelectorAll
//Selecting multiple elemets using querySelectorAll

const listItemsQuery =  document.querySelectorAll('.list-item');

console.log(listItemsQuery);

listItemsQuery.forEach((item, index) => {
    item.textContent = `Modified iten ${index +2}`;
});