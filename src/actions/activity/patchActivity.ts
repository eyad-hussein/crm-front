"use server";
import axiosInstance from "@/lib/axios";
import { logger } from "@/lib/logger";

const patchActivity = async (activityId: number, formData: FormData) => {
  try {
    logger.info({ activityId }, "Patching activity: ");
    const response = await axiosInstance.patch(
      `/activities/${activityId}`,
      Object.fromEntries(formData)
    );

    logger.info({ response: response.data });
  } catch (error) {
    console.error("Error patching activity: ", error);
    return [];
  }
};

export default patchActivity;
