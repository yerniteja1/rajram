import { Hono } from "hono";
import { verifyRazorpayWebhookSignature } from "../../integrations/razorpay";

export const razorpayWebhookRouter = new Hono();

razorpayWebhookRouter.post("/razorpay", async (c) => {
  const signature = c.req.header("x-razorpay-signature") ?? "";
  const rawBody = await c.req.raw.text();
  const valid = verifyRazorpayWebhookSignature(
    rawBody,
    signature,
    process.env.RAZORPAY_WEBHOOK_SECRET ?? "",
  );

  if (!valid) {
    return c.json({ received: false }, 401);
  }

  const payload = (await c.req.json().catch(() => null)) as Record<string, unknown> | null;

  // TODO(step): handle payment.captured / payment.failed / refund events
  // and persist them via the Drizzle database layer.

  return c.json({ received: true }, 200);
});
