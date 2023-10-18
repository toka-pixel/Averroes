import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./Task/taskSlice";
import { userReducer } from "./User/userSlice";
import { filterReducer } from "./Filter/filterSlice";

const store = configureStore({
  reducer: {
    task: taskReducer.reducer,
    user : userReducer.reducer,
    filter: filterReducer.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
