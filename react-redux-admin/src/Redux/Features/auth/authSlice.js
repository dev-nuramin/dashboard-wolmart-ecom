// create apiSlice

import { createSlice } from "@reduxjs/toolkit";
import {
  getLoggedInUser,
  loginSlice,
  logoutUser,
  userRegisterSlice,
} from "./authApiSlice";
import { useSelector } from "react-redux";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null,
    message: null,
    error: null,
  },
  reducers: {
    setMessageEmpty: (state, action) => {
      (state.message = null), (state.error = null);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userRegisterSlice.rejected, (state, actions) => {
        state.error = actions.error.message;
      })
      .addCase(userRegisterSlice.fulfilled, (state, actions) => {
        state.message = actions.payload.message;
      })
      .addCase(loginSlice.rejected, (state, actions) => {
        state.message = actions.payload.message;
      })
      .addCase(loginSlice.fulfilled, (state, actions) => {
        (state.message = actions.payload.message),
          (state.user = actions.payload.user),
          localStorage.setItem("user", JSON.stringify(actions.payload.user));
      })
      .addCase(logoutUser.rejected, (state, actions) => {
        state.message = actions.payload.message;
      })
      .addCase(logoutUser.fulfilled, (state, actions) => {
        (state.message = actions.payload.message),
          (state.user = null),
          localStorage.removeItem("user");
      })
      .addCase(getLoggedInUser.rejected, (state, actions) => {
        state.error = actions.error.message;
        state.user = null;
      })
      .addCase(getLoggedInUser.fulfilled, (state, actions) => {
        state.user = actions.payload;
      });
  },
});

//selectors

//actions
export const { setMessageEmpty } = authSlice.actions;
//export authSlice
export default authSlice.reducer;