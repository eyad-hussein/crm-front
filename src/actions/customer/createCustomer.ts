"use server";
import { CustomerStatusType } from "@/enums";
import axios from "axios";

const createCustomer = async (formData: FormData) => {
  try {
    if (
      !Object.values(CustomerStatusType).includes(
        formData.get("status") as CustomerStatusType
      )
    )
      throw Error("Invalid status");

    const data: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    data["customer_phone_number"] = {
      phone_number: data["customer_phone_number"],
    };

    data["postal_code"] = {
      postal_code: data["postal_code"],
    };

    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/customers`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default createCustomer;
