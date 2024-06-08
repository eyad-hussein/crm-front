"use server";
import { ICity } from "@/types";
import axios from "axios";

const getCitiesByStateId = async (
  stateId: number | string
): Promise<ICity[] | null> => {
  try {
    console.log("getting cities by state id");
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/states/${stateId}/cities`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCitiesByStateId;
