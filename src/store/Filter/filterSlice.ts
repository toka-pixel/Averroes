import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type filterState = {
  taskStatusFilter: Array<string>;
};

const initialState: filterState = {
  taskStatusFilter: [],
};

export const filterReducer = createSlice({
  name: "filter",
  initialState,

  reducers: {
    handleTaskStatus: (state, action: PayloadAction<{ status: string }>) => {
      const status = action.payload.status;
      if (state.taskStatusFilter.findIndex((s) => status === s) === -1) {
        state.taskStatusFilter.push(status);
      } else {
        state.taskStatusFilter = state.taskStatusFilter.filter(
          (s) => s !== status
        );
      }
    },
  },
});

export const { handleTaskStatus } = filterReducer.actions;
