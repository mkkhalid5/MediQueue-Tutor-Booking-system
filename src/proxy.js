import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function proxy(request) {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const currentPath = request.nextUrl.pathname;
    if (!session) {
        const loginUrl = new URL("/auth/login", request.url);
        loginUrl.searchParams.set("callbackUrl", currentPath);
        return NextResponse.redirect(loginUrl);
    }
    return NextResponse.next();
}
export const config = {
    matcher: [
        "/add-tutors",
        "/my-tutors",
        "/my-booked-sessions",
        "/myprofile",
        "/tutors/:path*"
    ]
};