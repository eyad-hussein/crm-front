"use server";

import axios from "axios";

const getCustomersBasedOnStatus = async (status: string) => {
  try {
    console.log("getting customers based on status");
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/customers/${status}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getCustomersBasedOnStatus;
