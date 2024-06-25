"use server";
import { logger } from "@/lib/logger";
import { IActivities } from "@/types";
import axios from "axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { getTokenFromCookies } from "@/lib/token-handler";

const getActivitesByCustomerId = async (
  customerId: string
): Promise<IActivities | null> => {
  try {
    logger.info({
      message:
        "Getting activities for customer, getActivitesByCustomerId action: ",
      customerId,
    });
    const response = await axios.get<IActivities | null>(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`,
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
    logger.error({ message: "Error getting activities", error });
    return null;
  }
};

export default getActivitesByCustomerId;
