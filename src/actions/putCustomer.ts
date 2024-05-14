"use server";

import axios from "axios";

const putCustomer = async (customerId: string, formData: FormData) => {
  const data: { [key: string]: any } = {};

  formData.forEach((value, key) => {
    data[key] = value;
  });

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
