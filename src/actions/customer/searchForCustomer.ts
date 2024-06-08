"use server";
import { ICustomerStatus } from "@/types";
import axios from "axios";
const searchForCustomer = async (
  status: string,
  query?: string,
  searchFilters?: string
) => {
  console.log("searching for customer", "params", query);
  console.log("searching for customer", "params", searchFilters);

  try {
    console.log("searching for customer", "params", query);

    const response = await axios.get<ICustomerStatus[]>(
      `${process.env.BACKEND_API_URL}/customers/search?query=${query}&status=${status}`
    );

    return response.data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export default searchForCustomer;
