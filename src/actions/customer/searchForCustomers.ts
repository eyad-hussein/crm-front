"use server";
import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import { ICustomerStatus } from "@/types";

const searchForCustomers = async (
  status: string,
  query?: string,
  searchFilters?: string
) => {
  try {
    if (!query) return null;

    logger.info("Searching for customers");
    const response = await axiosInstance.get<ICustomerStatus[]>(
      `/customers/search?query=${query}&status=${status}&searchFilters=${searchFilters}`,
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
          User: retrieveCurrentLoggedInUserFromCookies(),
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default searchForCustomers;
