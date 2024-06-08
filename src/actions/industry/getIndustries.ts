"use server";
import { IIndustry } from "@/types";
import axios from "axios";

const getIndustries = async (): Promise<IIndustry[] | null> => {
  try {
    const response = await axios.get<IIndustry[]>(
      "http://localhost:5000/industries"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getIndustries;
