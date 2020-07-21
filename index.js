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

  const resetGameBoard = () => {
    for (let i = 0; i < 9; i++) {
      board.children[i].textContent = "";
    }
  };

  return { createGameBoard, resetGameBoard };
})();

const gameController = (() => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
})();
