"use server";
import { logger } from "@/lib/logger";
import { cookies } from "next/headers";
import axiosInstance from "@/lib/axios";

const login = async (formData: FormData) => {
  console.log(formData);
  const data: { [key: string]: any } = Object.fromEntries(formData);

  try {
    const response = await axiosInstance.post(`/auth/login`, data);
    cookies().set("token", response.data.token, {
      maxAge: 60 * 60 * 24 * 7,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default login;
