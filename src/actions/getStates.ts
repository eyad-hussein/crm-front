"use server";
import IState from "@/types/state";
import axios from "axios";

const getStates = async () => {
  try {
    const response = await axios.get<IState[]>("http://localhost:5000/states");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getStates;
