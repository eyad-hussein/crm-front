"use server";
import IUser from "@/types/user";
import axios, { AxiosResponse } from "axios";

const getUsers = async (): Promise<IUser[] | null> => {
  try {
    const response: AxiosResponse = await axios.get<IUser[]>(
      "http://localhost:5000/users"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getUsers;
