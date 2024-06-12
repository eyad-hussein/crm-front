"use server";
import { IState } from "@/types";
import axios from "axios";

const getStates = async (): Promise<IState[] | null> => {
  try {
    const response = await axios.get<IState[]>("http://localhost:5000/states");
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getStates;
