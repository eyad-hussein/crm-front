"use server";
import { logger } from "@/lib/logger";
import { IActivities } from "@/types";
import axios from "axios";

const getActivities = async (
  customerId: string
): Promise<IActivities | null> => {
  try {
    logger.info({ message: "Getting activities for customer: ", customerId });
    const response = await axios.get<IActivities | null>(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting activities: ", error);
    return null;
  }
};

export default getActivities;
