"use server";
import { logger } from "@/lib/logger";
import { ICustomerStatus } from "@/types";
import axios from "axios";
const searchForCustomer = async (
  status: string,
  query?: string,
  searchFilters?: string
) => {
  logger.info({ query }, "searching for customer query:");
  logger.info({ searchFilters, status }, "searching for customer params");

  try {
    logger.info("searching for customer");

    const response = await axios.get<ICustomerStatus[]>(
      `${process.env.BACKEND_API_URL}/customers/search?query=${query}&status=${status}&searchFilters=${searchFilters}`
    );

    logger.info({ response: response.data }, "customers");
    return response.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default searchForCustomer;
