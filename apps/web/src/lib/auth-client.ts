import { createAuthClient } from "better-auth/react";
import { auth } from "./auth";

const baseURL = process.env.NEXT_PUBLIC_APP_URL
  ? `${process.env.NEXT_PUBLIC_APP_URL}/api/auth`
  : "http://localhost:3000/api/auth";

export const authClient = createAuthClient({
  baseURL,
});
