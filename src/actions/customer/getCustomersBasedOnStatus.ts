"use server";

import { logger } from "@/lib/logger";
import axiosInstance from "@/lib/axios";
import { cookies } from "next/headers";

const getCustomersBasedOnStatus = async (status: string) => {
  try {
    logger.info("getting customers based on status");
    const response = await axiosInstance.get(`/customers/${status}`, {
      headers: {
        Authorization: `Bearer ${cookies().get("token")?.value}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCustomersBasedOnStatus;
