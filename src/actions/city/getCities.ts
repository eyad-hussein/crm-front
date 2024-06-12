"use server";
import ICity from "@/types/city";
import axios from "axios";

const getCities = async (): Promise<ICity[] | null> => {
  try {
    const response = await axios.get<ICity[]>("http://localhost:5000/cities");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getCities;
