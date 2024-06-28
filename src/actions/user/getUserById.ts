"use server";
import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import { IUser } from "@/types";

const getUserById = async (id: string | number): Promise<IUser | null> => {
  try {
    logger.info({ message: "Fetching user by id", id });

    const response = await axiosInstance.get<IUser | null>(`/users/${id}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error: any) {
    logger.error(error);
    return null;
  }
};

export default getUserById;
