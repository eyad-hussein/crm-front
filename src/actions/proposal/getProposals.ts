"use server";

import axiosInstance from "@/lib/axios";
import { retrieveCurrentLoggedInUserFromCookies } from "@/lib/cookies-handler";
import { getTokenFromCookies } from "@/lib/token-handler";

const getProposals = async () => {
  try {
    const response = await axiosInstance.get(`/proposals`, {
      headers: {
        Authorization: `Bearer ${getTokenFromCookies()}`,
        User: retrieveCurrentLoggedInUserFromCookies(),
      },
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default getProposals;
