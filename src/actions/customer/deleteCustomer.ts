"use server";

import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";

const deleteCustomer = async (customerId: number) => {
  try {
    logger.info({ customerId }, "deleting customer");
    const response = await axiosInstance.delete(`/customers/${customerId}`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
  } catch (error) {
    console.error(error);
  }
};

export default deleteCustomer;
