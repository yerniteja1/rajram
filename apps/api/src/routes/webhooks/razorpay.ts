import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { db, schema } from "@rajram/db";
import { verifyRazorpayWebhookSignature } from "../../integrations/razorpay";

export const razorpayWebhookRouter = new Hono();

type RazorpayPaymentEntity = {
  id?: string;
  entity_id?: string;
  order_id?: string;
  status?: string;
};

type WebhookPayload = {
  event?: string;
  payload?: { payment?: RazorpayPaymentEntity } & Record<string, unknown>;
} & Record<string, unknown>;

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

  const payload = (await c.req.json().catch(() => null)) as WebhookPayload | null;
  const event = payload?.event;
  const payment: RazorpayPaymentEntity | undefined =
    (payload?.payload as { payment?: RazorpayPaymentEntity } | undefined)
      ?.payment ?? undefined;

  const paymentId = payment?.id ?? payment?.entity_id;

  if (event === "payment.captured" && paymentId) {
    const orderId = payment?.order_id;
    // Booking ids are used as Razorpay order refs at creation time.
    const bookingId = orderId;
    if (bookingId) {
      const updated = await db
        .update(schema.bookings)
        .set({
          status: "paid",
          paymentOrderId: orderId ?? null,
          paymentPaymentId: paymentId,
          paidAt: new Date(),
        })
        .where(eq(schema.bookings.id, bookingId))
        .returning();
      // TODO(step): persist captured payment state; booking marked paid.
      return c.json({ received: true, event, bookingUpdated: updated.length > 0 });
    }
  }

  if (event === "payment.failed") {
    // TODO(step): mark booking failed / release hold on payment failure.
  }

  return c.json({ received: true, event });
});

export default razorpayWebhookRouter;
