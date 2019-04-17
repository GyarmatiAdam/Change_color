//choose or select an element->make variable
const colorBtn = document.querySelector('.colorBtn');
const bodyBackground = document.querySelector('body');

//create an array, which holds the background colors
const colors = ['red', 'green', 'pink', 'blue'];

//add an event listener, which changes the color by clicing the button
//eventlistener has event an callback function
colorBtn.addEventListener('click', changeColor);

//create callback function
function changeColor (){
    let random = Math.floor(Math.random() * colors.length)
    bodyBackground.style.backgroundColor = colors[random];
}