import axiosClient from "@api/index";
import { RequestCreateUser, RequestUserListFilter, ResponseUser } from "@api/users/types";

export const fetchUserList = async (req: RequestUserListFilter) => {
  const response = await axiosClient.get<ResponseUser[]>("/users", {
    params: req,
  });

  return response.data;
};

export const fetchUserDetail = async (id: number) => {
  const response = await axiosClient.get<ResponseUser>(`/users/${id}`);

  return response.data;
};

export const createUser = async (data: RequestCreateUser) => {
  return await axiosClient.post("/users", {
    data,
  });
};
