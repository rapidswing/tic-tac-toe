import { createSlice } from "@reduxjs/toolkit";


import { PAGES } from "utilities/constants";
import { selectOpponent } from "features/gameSlice";

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
      // change the app page
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