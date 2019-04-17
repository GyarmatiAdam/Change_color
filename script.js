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

///////////////////////////random hex color generator///////////////////////////////////////////////

//make an array, which contain hex color values
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
//bodyBackground already targeted
const col = document.querySelector('.col');

hexBtn.addEventListener('click', getHex);

function getHex (){
    let hexCol = '#';//hex color starts with doublecross 
                    //and has 6 caracters from 0 to 9 and A to F
    
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
    }

    bodyBackground.style.backgroundColor = hexCol;
    col.innerHTML = hexCol;
}