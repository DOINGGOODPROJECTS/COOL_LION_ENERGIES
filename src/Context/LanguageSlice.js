import { createSlice } from "@reduxjs/toolkit";
const initialState = {};

const LanguageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.language;
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;
export const selectedLanguage = (state) => state.language;

export default LanguageSlice.reducer;
