import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  winsX: 0,
  winsO: 0,
  ties: 0
}

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    incrementX: (state) => state.winsX++,
    incrementO: (state) => state.winsO++,
    incrementTies: (state) => state.ties++,
    reset: () => initialState
  }
});

export const {
  incrementX,
  incrementO,
  incrementTies,
  reset
} = scoreSlice.actions;

export default scoreSlice.reducer;