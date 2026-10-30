import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/splash(.*)",
  "/onboarding(.*)",
  "/login(.*)",
  "/register(.*)",
]);

const redirectSignedInUser = createRouteMatcher([
  "/",
  "/splash(.*)",
  "/login(.*)",
  "/register(.*)",
]);

export default clerkMiddleware(
  async (auth, request) => {
    const { userId } = await auth();

    if (userId && redirectSignedInUser(request)) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (!userId && !isPublicRoute(request)) {
      await auth.protect();
    }
  },
  { signInUrl: "/login" },
);

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};