"use server";

import { ActivityType } from "@/enums";
import axios from "axios";

const createActivity = async (
  customerId: number,
  activityType: ActivityType,
  formData: FormData
) => {
  try {
    console.log("Creating activity...", customerId);
    const data = Object.fromEntries(formData);
    data.activity_type = activityType;
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

export default createActivity;
