import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducers/counterSlice";

export const Store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
