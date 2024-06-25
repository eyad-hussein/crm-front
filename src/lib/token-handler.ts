import { cookies } from "next/headers";

export const getTokenFromCookies = () => {
  return cookies().get("token")?.value;
};
