import { createSlice } from "@reduxjs/toolkit";

const SidebarSlice = createSlice({
  name: "sidebar",
  initialState: { status: false },
  reducers: {
    changeState(state, action) {
      state.status = action.payload.status;
    },
  },
});

export const { changeState } = SidebarSlice.actions;
export const selectedSidebar = (state) => state;

export default SidebarSlice.reducer;
