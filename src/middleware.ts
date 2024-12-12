import { NextRequest, NextResponse } from "next/server";

import { ACCESS_TOKEN } from "@/utils/storage";
import { checkTokenExpired, decrypt } from "@/utils/auth";

const protectedRoutes = ["/carts", "/account-overview"];

const publicRoutes = [
  "/register",
  "/login",
  "/forgot-password",
  "/verify",
  "/wait-verify",
];

export async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  //Authentication
  const cookie = req.cookies.get(ACCESS_TOKEN)?.value;
  const token = await decrypt(cookie);
  const isTokenExpired = checkTokenExpired(token);
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathName.startsWith(route),
  );

  const isPublicRoute = publicRoutes.some((route) =>
    pathName.startsWith(route),
  );

  const isRedirectLogin = isProtectedRoute && (!token?.id || isTokenExpired);
  const isRedirectHome = isPublicRoute && token?.id;

  if (isRedirectLogin) {
    return NextResponse.redirect(new URL(`/login`, req.url));
  }

  // Redirect to / if the user is authenticated
  if (isRedirectHome) {
    return NextResponse.redirect(new URL(`/`, req.url));
  }

  return NextResponse.next();
}
