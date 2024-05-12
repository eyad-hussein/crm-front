"use server";
import { CustomerStateType } from "@/enums/customer-state-type";
import axios from "axios";

const addCustomer = async (newCustomer: CustomerStateType) => {
  try {
    const response = await axios.post("/customers", newCustomer);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default addCustomer;
