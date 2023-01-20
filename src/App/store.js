import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "../Context/LanguageSlice";

const store = configureStore({
  reducer: {
    language: LanguageSlice,
  },
});

export default store;
