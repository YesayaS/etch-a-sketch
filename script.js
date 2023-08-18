createGrid(4);
function createGrid(size) {
  const grids = document.querySelector(".grids");
  grids.innerHTML = "";
  for (let i = 0; i < size; i++) {
    const gridContainer = document.createElement("div");
    gridContainer.classList.add("grid-container");
    for (let j = 0; j < size; j++) {
      const grid = document.createElement("div");
      grid.classList.add("grid");
      gridContainer.appendChild(grid);
    }
    grids.appendChild(gridContainer);
  }
}

document.querySelector(".grid-size").addEventListener("click", showPopUp);
document
  .querySelector(".change-size")
  .addEventListener("click", changeGridSize);

function showPopUp() {}

function changeGridSize() {
  const newSize = document.querySelector("#new-size").value;
  if (newSize !== "") {
    createGrid(newSize);
  }
}
