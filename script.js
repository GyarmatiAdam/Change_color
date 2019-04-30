const colorBtn = document.querySelector('.colorBtn');
const bodyBackground = document.querySelector('body');

//array, which holds the background colors
const colors = ['red', 'green', 'pink', 'blue'];

colorBtn.addEventListener('click', changeColor);

//randob color picker function
function changeColor (){
    let random = Math.floor(Math.random() * colors.length)
    bodyBackground.style.backgroundColor = colors[random];
}

///////////////////////////random hex color generator///////////////////////////////////////////////

//array, which contain hex color values
const hexNumbers = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexBtn = document.querySelector('.hexBtn');
const col = document.querySelector('.col');

hexBtn.addEventListener('click', getHex);

function getHex (){

//hex color starts with doublecross 
    let hexCol = '#';
//it has 6 caracters from 0 to 9 and A to F    
    for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
    }

    bodyBackground.style.backgroundColor = hexCol;
    col.innerHTML = hexCol;
}