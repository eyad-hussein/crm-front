"use server";

// import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

const register = async (formData: FormData) => {
  console.log(formData);
  const data: { [key: string]: any } = Object.fromEntries(formData);

  try {
    const response = await axiosInstance.post(`/auth/register`, data);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default register;
