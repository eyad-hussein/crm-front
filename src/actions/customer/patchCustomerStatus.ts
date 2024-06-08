"use server";
import axios from "axios";

const patchCustomerStatus = async (
  customerId: number,
  customerStatus: string
) => {
  console.log(customerId, customerStatus);
  try {
    const response = await axios.patch(
      `http://localhost:5000/customers/${customerId}/${customerStatus}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default patchCustomerStatus;
