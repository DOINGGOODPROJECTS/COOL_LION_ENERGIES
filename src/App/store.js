import { configureStore } from "@reduxjs/toolkit";
import LanguageSlice from "../Context/LanguageSlice";
import SidebarSlice from "../Context/SidebarSlice";

const store = configureStore({
  reducer: {
    language: LanguageSlice,
    sidebard: SidebarSlice,
  },
});

export default store;
