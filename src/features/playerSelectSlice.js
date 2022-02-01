import { createSlice } from "@reduxjs/toolkit";

import { MARKS } from "utilities/constants";

const initialState = {
  selectedMark: MARKS.X,
  opponent: null
}

export const playerSelectSlice = createSlice({
  name: 'playerSelect',
  initialState,
  reducers: {
    reset: () => initialState,
    selectOpponent: (state, action) => {
      state.opponent = action.payload
    },
    toggleSelectedMark: (state, action) => {
      if (state.selectedMark !== action.payload) {
        state.selectedMark = state.selectedMark === MARKS.X ? MARKS.O : MARKS.X
      }
    }
  }
});

export const {
  reset,
  selectOpponent,
  toggleSelectedMark
} = playerSelectSlice.actions;

export default playerSelectSlice.reducer;