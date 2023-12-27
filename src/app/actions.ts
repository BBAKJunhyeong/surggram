"use server";

import { cookies } from "next/headers";

export async function getAccessTokenFromCookie() {
  const cookieStore = cookies();
  // Get cookie
  const accessToken = cookieStore.get("access_token");

  // Set cookie
  cookieStore.set({
    name: "access_token",
    value: accessToken?.value || "1234567890",
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7,
  });
}
