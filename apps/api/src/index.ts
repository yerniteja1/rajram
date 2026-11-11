import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { bookingsRouter } from "./routes/bookings";
import { projectsRouter } from "./routes/projects";
import { razorpayWebhookRouter } from "./routes/webhooks/razorpay";

const app = new Hono();

app.get("/api/health", (c) => c.json({ status: "ok", service: "rajram-api" }));

app.get("/", (c) => c.json({ service: "rajram-api", version: "0.1.0" }));

app.route("/api/bookings", bookingsRouter);
app.route("/api/projects", projectsRouter);
app.route("/api/webhooks", razorpayWebhookRouter);

serve({
  fetch: app.fetch,
  port: 3001,
});

export default app;
