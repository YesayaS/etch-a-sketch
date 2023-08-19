createGrid(4);
document.querySelector(".grid-size").addEventListener("click", showPopUp);
document
  .querySelector(".change-size")
  .addEventListener("click", changeGridSize);
const popup = document.querySelector(".popup-form");
const gridSize = document.querySelector(".grid-size");

popup.style.display = "none";

gridSize.addEventListener("click", showPopUp);

function showPopUp() {
  console.log(popup.style.display);
  popup.style.display = popup.style.display === "none" ? "flex" : "none";
}

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

function changeGridSize() {
  let newSize = document.querySelector("#new-size").value;
  if (newSize > 100) {
    newSize = 100;
  }
  if (newSize !== "") {
    createGrid(newSize);
  }
}
