"use server";

import axios from "axios";

const deleteCustomer = async (customerId: number) => {
  try {
    console.log("deleting customer", customerId);
    const response = await axios.delete(
      `http://localhost:5000/customers/${customerId}`
    );
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export default deleteCustomer;
