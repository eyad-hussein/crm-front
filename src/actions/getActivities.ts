"use server";

import { IActivity } from "@/types";
import axios from "axios";

const getActivities = async (customerId: string) => {
  try {
    console.log("Getting activities for customer: ", customerId);
    const response = await axios.get<IActivity[]>(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities`
    );

    return response.data;
  } catch (error) {
    console.error("Error getting activities: ", error);
    return [];
  }
};

export default getActivities;
