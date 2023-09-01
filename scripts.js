var container = document.createElement('div')
container.setAttribute('id', 'container');
document.body.appendChild(container);

var divGrid = document.createElement('div');
divGrid.id = "divGrid";
divGrid.dataset = "divGrid";

for (let i = 0; i < 256; i++) {
     container.innerHTML += '<div id="divGrid" dataset="divGrid"></div>';
}

let grids = document.getElementById("divGrid");

grids.addEventListener('click', (e) => {
    console.log(e);

    e.stopPropagation()
})


function randomRBG(){
    let r = randomNumber(255);
    let b = randomNumber(255)
    let g = randomNumber(255)
    return [r,g,b];
}


function randomNumber(max) {
    return Math.floor(Math.random()*(max + 1));
}


function randomHex() {
    let [r, b, g] = randomRBG();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');
    
    return "#" + hr + hg + hb;
}