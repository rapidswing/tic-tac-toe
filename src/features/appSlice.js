import { createSlice } from "@reduxjs/toolkit";

import { loadStateFromLocalStorage } from "features/gameSlice";
import { selectOpponent } from "features/gameSlice";

import { PAGES } from "utilities/constants";

const initialState = {
  page: PAGES.NEW_GAME
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    changePage: (state, action) => state.page = action.payload
  },
  extraReducers: (builder) => {
    builder
      // change the app page when opponent is selected
      .addCase(loadStateFromLocalStorage, (state, action) => {
        state.page = PAGES.GAME;
      })
      .addCase(selectOpponent, (state) => {
        switch (state.page) {
          case PAGES.NEW_GAME: {
            state.page = PAGES.GAME;
            break;
          }
          case PAGES.GAME: {
            state.page = PAGES.NEW_GAME;
            break;
          }
          default: {
            return state;
          }
        }
      });
  }
});

export const {
  changePage,
  reset
} = gameSlice.actions;

export default gameSlice.reducer;