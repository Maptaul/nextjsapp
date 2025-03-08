import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("pathName", request.nextUrl.pathName.startswith("/services"));
  return NextResponse.next();
}
U;
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/about/:path*",
};
