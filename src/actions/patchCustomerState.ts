"use server";
import axios from "axios";

const patchCustomerState = async (
  customerId: number,
  customerState: string
) => {
  console.log(customerId, customerState);
  try {
    const response = await axios.patch(
      `http://localhost:5000/customers/${customerId}/${customerState}`
    );
  } catch (error) {
    console.log(error);
  }
};

export default patchCustomerState;
