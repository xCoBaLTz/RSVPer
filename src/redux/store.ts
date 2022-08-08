import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import apiSlice, { apiReducer } from "../api/apiSlice";

const store = configureStore({
  reducer: {
    api: apiReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
