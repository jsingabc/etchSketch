//Main Container for divs, where i flex
var container = document.createElement('div')
container.setAttribute('id', 'container');
document.body.appendChild(container);

//Gave the looped divs a id
var divGrid = document.createElement('div');
divGrid.id = "divGrid";
divGrid.dataset = "divGrid";

//this loop gives me 256 solo divs
for (let i = 0; i < 256; i++) {
     container.innerHTML += '<div id="divGrid" dataset="divGrid"></div>';
}

//atttempt to contact divs solo but failed
let grids = document.getElementById("divGrid");

//testing what i click on
grids.addEventListener('click', (e) => {
    console.log(e);

    e.stopPropagation()
})

// function i pulled online to generate random # for colors
function randomRBG(){
    let r = randomNumber(255);
    let b = randomNumber(255)
    let g = randomNumber(255)
    return [r,g,b];
}

// random number generator
function randomNumber(max) {
    return Math.floor(Math.random()*(max + 1));
}

// function i pulled offline to take RBG function and conver 
// into Hex that give me a usable color
function randomHex() {
    let [r, b, g] = randomRBG();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    
    return "#" + hr + hg + hb;
}