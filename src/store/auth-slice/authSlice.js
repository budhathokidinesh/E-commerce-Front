import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSLice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});
export const { setUser } = authSLice.actions;
export default authSLice.reducer;
