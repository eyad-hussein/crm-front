"use server";
import { CustomerStatusType } from "@/enums";
import axios from "axios";

const addCustomer = async (newCustomer: CustomerStatusType) => {
  try {
    const response = await axios.post("/customers", newCustomer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default addCustomer;
