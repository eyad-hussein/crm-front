"use server";
import { logger } from "@/lib/logger";
import { IActivity } from "@/types";
import axios from "axios";

const getActivities = async (customerId: string) => {
  try {
    logger.info({ customerId }, "Getting activities for customer: ");
    const response = await axios.get<IActivity[]>(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting activities: ", error);
    return [];
  }
};

export default getActivities;
