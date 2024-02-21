// create redux store

import authReducer from "../Features/auth/authSlice";
import userReducer from "../Features/user/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../Features/product/productSlice";
const createStore = configureStore({
  reducer: {
    auth: authReducer,
    authorised: userReducer,
    product: productSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

// export store
export default createStore;
