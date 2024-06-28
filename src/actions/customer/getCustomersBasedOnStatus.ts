"use server";

import { logger } from "@/lib/logger";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";

const getCustomersBasedOnStatus = async (status: string) => {
  try {
    logger.info("getting customers based on status");
    const response = await axiosInstance.get(`/customers/${status}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCustomersBasedOnStatus;
