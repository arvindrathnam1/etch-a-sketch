let cont = document.querySelector('.grid-container');
drawGrids();

function drawGrids(size=16) {
    removeAllChildren(cont);

    for(let i = 0; i < size*size; i++){
        const item = document.createElement('div');
        item.classList.add('grid-item');
        item.addEventListener('mouseover', () => {
            const red = Math.floor(Math.random() * 256);
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
            item.style.backgroundColor = `rgb(${red},${green},${blue})` ;
        });
        // item.addEventListener('mouseleave', () => {
        //     item.style.backgroundColor = '';
        // });
        cont.appendChild(item);
    }
}

function sizeSet() {
    let size = prompt("Set number of rows and columns", "16");

    cont.style.gridTemplateColumns = "repeat(" + size + ", 1fr)";
    drawGrids(size);
}

function removeAllChildren(node) {
    while(node.firstChild) {
        node.removeChild(node.firstChild);
    }
}