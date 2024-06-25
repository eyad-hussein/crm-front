"use server";

import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import { ICustomer } from "@/types";

const getCustomer = async (customerId: string): Promise<ICustomer | null> => {
  try {
    const response = await axiosInstance.get<ICustomer | null>(
      `${process.env.BACKEND_API_URL}/customers/${customerId}`,
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

export default getCustomer;
