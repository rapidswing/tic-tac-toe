import { createSlice } from "@reduxjs/toolkit";

import { PAGES } from "utilities/constants";

const initialState = {
  page: PAGES.PLAYER_SELECT
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState,
    changePage: (state, action) => state.page = action.payload
  }
});

export const {
  reset
} = gameSlice.actions;

export default gameSlice.reducer;