"use server";

import { ICustomer } from "@/types";
import axios from "axios";

const putCustomer = async (customer: ICustomer, formData: FormData) => {
  const data: { [key: string]: any } = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  data["customer_phone_number"] = {
    id: customer.customer_phone_number?.id,
    phone_number: data["customer_phone_number"],
  };

  data["postal_code"] = {
    id: customer.postal_code.id,
    postal_code: data["postal_code"],
  };

  data["account"] = {
    id: customer.account.id,
    account_name: data["account_name"],
    industry: data["industry"],
    website: data["website"],
    number_of_employees: data["number_of_employees"],
  };

  const customerId = customer.id;

  console.log(data);

  try {
    const response = await axios.patch(
      `http://localhost:5000/customers/${customerId}`,
      data
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default putCustomer;
