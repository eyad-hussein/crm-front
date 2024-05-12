"use server";
import { CustomerStateType } from "@/enums/customer-state-type";
import axios from "axios";

const createCustomer = async (formData: FormData) => {
  const data: { [key: string]: any } = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

  switch (data.state) {
    case CustomerStateType.RESERVE:
      console.log("in");
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/customers/reserves",
          data
        );
        return response.data;
      } catch (error) {
        console.error(error);
      }
      break;
  }
};

export default createCustomer;
