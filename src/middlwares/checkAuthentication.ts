import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function checkAuthentication(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  console.log(token);

  const response = await fetch(
    `${process.env.BACKEND_API_URL}/auth/verify-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  return NextResponse.next();
}
