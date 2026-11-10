import { Hono } from "hono";
import { serve } from "@hono/node-server";

const app = new Hono();

app.get("/api/health", (c) => c.json({ status: "ok", service: "rajram-api" }));

app.get("/", (c) => c.json({ service: "rajram-api", version: "0.1.0" }));

serve({
  fetch: app.fetch,
  port: 3001,
});

export default app;
