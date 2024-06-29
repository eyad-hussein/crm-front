"use server";

import { logger } from "@/lib/logger";
import axiosInstance from "@/lib/axios";
import { IPackage } from "@/types";

const getPackages = async (): Promise<IPackage[] | null> => {
  try {
    logger.info("Getting packages...");
    const response = await axiosInstance.get<IPackage[] | null>("/packages");
    return response.data;
  } catch (error) {
    logger.error({ message: "Error getting packages", error });
    return null;
  }
};

export default getPackages;
