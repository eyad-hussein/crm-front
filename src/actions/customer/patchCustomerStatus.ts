"use server";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import axiosInstance from "@/lib/axios";
import axios from "axios";
const pluralize = require("pluralize");

const patchCustomerStatus = async (
  customerId: number,
  customerStatus: string
) => {
  logger.info({ customerId, customerStatus });
  const token = getTokenFromCookies();
  const user = retrieveCurrentLoggedInUserFromCookies();
  logger.info({ token, user });

  try {
    const response = await axios.patch(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/${customerStatus}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          User: user,
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    logger.error(error);
  }
};

export default patchCustomerStatus;
