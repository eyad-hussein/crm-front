"use server";
import { logger } from "@/lib/logger";
import { IActivities } from "@/types";
import axios from "axios";

const getActivitesByUserId = async (
  userId: string | number
): Promise<IActivities | null> => {
  try {
    logger.info({ message: "Getting activities for user: ", userId });
    const response = await axios.get<IActivities | null>(
      `${process.env.BACKEND_API_URL}/users/${userId}/activities`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting activities: ", error);
    return null;
  }
};

export default getActivitesByUserId;
