import axios from "axios";
import { showNotification } from "./utils";
const url = "https://65120a02b8c6ce52b39542ac.mockapi.io/Tasks/";

export interface fetchAPIObj {
  endpoint: string;
  options?: RequestInit;

  body?: BodyInit;
  data?: any;

  queryParams?: any;
  successMessage?: string;
  
  errorMessage?: string;
  disableLoader?: boolean;
  base?: string;
}

export const fetchApi = ({
  endpoint,
  options,
  data,
  successMessage,
}: fetchAPIObj) => {

  return axios({
    method: options?.method,
    url: `${url}${endpoint}`,
    data,
  })
    .then((res) => {
      if (successMessage) {
        showNotification(successMessage, "success");
      }
     return res;
    })
    .catch((e) => {
      showNotification(e.message, "error");
    });
};
