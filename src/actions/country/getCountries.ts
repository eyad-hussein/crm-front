"use server";
import ICountry from "@/types/country";
import axios, { AxiosResponse } from "axios";

const getCountries = async (): Promise<ICountry[] | null> => {
  try {
    const response: AxiosResponse = await axios.get<ICountry[]>(
      "http://localhost:5000/countries"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCountries;
