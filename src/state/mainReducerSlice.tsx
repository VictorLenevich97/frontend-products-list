import { createSlice } from "@reduxjs/toolkit";

type mainSliceProps = {
  count: Number;
};

const mainSlice = createSlice({
  name: "main",
  initialState: {
    count: 0,
  } as mainSliceProps,
  reducers: {
    increment(state, action) {
      state.count = state.count + action.payload;
    },
    // And other callbacks
  },
});

export default mainSlice.reducer;
export const { increment } = mainSlice.actions;
