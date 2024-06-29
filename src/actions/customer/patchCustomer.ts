"use server";

import { ICustomer } from "@/types";
import axiosInstance from "@/lib/axios";
import { logger } from "@/lib/logger";
import { getTokenFromCookies } from "@/lib/token-handler";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";

const patchCustomer = async (
  customer: ICustomer,
  formData: FormData
): Promise<void | null> => {
  try {
    logger.info("updating customer");

    const data: { [key: string]: any } = {};

    formData.forEach((value, key) => {
      data[key] = value;
    });

    data["customer_phone_numbers"] = [
      {
        id: customer.customer_phone_numbers[0].id,
        phone_number: data["customer_phone_numbers"],
        extension_id: data["extension_id"],
      },
    ];

    data["addresses"] = [
      {
        id: customer.addresses[0].id,
        address_line_1: data["address_line_1"],
        address_line_2: data["address_line_2"],
        city_id: data["city_id"],
        state_id: data["state_id"],
        country_id: data["country_id"],
        postal_code: data["postal_code"],
      },
    ];

    const response = await axiosInstance.patch(
      `/customers/${customer.id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${getTokenFromCookies()}`,
          User: retrieveCurrentLoggedInUserFromCookies(),
        },
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    logger.error("error updating customer", error);
    return null;
  }
};

export default patchCustomer;
