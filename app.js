// PROJECT ETCH-A-SKETCH

// declare variables for DOM elements 
const gridContainer = document.getElementById("grid-container");

const gridUnits = document.getElementsByClassName("grid-unit");

const smallGrid = document.getElementById("144grid");

const mediumGrid = document.getElementById("256grid");

const largeGrid = document.getElementById("1024grid");

let gridSize;

const buttonContainer = document.getElementById("button-container");

// create reusable functions for the two main tasks:
// creating the grid of squares of a size to be determined
function createGrid() {

    for (i = 0; i < gridSize * gridSize; i += 1) {
        const gridDiv = document.createElement("div");
        gridContainer.appendChild(gridDiv);
        gridDiv.className = "grid-unit";
    }
}
// changing the color of the squares when the mouse hovers over
function changeColor() {
    for (let i = 0; i < gridUnits.length; i++) {
        gridUnits[i].onmouseover = function() {
            this.style.backgroundColor = "navy";
        }
    }
}
// on page load a default grid is chosen
window.onload = function() {
    gridSize = 12;
    gridContainer.classList.remove("medium-grid", "large-grid");
    gridContainer.classList.add("small-grid");

    smallGrid.classList.add("button-active");
    mediumGrid.classList.remove("button-active");
    largeGrid.classList.remove("button-active");
    
    createGrid();
    changeColor();
}
// the three sized grids based on user choice
smallGrid.onclick = function() {
    gridContainer.innerHTML = '';
    gridSize = 12;
    gridContainer.classList.remove("medium-grid", "large-grid");
    gridContainer.classList.add("small-grid");

    smallGrid.classList.add("button-active");
    mediumGrid.classList.remove("button-active");
    largeGrid.classList.remove("button-active");

    createGrid();
    changeColor();
}

mediumGrid.onclick = function() {
    gridContainer.innerHTML = '';
    gridSize = 16;
    gridContainer.classList.remove("small-grid", "large-grid");
    gridContainer.classList.add("medium-grid");

    smallGrid.classList.remove("button-active");
    mediumGrid.classList.add("button-active");
    largeGrid.classList.remove("button-active");

    createGrid();
    changeColor();
}

largeGrid.onclick = function() {
    gridContainer.innerHTML = '';
    gridSize = 32;
    gridContainer.classList.remove("small-grid", "medium-grid");
    gridContainer.classList.add("large-grid");

    smallGrid.classList.remove("button-active");
    mediumGrid.classList.remove("button-active");
    largeGrid.classList.add("button-active");

    createGrid();
    changeColor();
}