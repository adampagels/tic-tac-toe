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

  return { createGameBoard, resetGameBoard, board };
})();

const gameController = (() => {
  const moveList = [];
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

  gameBoard.board.addEventListener("click", function (e) {
    const index = Array.prototype.indexOf.call(this.children, e.target);
    !moveList.includes(index) && moveList.push(index);
    for (let i = 0; i < winConditions.length; i++) {
      if (winConditions[i].every((elem) => moveList.indexOf(elem) > -1)) {
        alert("you win");
      }
    }
  });
  gameBoard.createGameBoard();
})();
