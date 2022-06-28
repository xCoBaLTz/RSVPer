import { createSlice, Draft } from "@reduxjs/toolkit";
import CounterState from "../interfaces/counter";
import { RootState } from "../store";

const initialState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Draft<CounterState>) => {
      state.count += 1;
    },
    decrement: (state: Draft<CounterState>) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.count;
export default counterSlice.reducer;
