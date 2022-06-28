import UserState from "../interfaces/user";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: UserState[] = [];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getUser: () => {},
    setUser: (state: Draft<UserState[]>, actions: PayloadAction<UserState[]>) =>
      actions.payload,
  },
});

export const { getUser, setUser } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
