import { fetchApi } from "@/utils/FetchApi";
import { TaskInterface } from "@/shared/task.interface";

const endpoint = "tasks";

export const getTasksOfUser = (userId: string) => {
  return fetchApi({
    endpoint: `users/${userId}/${endpoint}`,
    options: {
      method: "GET",
    },
    //  queryParams:{userId}
  });
};

export const addTask = (data: TaskInterface) => {
  return fetchApi({
    endpoint: `users/${data.userId}/${endpoint}`,
    options: {
      method: "POST",
    },
    data,
  });
};

export const editTask = (data: TaskInterface) => {
  return fetchApi({
    endpoint: `users/${data.userId}/${endpoint}/${data.id}`,
    options: {
      method: "PUT",
    },
    data,
  });
};

type removeTaskObj = {
  userId: string;
  id: string;
};

export const deleteTask = (data: removeTaskObj) => {
  return fetchApi({
    endpoint: `users/${data.userId}/${endpoint}/${data.id}`,
    options: {
      method: "DELETE",
    },
  });
};

export const getTask = (data: any) => {
  return fetchApi({
    endpoint: `users/${data.userId}/${endpoint}/${data.id}`,
    options: {
      method: "GET",
    },
  });
};
