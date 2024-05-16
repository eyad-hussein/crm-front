"use server";

import { ICustomer } from "@/types";
import axios from "axios";

const getCustomer = async (customerId: string): Promise<ICustomer | null> => {
  try {
    const response = await axios.get<ICustomer | null>(
      "http://localhost:5000/customers/" + customerId
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getCustomer;
