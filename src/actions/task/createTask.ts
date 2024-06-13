"use server";
import { logger } from "@/lib/logger";
import { ActivityType } from "@/enums";
import axios from "axios";

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
      customer_id: customerId,
      activity_type: ActivityType.TASK,
    };

    data[ActivityType.TASK] = {
      user_id: currentUserId,
      priority: formData.get("priority"),
    };

    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`,
      data
    );
    return response.data;
  } catch (error) {
    console.error("Error creating activity", error);
    return null;
  }
};

export default createTask;
