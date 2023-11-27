const blockContainer = document.querySelector('.block-container');

function populatePage(numBlocks){
    //FIRST empty out block container
    while (blockContainer.firstChild) {
        blockContainer.removeChild(blockContainer.lastChild);
      }
    
    const totalBlocks = numBlocks*numBlocks;
    for (let i=0; i<totalBlocks; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        //Also now calculate width and height for square
        const widthHeight = (960 / numBlocks) - 5;
        square.style.width = widthHeight + "px";
        square.style.height = widthHeight + "px";

        square.addEventListener('mouseover', () => {
            //Do RGB random values here later
            square.style.backgroundColor = 'black';
        });
        
        blockContainer.append(square);
    }
}

const pageButton = document.querySelector('#main-button');
pageButton.addEventListener("click", () => {
    let num = prompt("Please enter the number of blocks you would like the grid to be (in range 0-100)");
    populatePage(num);
});

window.onload = (event) => {
    populatePage(16);
  };