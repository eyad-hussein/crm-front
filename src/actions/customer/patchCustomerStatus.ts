"use server";
import { logger } from "@/lib/logger";
import axios from "axios";

const patchCustomerStatus = async (
  customerId: number,
  customerStatus: string
) => {
  logger.info({ customerId, customerStatus });
  try {
    const response = await axios.patch(
      `http://localhost:5000/customers/${customerId}/${customerStatus}`
    );
  } catch (error) {
    logger.error(error);
  }
};

export default patchCustomerStatus;
