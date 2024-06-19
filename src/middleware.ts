import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { checkAuthentication } from "./middlwares";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return checkAuthentication(request);
  }
}
