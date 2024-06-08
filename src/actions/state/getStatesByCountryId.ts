"use server";
import { IState } from "@/types";
import axios from "axios";

const getStatesByCountryId = async (
  countryId: number | string
): Promise<IState[] | null> => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_API_URL}/countries/${countryId}/states`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getStatesByCountryId;
