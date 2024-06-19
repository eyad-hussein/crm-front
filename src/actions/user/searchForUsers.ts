"use server";
import { logger } from "@/lib/logger";
import { IUser } from "@/types";
import axiosInstance from "@/lib/axios";
const searchForUsers = async (query?: string) => {
  logger.info({ message: "searching for user query:", query });

  try {
    logger.info("searching for users");

    const response = await axiosInstance.get<IUser[]>(
      `${process.env.BACKEND_API_URL}/users/search?query=${query}`
    );

    logger.info({ response: response.data });
    return response.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default searchForUsers;
