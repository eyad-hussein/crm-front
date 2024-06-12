"use server";
import { logger } from "@/lib/logger";
import axios from "axios";

const patchActivity = async (
  customerId: number,
  activityId: number,
  formData: FormData
) => {
  try {
    logger.info({ activityId }, "Patching activity: ");
    const response = await axios.patch(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities/${activityId}`,
      Object.fromEntries(formData)
    );

    logger.info({ response: response.data });
  } catch (error) {
    console.error("Error patching activity: ", error);
    return [];
  }
};

export default patchActivity;
