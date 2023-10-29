import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;


export const countingSlice = createSlice({
  name: "count",
  initialState: { value: initialStateValue },
  reducers: {
    plusOne: (state) => {
      state.value += 1;
    },
    minusOne: (state) => {
      state.value -= 1;
    }
  }
});


export const { plusOne, minusOne } = countingSlice.actions;
export default countingSlice.reducer;