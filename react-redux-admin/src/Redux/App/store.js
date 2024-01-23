
// create redux store

import authReducer from "../Features/auth/authSlice";
import userReducer from "../Features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";

const createStore = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>  getDefaultMiddleware(),
  devTools : true
});

// export store
export default createStore;