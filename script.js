//creates length * length grid of squares;
function createSquares(length) {
    size = length;
    //checks for correct length
    if (length > 64 || length < 1) {
        alert("Error! Please choose a number between 1 and 64");
        return;
    }
    for (let i = 0; i < length * length; i++) {
        let box = document.createElement('div');
        box.classList.add('square');
        div.appendChild(box);
    }
    div.setAttribute('style',` grid-template-columns: repeat(${length},1fr); grid-template-rows: repeat(${length}, 1fr)`);
}


//generates a random color;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


//sets bg color of squares and adds event listener for all squares created;
function changeColor(color) {
    const squares = document.querySelectorAll('div > .square');
    squares.forEach(square => {
        square.setAttribute('style', `background-color: ${color}`)
        square.addEventListener('mouseover', e => {
            //should make a new func??
            let color = getRandomColor();
            random ? square.setAttribute('style', `background-color: ${color}`) : square.setAttribute('style', 'background-color: #B71C1C');
        });
    })
}


//change background color to random;
function randomcolor() {
    random = !random;
}

//resets the grid back to it's original color;
function reset() {
    changeColor('#212121');
}

//creates grid and adds event listener;
function start() {
    while (div.firstChild) div.removeChild(div.firstChild); //clears all the divs inside wrapper;
    const length = prompt('Please choose the size of the grid');
    createSquares(length);
    changeColor('#212121');
}


//selects the wrapper element;
let size = 0;
let random = false;
const div = document.querySelector('.wrapper');




