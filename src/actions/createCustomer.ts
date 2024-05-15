"use server";
import { CustomerStateType } from "@/enums/customer-state-type";
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

    switch (data.state) {
      case CustomerStateType.PROSPECT:
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
