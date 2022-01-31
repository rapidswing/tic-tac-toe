import { createSlice } from "@reduxjs/toolkit";

import { MARKS } from "utilities/constants";

const initialState = {
  currentTurn: MARKS.X
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    reset: () => initialState
  }
});

export const {
  reset
} = gameSlice.actions;

export default gameSlice.reducer;