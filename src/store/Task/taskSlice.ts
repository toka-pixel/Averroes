import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskInterface } from "@/shared/task.interface";

type initialStateType = {
  tasksList: TaskInterface[];
};

const tasksList: TaskInterface[] = [];

const initialState: initialStateType = {
  tasksList,
};

export const taskReducer = createSlice({
  name: "task",
  initialState,

  reducers: {
    newTask: (state, action: PayloadAction<TaskInterface>) => {
      state.tasksList.push(action.payload);
    },

    deleteTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasksList = state.tasksList.filter(
        (task) => task.id != action.payload.id
      );
    },

    // updatedTask: (state, action: PayloadAction<TaskInterface>) => {
    //   const { id, description, completed,  userId } = action.payload;

    //   state.tasksList = state.tasksList.map((task: TaskInterface) =>
    //     task.id === id
    //       ? { ...task, description, completed,  userId }
    //       : task
    //   );
    // },
  },
});

export const { newTask, deleteTask} = taskReducer.actions;
