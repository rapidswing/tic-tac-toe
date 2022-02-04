import { BOARD_RESULTS, BOARD_RESULT_MODES, DIFFICULTIES, MARKS } from "utilities/constants";

const areMovesLeft = (board) => {
  for (let i = 0; i <= 8; i++) {
    if (board[i] === ' ')
      return true;
  }
  return false;
}

export const getBoardResult = (board, mode, cpuMark = null) => {
  // check rows
  for (let row = 0; row < 9; row += 3) {
    if (board[row] !== ' ' && board[row] === board[row + 1] && board[row + 1] === board[row + 2]) {
      if (mode === BOARD_RESULT_MODES.TYPE) return board[row];
      if (mode === BOARD_RESULT_MODES.SCORE) return board[row] === cpuMark ? 10 : -10;
    }
  }
  // check columns
  for (let col = 0; col < 3; col++) {
    if (board[col] !== ' ' && board[col] === board[col + 3] && board[col + 3] === board[col + 6]) {
      if (mode === BOARD_RESULT_MODES.TYPE) return board[col];
      if (mode === BOARD_RESULT_MODES.SCORE) return board[col] === cpuMark ? 10 : -10;
    }
  }
  // check diagonals
  if (board[0] !== ' ' && board[0] === board[4] && board[4] === board[8]) {
    if (mode === BOARD_RESULT_MODES.TYPE) return board[0];
    if (mode === BOARD_RESULT_MODES.SCORE) return board[0] === cpuMark ? 10 : -10;
  }
  if (board[2] !== ' ' && board[2] === board[4] && board[4] === board[6]) {
    if (mode === BOARD_RESULT_MODES.TYPE) return board[2];
    if (mode === BOARD_RESULT_MODES.SCORE) return board[2] === cpuMark ? 10 : -10;
  }
  // check for tie
  if (!areMovesLeft(board)) {
    if (mode === BOARD_RESULT_MODES.TYPE) return BOARD_RESULTS.TIE;
    if (mode === BOARD_RESULT_MODES.SCORE) return 0;
  }
  if (mode === BOARD_RESULT_MODES.TYPE) return BOARD_RESULTS.CONTINUE;
  if (mode === BOARD_RESULT_MODES.SCORE) return 0;
}

function minMax(board, cpuMark, depth, isMax) {
  let score = getBoardResult(board, BOARD_RESULT_MODES.SCORE, cpuMark);
  if (areMovesLeft(board) === false) return 0;
  if (score === 10 || score === -10) return score;
  if (isMax) {
    let best = -1000;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === ' ') {
        board[i] = cpuMark;
        best = Math.max(best, minMax(board, cpuMark, depth + 1, !isMax));
        board[i] = ' ';
      }
    }
    return best;
  } else {
    let best = 1000;
    for (let i = 0; i <= 8; i++) {
      if (board[i] === ' ') {
        board[i] = cpuMark === MARKS.X ? MARKS.O : MARKS.X;
        best = Math.min(best, minMax(board, cpuMark, depth + 1, !isMax));
        board[i] = ' ';
      }
    }
    return best;
  }
}

export const moveWithDifficulty = (board, cpuMark, difficulty) => {
  // EASY: random moves
  // NORMAL: 50% perfect moves
  // HARD: 80% perfect moves
  switch (difficulty) {
    case DIFFICULTIES.EASY: {
      return findRandomMove(board);
    }
    case DIFFICULTIES.NORMAL: {
      let chance = Math.random() < 0.5;
      if (chance) {
        return findBestMove(board, cpuMark);
      } else {
        return findRandomMove(board);
      }
    }
    case DIFFICULTIES.HARD: {
      let chance = Math.random() < 0.8;
      if (chance) {
        return findBestMove(board, cpuMark);
      } else {
        return findRandomMove(board);
      }
    }
    default: {
      return null;
    }
  }
}

function findRandomMove(board) {
  let availableMoves = [];
  board.forEach((cell, index) => {
    if (cell === ' ') {
      availableMoves.push(index);
    }
  });
  return availableMoves[Math.floor(Math.random() * availableMoves.length)];
}


function findBestMove(tempBoard, cpuMark) {
  let bestMoveIndex = -1;
  let bestVal = -1000;
  
  let board = [...tempBoard];
  for (let i = 0; i <= 8; i++) {
    if (board[i] === ' ') {
      board[i] = cpuMark;
      let moveVal = minMax(board, cpuMark, 0, false);
      board[i] = ' ';
      if (moveVal > bestVal) {
        bestMoveIndex = i;
        bestVal = moveVal;
      }
    }
  }
  return bestMoveIndex;
}