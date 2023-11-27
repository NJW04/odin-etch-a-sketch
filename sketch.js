const blockContainer = document.querySelector('.block-container');

for (let i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });

    blockContainer.append(square);
}

const pageButton = document.querySelector('#main-button');
pageButton.addEventListener("onclick", () => {
    let num = prompt("Please enter the number of blocks you would like the grid to be (in range 0-100)");
    populatePage(num);
});

//TODO when the button is clicked, according to numBlocks, populate page with it
function populatePage(numBlocks){
    alert("i have been summoned");

}