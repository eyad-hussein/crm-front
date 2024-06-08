"use server";

import axios from "axios";

const patchActivity = async (
  customerId: number,
  activityId: number,
  formData: FormData
) => {
  try {
    console.log("Patching activity: ", activityId);
    const response = await axios.patch(
      `${process.env.BACKEND_API_URL}/customers/${customerId}/activities/${activityId}`,
      Object.fromEntries(formData)
    );

    console.log(response.data);
  } catch (error) {
    console.error("Error patching activity: ", error);
    return [];
  }
};

export default patchActivity;
