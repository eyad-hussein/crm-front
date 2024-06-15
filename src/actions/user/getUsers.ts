"use server";
import IUser from "@/types/user";
import axiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";
const getUsers = async (): Promise<IUser[] | null> => {
  try {
    const response: AxiosResponse = await axiosInstance.get<IUser[]>("/users");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUsers;
