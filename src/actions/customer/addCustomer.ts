"use server";
import { CustomerStatusType } from "@/enums";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { getTokenFromCookies } from "@/lib/token-handler";
import axios from "axios";

const addCustomer = async (newCustomer: CustomerStatusType) => {
  try {
    const response = await axios.post("/customers", newCustomer, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default addCustomer;
