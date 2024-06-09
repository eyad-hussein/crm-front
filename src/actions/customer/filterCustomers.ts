"use server";

import { logger } from "@/lib/logger";
import axios from "axios";
import { ICustomerStatus } from "@/types";

const filterCustomers = async (status: string, formData: FormData) => {
  try {
    logger.info("filtering customers");

    const data: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    data.status = status;

    const response = await axios.post<ICustomerStatus[]>(
      `${process.env.BACKEND_API_URL}/customers/filter`,
      data
    );

    return response.data;
  } catch (error) {
    logger.info("error", error);
    return null;
  }
};

export default filterCustomers;
