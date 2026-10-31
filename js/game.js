// Game rules for TicTime. No DOM code lives here.
/*
const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 7],
];

function createEmptyBoard() {
  return Array(9).fill(null);
}

function nextPlayer(player) {
  return player === 'X' ? 'O' : 'X';
}

function getGameResult(board) {
  if (board.every((cell) => cell !== null)) {
    return { status: 'draw', winner: null, line: null };
  }
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { status: 'win', winner: board[a], line: [a, b, c] };
    }
  }
  return { status: 'playing', winner: null, line: null };
}
*/
// Corrected winning combinations for a 3x3 grid (including the proper anti-diagonal [2, 4, 6])
const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]            // Diagonals
];

function checkWin() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            // Highlight all 3 squares of the winning combination
            [a, b, c].forEach(index => {
                document.querySelectorAll('.cell')[index].classList.add('winning-cell');
            });
            return board[a]; // Returns 'X' or 'O'
        }
    }
    return null;
}