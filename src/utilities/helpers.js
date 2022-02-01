import { BOARD_RESULTS, MARKS } from "utilities/constants";

export const getAvailableMoves = (board) => {
  let newAvailableMoves = [];
  board.forEach((cell, index) => {
    if (cell === ' ') {
      newAvailableMoves.push(index);
    }
  });
  return newAvailableMoves;
}

export const getBoardResult = (board) => {
  // check rows
  for (let row = 0; row < 9; row += 3) {
    if (board[row] !== ' ' && board[row] === board[row + 1] && board[row + 1] === board[row + 2]) {
      return board[row];
    }
  }
  // check columns
  for (let col = 0; col < 3; col++) {
    if (board[col] !== ' ' && board[col] === board[col + 3] && board[col + 3] === board[col + 6]) {
      return board[col];
    }
  }
  // check diagonals
  if (board[0] !== ' ' && board[0] === board[4] && board[4] === board[8]) {
    return board[0];
  }
  if (board[2] !== ' ' && board[2] === board[4] && board[4] === board[6]) {
    return board[2];
  }
  // check for tie
  if (getAvailableMoves(board).length === 0) {
    return BOARD_RESULTS.TIE
  }
  return BOARD_RESULTS.CONTINUE;
}