import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./Task/taskSlice";

const store = configureStore({
  reducer: {
    task: taskReducer.reducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
