const blockContainer = document.querySelector('.block-container');

function populatePage(numBlocks){
    //First empty out block container
    while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.lastChild);
      }
    
    const totalBlocks = numBlocks*numBlocks;
    for (let i=0; i<totalBlocks; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        const widthHeight = (960 / numBlocks);
        square.style.width = widthHeight + "px";
        square.style.height = widthHeight + "px";

        square.addEventListener('mouseover', () => {
            //Extra content rainbow colours
            square.style.backgroundColor = 'rgb(' + randomRGBNumber() + ',' + randomRGBNumber() + ',' + randomRGBNumber() + ')';
        });
        
        blockContainer.append(square);
    }
}

const pageButton = document.querySelector('#main-button');
pageButton.addEventListener("click", () => {
    let num = prompt("Please enter the number of blocks you would like the grid to be (in range 0-100)");
    if ((num <= 100) && (num > 0)){
        populatePage(num);
    }else{
        alert("Please enter a valid NUMBER, from 0-100 (not including 0)");
    }

});

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearBoard);

const blackButton = document.querySelector('#black-button');
blackButton.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    const squareArray = Array.from(allSquares);
    for (const curSquare of squareArray) {
        curSquare.removeEventListener('mouseover', () => {
            curSquare.style.backgroundColor = 'rgb(' + randomRGBNumber() + ',' + randomRGBNumber() + ',' + randomRGBNumber() + ')';
        });

        curSquare.addEventListener('mouseover', () => {
            curSquare.style.backgroundColor = 'black';
        });
    }
});

const rgbButton = document.querySelector('#rgb-button');
rgbButton.addEventListener('click', () => {
    const allSquares = document.querySelectorAll('.square');
    const squareArray = Array.from(allSquares);
    for (const curSquare of squareArray) {
        curSquare.removeEventListener('mouseover', () => {
            curSquare.style.backgroundColor = 'black';
        });
        
        curSquare.addEventListener('mouseover', () => {
            curSquare.style.backgroundColor = 'rgb(' + randomRGBNumber() + ',' + randomRGBNumber() + ',' + randomRGBNumber() + ')';;
        });
    }
});

window.onload = (event) => {
    populatePage(16);
  };

  function randomRGBNumber(){
    return Math.floor(Math.random() * 256);
  }

  function clearBoard(){
    const allSquares = document.querySelectorAll('.square');
    const squareArray = Array.from(allSquares);
    for (const curSquare of squareArray) {
        curSquare.style.backgroundColor = 'white';
    }
  }