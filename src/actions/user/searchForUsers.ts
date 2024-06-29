"use server";
import { logger } from "@/lib/logger";
import { IUser } from "@/types";
import axiosInstance from "@/lib/axios";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
const searchForUsers = async (query?: string) => {
  try {
    if (!query) return null;

    logger.info({ message: "searching for user query:", query });

    const response = await axiosInstance.get<IUser[]>(
      `${process.env.BACKEND_API_URL}/users/search?query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
          User: retrieveCurrentLoggedInUserFromCookies(),
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default searchForUsers;
