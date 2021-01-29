import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const increment = createAction<number, "INCREMENT">("INCREMENT"); // Создаем действие

export default createReducer(initialState, {
  [increment.type]: (state, action) => {
    state.count = state.count + action.payload;
  },
});
