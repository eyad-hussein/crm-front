"use server";
import { logger } from "@/lib/logger";
import { ICustomerStatus } from "@/types";
import axios from "axios";
const searchForCustomers = async (
  status: string,
  query?: string,
  searchFilters?: string
) => {
  try {
    if (!query) return null;

    logger.info({ query }, "searching for customer query:");
    logger.info({ searchFilters, status }, "searching for customer params");

    const response = await axios.get<ICustomerStatus[]>(
      `${process.env.BACKEND_API_URL}/customers/search?query=${query}&status=${status}&searchFilters=${searchFilters}`
    );

    return response.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default searchForCustomers;
