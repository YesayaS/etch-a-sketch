const body = document.body;
for (let i = 0; i < 4; i++) {
  const gridContainer = document.createElement("div");
  gridContainer.classList.add("grid-container");
  for (let j = 0; j < 4; j++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.innerHTML = `${i}, ${j}`;
    gridContainer.appendChild(grid);
  }
  body.appendChild(gridContainer);
}
