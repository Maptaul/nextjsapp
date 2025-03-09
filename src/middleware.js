import { NextResponse } from "next/server";
import { is } from "./../.next/static/chunks/[root of the server]__31723f._";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const currentCookie = request.cookies.get("next-js");
  console.log("currentCookie", currentCookie);
  const dummyUserData = {
    role: "user",
    email: "xyz@gmail.com",
  };
  let isServicesPage = request.nextUrl.pathname.startsWith("/services");
  let isAdmin = dummyUserData.role === "admin";
  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  return NextResponse.next();
}
