"use server";

import axios from "axios";

const deleteActivity = async (activityId: number) => {
  try {
    console.log("Deleting activity...", activityId);
    const response = await axios.delete(
      `${process.env.BACKEND_API_URL}/activities/${activityId}`
    );
    console.log(response.data);
  } catch (error) {
    console.error("Failed to delete activity", error);
  }
};

export default deleteActivity;
