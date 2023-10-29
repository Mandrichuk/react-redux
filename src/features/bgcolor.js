import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const BgSlice = createSlice({
  name: "bgcolor",
  initialState: { value: initialStateValue },
  reducers: {
    changeBgColor: (state) => {
      state.value = !state.value;
    }
  }
}); 


export const { changeBgColor } = BgSlice.actions;
export default BgSlice.reducer;