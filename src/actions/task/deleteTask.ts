"use server";
import { logger } from "@/lib/logger";
import axiosInstance from "@/lib/axios";

const deleteTask = async (taskId: number | string) => {
  try {
    logger.info("Deleting task...");

    const response = await axiosInstance.delete(`/activities/${taskId}`);
    return response.data;
  } catch (error) {
    console.error("Error creating activity", error);
    return null;
  }
};

export default deleteTask;
