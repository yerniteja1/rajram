import { betterAuth } from "better-auth";
import { drizzleAdapter } from "@better-auth/drizzle-adapter";
import { db, schema } from "@rajram/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, { schema, provider: "pg" }),
});
