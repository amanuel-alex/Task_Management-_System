import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlices";
import { apiSlice } from "./slices/apiSlices";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
