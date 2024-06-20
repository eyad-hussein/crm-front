"use server";
import { CustomerStatusType } from "@/enums";
import { logger } from "@/lib/logger";
import axios from "axios";

const createCustomer = async (
  selectedServices: number[],
  formData: FormData
) => {
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

    data["customer_phone_numbers"] = [
      {
        phone_number: data["customer_phone_numbers"],
        extension_id: data["extension_id"],
      },
    ];

    data["addresses"] = [
      {
        address_line_1: data["address_line_1"],
        address_line_2: data["address_line_2"],
        city_id: data["city_id"],
        state_id: data["state_id"],
        country_id: data["country_id"],
        postal_code: data["postal_code"],
      },
    ];

    data["services"] = selectedServices;

    logger;
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
