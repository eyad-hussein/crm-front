"use server";

import { logger } from "@/lib/logger";
import axios from "axios";

const deleteCustomer = async (customerId: number) => {
  try {
    logger.info({ customerId }, "deleting customer");
    const response = await axios.delete(
      `http://localhost:5000/customers/${customerId}`
    );
    logger.info({ response: response });
  } catch (error) {
    console.error(error);
  }
};

export default deleteCustomer;
