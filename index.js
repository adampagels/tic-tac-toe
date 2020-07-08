const gameBoard = (() => {
  const board = document.getElementById("board");
  const createGameBoard = () => {
    for (let i = 0; i < 9; i++) {
      const gridSquare = document.createElement("div");
      gridSquare.classList.add("grid-Square");
      board.appendChild(gridSquare);
      gridSquare.addEventListener("click", function () {
        gridSquare.textContent = "X";
      });
    }
  };

  createGameBoard();
})();
