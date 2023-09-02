var firstContainer = document.createElement("div");
firstContainer.setAttribute('class', 'firstContainer');
document.body.appendChild(firstContainer);

const moreSquares = document.createElement('button');
moreSquares.setAttribute('class', 'moreSquares')
firstContainer.appendChild(moreSquares);
moreSquares.textContent = "Add more squares click"


//Main Container for divs, where i flex
var container = document.createElement('div')
container.setAttribute('class', 'container');
document.body.appendChild(container);



//this loop gives me 256 solo divs
for (let i = 0; i < 256; i++) {
     container.innerHTML += '<div class="grids" dataset="grids"></div>';
}

//Gave the looped divs a class
var grids = document.querySelectorAll('.grids');
grids.forEach(el =>
    el.addEventListener("mouseover", function(){
        el.style.backgroundColor = randomHex();
    }))
    



//testing what i click on
/*divGrid.addEventListener('click', (e) => {
    console.log(e);

    e.stopPropagation()
})*/

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

moreSquares.addEventListener('click', addSquare)

let num;
function addSquare() {
    container.innerHTML = "";
    num = prompt("new squares = your number multiplied, max=64")
    if (num > 64){
        return " This is too high";
    }

    let newNum = num * num;

    for (let i = 0; i < newNum; i++) {
        container.innerHTML += '<div class="grids" dataset="grids"></div>';
   }

   var grids = document.querySelectorAll('.grids');
    grids.forEach(el =>
    el.addEventListener("mouseover", function(){
        el.style.backgroundColor = randomHex();
    }))

}