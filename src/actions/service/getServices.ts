"use server";

import { logger } from "@/lib/logger";
import axiosInstance from "@/lib/axios";
import { IService } from "@/types";

const getServices = async (): Promise<IService[] | null> => {
  try {
    logger.info("Getting services...");
    const response = await axiosInstance.get<IService[] | null>("/services");
    return response.data;
  } catch (error) {
    logger.error({ message: "Error getting services", error });
    return null;
  }
};

export default getServices;
