import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthState from "../interfaces/authState";
import { RootState } from "../store";

const initialState: AuthState = {
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (
      state,
      action: PayloadAction<{ accessToken: string; tokenType: string }>
    ) => {
      const { accessToken } = action.payload;
      state.token = accessToken;
    },
  },
});

export const { setToken } = authSlice.actions;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
