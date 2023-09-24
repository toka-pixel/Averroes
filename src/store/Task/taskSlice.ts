import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskInterface } from "@/shared/task.interface";

type initialStateType = {
  tasksList: TaskInterface[];
};

const tasksList: TaskInterface[] = [
  {
    description: "create header",
    completed: false,
    date: "02/30/2021",
    id: 1234,
  },

  {
    description: "updata data ",
    completed: true,
    date: "09/30/2024",
    id: 12347890,
  },
];

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

    deleteTask: (state, action: PayloadAction<{ id: number }>) => {

      state.tasksList = state.tasksList.filter(
        (task) => task.id != action.payload.id
      );
    },

    updatedTask: (state, action: PayloadAction<TaskInterface>) => {
      const { id, description, completed, date } = action.payload;

      state.tasksList = state.tasksList.map((task: any) =>
        task.id === id ? { ...task, description, completed, date } : task
      );
    },
  },
});

export const { newTask, deleteTask, updatedTask } = taskReducer.actions;
