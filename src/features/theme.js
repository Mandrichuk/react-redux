import { createSlice } from "@reduxjs/toolkit";

 
const initialStateValue = "black"

export const themeSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValue },
  reducers: {
    changeTheme: (state, action) => {
      state.value = action.payload;
      console.log(state)
    }
  },
});



export const {changeTheme} = themeSlice.actions;
export default themeSlice.reducer;