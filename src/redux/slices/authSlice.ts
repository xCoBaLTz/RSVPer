import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import AuthState from "../interfaces/authType";
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
      action: PayloadAction<{ access_token: string; token_type: string }>
    ) => {
      const { access_token } = action.payload;
      state.token = access_token;
    },
  },
});

export const { setToken } = authSlice.actions;
export const selectCurrentToken = (state: RootState) => state.auth.token;
export default authSlice.reducer;
