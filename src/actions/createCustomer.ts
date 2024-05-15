"use server";
import { CustomerStatusType } from "@/enums";
import axios from "axios";

const createCustomer = async (formData: FormData) => {
  try {
    console.log("creating customer, server action");
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

    data["account"] = {
      account_name: data["account_name"],
      industry: data["industry"],
      website: data["website"],
      number_of_employees: data["number_of_employees"],
    };

    console.log(data);

    switch (data.status) {
      case CustomerStatusType.PROSPECT:
        try {
          const response = await axios.post(
            "http://127.0.0.1:5000/customers/prospects",
            data
          );
          return response.data;
        } catch (error) {
          console.error(error);
        }
        break;
    }
  } catch (error) {
    console.error(error);
  }
};

export default createCustomer;
