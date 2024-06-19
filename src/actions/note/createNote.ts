"use server";
import { logger } from "@/lib/logger";
import { ActivityType } from "@/enums";
import axios from "axios";

const createNote = async (
  customerId: number | string,
  currentUserId: number | string,
  formData: FormData
) => {
  try {
    logger.info({ customerId }, "Creating activity...");

    const data: { [key: string]: any } = Object.fromEntries(formData);
    data.activity_type = ActivityType.NOTE;
    data.user_id = currentUserId as string;
    data.user_id.toString();
    data[ActivityType.NOTE] = {};

    logger.info({ data }, "Data to be sent to the server");

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

export default createNote;
