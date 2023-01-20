import { createSlice } from "@reduxjs/toolkit";
import EnglishContent from "../Seeds/Languages/En";
import FrenchContent from "../Seeds/Languages/Fr";
const initialState = { language: EnglishContent };

const LanguageSlice = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    changeLanguage(state, action) {
      if (action.payload === "french") {
        state.language = FrenchContent;
      } else if (action.payload === "english") {
        state.language = EnglishContent;
      }
    },
  },
});

export const { changeLanguage } = LanguageSlice.actions;
export const selectedLanguage = (state) => state.language;

export default LanguageSlice.reducer;
