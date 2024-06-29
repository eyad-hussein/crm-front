"use server";
import IUser from "@/types/user";
import axiosInstance from "@/lib/axios";
import { AxiosResponse } from "axios";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
const getUsers = async (): Promise<IUser[] | null> => {
  try {
    const response: AxiosResponse = await axiosInstance.get<IUser[]>("/users", {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUsers;
