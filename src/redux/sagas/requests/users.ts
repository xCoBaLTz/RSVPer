import axios, { AxiosResponse } from "axios";

export const requestGetUsers = (): Promise<AxiosResponse> => {
  return axios.request({
    method: "GET",
    url: "http://localhost:8081/users",
  });
};
