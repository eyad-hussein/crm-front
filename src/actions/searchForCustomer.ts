"use server";
import { ICustomerStatus } from "@/types";
import axios from "axios";
const searchForCustomer = async (
  searchParams: { query?: string },
  status: string
) => {
  try {
    console.log("searching for customer", "params", searchParams);

    const { query } = searchParams;
    const response = await axios.get<ICustomerStatus[]>(
      `${process.env.BACKEND_API_URL}/customers/search?query=${query}&status=${status}`
    );

    console.log("response", response.data);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export default searchForCustomer;
