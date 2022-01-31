import { createSlice } from "@reduxjs/toolkit"

import { MARKS } from "utilities/constants"

const initialState = {
  selectedMark: MARKS.X,
  opponent: null
}

export const playerSelectSlice = createSlice({
  name: 'playerSelect',
  initialState,
  reducers: {
    reset: () => initialState
  }
});

export const {
  reset
} = playerSelectSlice.actions;

export default playerSelectSlice.reducer;