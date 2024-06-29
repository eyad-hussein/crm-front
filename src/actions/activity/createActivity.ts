"use server";
import { logger } from "@/lib/logger";
import { ActivityType } from "@/enums";
import axios from "axios";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";

const createActivity = async (
  customerId: number | string,
  activityType: ActivityType,
  formData: FormData
) => {
  try {
    const token = getTokenFromCookies();
    const user = retrieveCurrentLoggedInUserFromCookies();
    logger.info({ customerId }, "Creating activity...");
    const data = Object.fromEntries(formData);
    data.activity_type = activityType;
    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`,
      data,
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
    console.error("Error creating activity", error);
    return null;
  }
};

export default createActivity;
