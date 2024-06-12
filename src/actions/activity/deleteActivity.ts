"use server";
import { logger } from "@/lib/logger";
import axios from "axios";

const deleteActivity = async (activityId: number) => {
  try {
    logger.info({ activityId }, "Deleting activity...");
    const response = await axios.delete(
      `${process.env.BACKEND_API_URL}/activities/${activityId}`
    );
    logger.info({ response: response.data });
  } catch (error) {
    console.error("Failed to delete activity", error);
  }
};

export default deleteActivity;
