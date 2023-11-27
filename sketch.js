const blockContainer = document.querySelector('.block-container');

for (let i=0; i<256; i++){
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    });
    square.addEventListener('mouseout', () => {
        square.style.backgroundColor = 'pink';
    });

    blockContainer.append(square);
}