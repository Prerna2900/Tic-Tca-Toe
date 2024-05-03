let currentPlayer = "X";
let board = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;

function checkWinner() {
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let condition of winningConditions) {
    const [a, b, c] = condition;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.includes("")) return null;

  return "draw";
}

function handleMove(cellIndex) {
  if (!gameActive || board[cellIndex] !== "") return;

  board[cellIndex] = currentPlayer;
  document.getElementById(`message`).textContent = "";
  document.getElementById(`board`).children[cellIndex].textContent =
    currentPlayer;

  const winner = checkWinner();
  if (winner) {
    if (winner === "draw") {
      document.getElementById(`message`).textContent = "It's a draw!";
    } else {
      document.getElementById(`message`).textContent = `${winner} wins!`;
    }
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function resetGame() {
  currentPlayer = "X";
  board = ["", "", "", "", "", "", "", "", ""];
  gameActive = true;
  document.getElementById(`message`).textContent = "";
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.textContent = ""));
}
