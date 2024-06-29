"use server";
import { logger } from "@/lib/logger";
import { ActivityType } from "@/enums";
import axios from "axios";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";

const createTask = async (
  customerId: number | string,
  currentUserId: number | string,
  formData: FormData
) => {
  try {
    logger.info({ customerId }, "Creating activity...");
    const data: { [key: string]: any } = {
      title: formData.get("title"),
      description: formData.get("description"),
      activity_type: ActivityType.TASK,
      user_id: currentUserId as string,
    };

    data[ActivityType.TASK] = {
      priority: formData.get("priority"),
      due_date: formData.get("due_date"),
    };

    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`,
      data,
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
    console.error("Error creating activity", error);
    return null;
  }
};

export default createTask;
