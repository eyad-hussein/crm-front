import { cookies } from "next/headers";

export const retrieveCurrentLoggedInUserFromCookies = (
  parse: boolean = false
) => {
  if (!parse) {
    return cookies().get("user")?.value;
  }
  return JSON.parse(cookies().get("user")?.value ?? "{}");
};
