import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  newBoard: [...Array(9).fill(' ')]
}

export const boardStateSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    reset: () => initialState
  }
});

export const {
  reset
 } = boardStateSlice.actions;

export default boardStateSlice.reducer;