import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo") as string)
    : null,
  isSidebarOpen: false,
};

const authSlices = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentias: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("userInfo");
    },
    setOpenSide: (state, action) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setCredentias, logOut, setOpenSide } = authSlices.actions;
export default authSlices.reducer;
