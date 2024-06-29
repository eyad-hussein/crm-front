"use server";
import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";

const patchActivity = async (activityId: number, formData: FormData) => {
  try {
    logger.info({ activityId }, "Patching activity: ");
    const response = await axiosInstance.patch(
      `/activities/${activityId}`,
      Object.fromEntries(formData),
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
          User: retrieveCurrentLoggedInUserFromCookies(),
        },
        withCredentials: true,
      }
    );
  } catch (error) {
    console.error("Error patching activity: ", error);
    return [];
  }
};

export default patchActivity;
