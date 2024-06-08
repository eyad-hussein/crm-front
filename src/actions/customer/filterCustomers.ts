"use server";

import axios from "axios";
import { ICustomerStatus } from "@/types";

const filterCustomers = async (status: string, formData: FormData) => {
  try {
    console.log("filtering customers");

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
    console.log("error", error);
    return null;
  }
};

export default filterCustomers;
