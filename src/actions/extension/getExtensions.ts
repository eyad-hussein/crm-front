"use server";
import { IExtension } from "@/types";
import axios, { AxiosResponse } from "axios";

const getExtensions = async (): Promise<IExtension[] | null> => {
  try {
    const response: AxiosResponse = await axios.get<IExtension[]>(
      "http://localhost:5000/extensions"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getExtensions;
