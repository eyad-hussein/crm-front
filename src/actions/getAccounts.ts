"use server";
import IAccount from "@/types/account";
import axios from "axios";

const getAccounts = async (): Promise<IAccount[] | null> => {
  try {
    const response = await axios.get<IAccount[]>(
      "http://localhost:5000/accounts"
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default getAccounts;
