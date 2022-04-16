const DEFAULT_SIZE = 16;

let gridSize = DEFAULT_SIZE

const container = document.getElementById('container');

let mousedown = false
document.body.onmousedown = () => (mousedown = true)
document.body.onmouseup = () => (mousedown = false)

function createGrid(gridSize) {
    // container.style.setProperty('--grid-rows', gridSize);
    // container.style.setProperty('--grid-cols', gridSize);
    container.style.gridTemplateColumns = `repeat(${gridSize}, 2fr)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 2fr)`;
    for (i = 0; i < (gridSize * gridSize); i++) {
        const cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell);
    };
};

function changeColor(e) {
    if (e.type === 'mouseover' && !mousedown) return;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;
};

function clearGrid() {
    container.innerHTML = '';
    // const gridCells = document.querySelectorAll('.grid-cell');
    // gridCells.forEach( (gridCell) => gridCell.style.backgroundColor = 'white');
}

function reloadGrid() {
    clearGrid();
    createGrid(gridSize, gridSize);
}

const clearGridBtn = document.querySelector('#clear-grid');
clearGridBtn.addEventListener('click', clearGrid);

const gridSizeInput = document.getElementById('grid-size');

gridSizeInput.addEventListener('change', (e) => {
    if (e.target.value <= 100) {
        gridSize = e.target.value;
    };

    reloadGrid();
});

window.onload = () => {
    createGrid(DEFAULT_SIZE)
};