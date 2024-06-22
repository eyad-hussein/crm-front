"use server";

import { ICustomer } from "@/types";
import axiosInstance from "@/lib/axios";
import { logger } from "@/lib/logger";

const putCustomer = async (customer: ICustomer, formData: FormData) => {
  try {
    logger.info("updating customer");

    const data: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });
  } catch (error) {
    logger.error("error updating customer", error);
  }
};

export default putCustomer;
