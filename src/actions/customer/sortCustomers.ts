"use server";

import { logger } from "@/lib/logger";
import { ICustomer, ICustomerStatus } from "@/types";
import axios from "axios";

const sortCustomers = async (
  customers: ICustomerStatus[] | null,
  formData: FormData
) => {
  try {
    logger.info({
      message: "sorting customers",
      formData,
    });

    const sortParams: Record<
      number,
      { category: string; selectedOption: string }
    > = {};

    for (const [key, value] of Object.entries(Object.fromEntries(formData))) {
      const [type, index] = key.split("-");
      const idx = Number(index);
      if (!sortParams[idx]) {
        sortParams[idx] = { category: "", selectedOption: "" };
      }

      if (type === "selected") {
        sortParams[idx].selectedOption = value as string;
      } else {
        sortParams[idx].category = value as string;
      }
    }

    let customerIds;

    customerIds = customers?.map((customer) => customer.customer.id);

    const data: { [key: string]: any } = {};

    data["sortParams"] = sortParams;
    data["customerIds"] = customerIds;

    const response = await axios.post(
      `${process.env.BACKEND_API_URL}/customers/sort`,
      data
    );

    const sortedIds = response.data;
    const sortedCustomers = sortedIds.map((id: number) => {
      return customers?.find((customer) => customer.customer.id === id);
    });

    logger.info({
      message: "sorted customers",
      customers: response.data,
    });
    return sortedCustomers;
  } catch (e) {
    logger.error(e);
    return null;
  }
};

export default sortCustomers;
