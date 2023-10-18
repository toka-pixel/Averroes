import { fetchApi } from "@/utils/FetchApi";
import { UserInterface } from "@/shared/user.interface";

const endpoint = "users";

export const getAllUsers = () => {
  return fetchApi({
    endpoint: `${endpoint}`,
    options: {
      method: "GET",
    },
  });
};

export const addUser = (data: UserInterface) => {
  return fetchApi({
    endpoint: `${endpoint}`,
    options: {
      method: "POST",
    },
    data,
  });
};


export const getUser = (id: string) => {
  return fetchApi({
    endpoint: `${endpoint}/${id}`,
    options: {
      method: "GET",
    },
  });
};