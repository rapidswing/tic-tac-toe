import { createSlice } from "@reduxjs/toolkit";

import { getBoardResult } from "utilities/helpers";

import { BOARD_RESULTS, BOARD_RESULT_MODES, DIFFICULTIES, MARKS, MODAL_STATES, PLAYERS, STATUS } from "utilities/constants";

const initialState = {
  board: [...Array(9).fill(' ')],
  currentTurn: MARKS.X,
  difficulty: DIFFICULTIES.EASY,
  modalState: MODAL_STATES.NONE,
  selectedMark: MARKS.X,
  status: STATUS.INITIAL_GAME_LOAD,
  opponent: null,
  winsX: 0,
  winsO: 0,
  ties: 0
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    addMarkToBoard: (state, action) => {
      let index = action.payload;
      if (state.board[index] !== ' ') return;  // move is invalid
      state.board[index] = state.currentTurn;
      let result = getBoardResult(state.board, BOARD_RESULT_MODES.TYPE);
      switch (result) {
        case BOARD_RESULTS.X: {
          state.winsX++;
          state.status = STATUS.GAME_OVER;
          state.modalState = MODAL_STATES.QUIT_GAME;
          return;
        }
        case BOARD_RESULTS.O: {
          state.winsO++;
          state.status = STATUS.GAME_OVER;
          state.modalState = MODAL_STATES.QUIT_GAME;
          return;
        }
        case BOARD_RESULTS.TIE: {
          state.ties++;
          state.status = STATUS.GAME_OVER;
          state.modalState = MODAL_STATES.QUIT_GAME;
          return;
        }
        default: {
          break;
        }
      }
      // the game isn't over, change the turn
      state.currentTurn = state.currentTurn === MARKS.X ? MARKS.O : MARKS.X;
      // determine if the CPU or a player is next
      if (state.opponent === PLAYERS.CPU) {  // the cpu is playing
        if (state.currentTurn !== state.selectedMark) {  // it's not P1's turn 
          state.status = STATUS.CPU_TURN;
        } else {
          state.status = STATUS.PLAYER_TURN;
        }
      } else {
        state.status = STATUS.PLAYER_TURN;
      }
    },
    selectOpponent: (state, action) => {
      state.opponent = action.payload
    },
    setDifficulty: (state, action) => {
      state.difficulty = action.payload;
    },
    setFirstTurn: (state) => {
      if (state.opponent === PLAYERS.CPU && state.selectedMark !== MARKS.X) {
        state.status = STATUS.CPU_TURN;
      } else {
        state.status = STATUS.PLAYER_TURN;
      }
    },
    resetRecord: (state) => {
      state.winsX = 0;
      state.winsO = 0;
      state.ties = 0;
    },
    restartGame: (state) => {
      state.board = [...Array(9).fill(' ')];
      state.currentTurn = MARKS.X;
      state.paused = false;
      state.status = STATUS.INITIAL_GAME_LOAD;
      state.modalState = MODAL_STATES.NONE;
    },
    togglePause: (state) => {
      state.modalState = state.modalState === MODAL_STATES.PAUSED ? MODAL_STATES.NONE : MODAL_STATES.PAUSED;
    },
    toggleSettings: (state) => {
      state.modalState = state.modalState === MODAL_STATES.SETTINGS ? MODAL_STATES.NONE : MODAL_STATES.SETTINGS;
    },
    toggleSelectedMark: (state, action) => {
      if (state.selectedMark !== action.payload) {
        state.selectedMark = state.selectedMark === MARKS.X ? MARKS.O : MARKS.X;
      }
    }
  }
});

export const {
  reset,
  addMarkToBoard,
  removeMarkFromBoard,
  resetRecord,
  restartGame,
  selectOpponent,
  setDifficulty,
  setFirstTurn,
  togglePause,
  toggleSelectedMark,
  toggleSettings
} = gameSlice.actions;

export default gameSlice.reducer;