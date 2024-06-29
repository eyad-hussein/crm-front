"use server";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import axios from "axios";

const deleteActivity = async (activityId: number) => {
  try {
    logger.info({ activityId }, "Deleting activity...");
    const response = await axios.delete(
      `${process.env.BACKEND_API_URL}/activities/${activityId}`,
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
          User: retrieveCurrentLoggedInUserFromCookies(),
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Failed to delete activity", error);
  }
};

export default deleteActivity;
