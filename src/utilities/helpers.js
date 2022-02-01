import { BOARD_RESULTS, BOARD_RESULT_MODES, MARKS } from "utilities/constants";

export const getAvailableMoves = (board) => {
  let newAvailableMoves = [];
  board.forEach((cell, index) => {
    if (cell === ' ') {
      newAvailableMoves.push(index);
    }
  });
  return newAvailableMoves;
}

export const getCpuMoveIndex = (availableBoard) => {
  return availableBoard[Math.floor(Math.random() * availableBoard.length)];
}

const numberOfAvailableMoves = (availableMoves) => availableMoves.length;

export const getBoardResult = (board, mode) => {
  // check rows
  for (let row = 0; row < 9; row += 3) {
    if (board[row] !== ' ' && board[row] === board[row + 1] && board[row + 1] === board[row + 2]) {
      if (mode === BOARD_RESULT_MODES.TYPE) return board[row];
      if (mode === BOARD_RESULT_MODES.SCORE) return board[row] === MARKS.X ? 10 : -10
    }
  }
  // check columns
  for (let col = 0; col < 3; col++) {
    if (board[col] !== ' ' && board[col] === board[col + 3] && board[col + 3] === board[col + 6]) {
      if (mode === BOARD_RESULT_MODES.TYPE) return board[col];
      if (mode === BOARD_RESULT_MODES.SCORE) return board[col] === MARKS.X ? 10 : -10
    }
  }
  // check diagonals
  if (board[0] !== ' ' && board[0] === board[4] && board[4] === board[8]) {
    if (mode === BOARD_RESULT_MODES.TYPE) return board[0];
    if (mode === BOARD_RESULT_MODES.SCORE) return board[0] === MARKS.X ? 10 : -10;
  }
  if (board[2] !== ' ' && board[2] === board[4] && board[4] === board[6]) {
    if (mode === BOARD_RESULT_MODES.TYPE) return board[2];
    if (mode === BOARD_RESULT_MODES.SCORE) return board[2] === MARKS.X ? 10 : -10
  }
  // check for tie
  if (numberOfAvailableMoves(board) === 0) {
    if (mode === BOARD_RESULT_MODES.TYPE) return BOARD_RESULTS.TIE;
    if (mode === BOARD_RESULT_MODES.SCORE) return 0;
  }
  if (mode === BOARD_RESULT_MODES.TYPE) return BOARD_RESULTS.CONTINUE;
  if (mode === BOARD_RESULT_MODES.SCORE) return 0;
}

