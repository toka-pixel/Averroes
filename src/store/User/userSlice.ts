import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "@/shared/user.interface";
import { TaskInterface } from "@/shared/task.interface";

type userState = {
  userAccount: UserInterface;
  selectedUsers: Array<string>;
  activeUser: string;
  notActiveUser: string;
  tasks: Array<TaskInterface>;
};

const initialState: userState = {
  userAccount: {
    firstName: "",
    lastName: "",
    password: "",
    avatar: "" || undefined,
    email: "",
    id:''
  },
  selectedUsers: [],
  activeUser: "",
  notActiveUser: "",
  tasks: [],
};

export const userReducer = createSlice({
  name: "user",
  initialState,

  reducers: {
    handleUserAccount: (state, action: PayloadAction<UserInterface>) => {
      state.userAccount = action.payload;
    },

    selectedActiveUsers: (state, action: PayloadAction<{ id: string }>) => {
      const id = action.payload.id;
      if (state.selectedUsers.findIndex((userId) => userId === id) === -1) {
        state.selectedUsers.push(id);
        state.activeUser = id;
        state.notActiveUser = "";
      } else {
        state.selectedUsers = state.selectedUsers.filter(
          (userId) => userId !== id
        );
        state.notActiveUser = id;
        state.activeUser = "";
      }
    },

    handleTasks:(state, action:PayloadAction<Array<TaskInterface>>)=>{
     state.tasks=action.payload;
    }
  },
});

export const { handleUserAccount, selectedActiveUsers ,handleTasks} = userReducer.actions;
