import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// middleware chạy trước mỗi request
export function middleware(request: NextRequest) {
  console.log("HELLO , this middware");

  const token = request.cookies.get("token")?.value;

  // Nếu chưa đăng nhập thì redirect về /login
  // if (!token) {
  //   console.log("Running here");

  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  // Cho phép đi tiếp
  return NextResponse.next();
}

// Config để chỉ áp dụng cho path nhất định
export const config = {
  matcher: ["/posts", "/posts/:path*"],
};
