import { Hono } from "hono";
import { eq } from "drizzle-orm";
import { db, schema } from "@rajram/db";
import { getRazorpayClient } from "../integrations/razorpay";

export const bookingsRouter = new Hono();

bookingsRouter.post("/:id/payment", async (c) => {
  const bookingId = c.req.param("id");

  const rows = await db
    .select({
      bookingId: schema.bookings.id,
      amount: schema.servicePackages.priceInPaise,
    })
    .from(schema.bookings)
    .innerJoin(schema.servicePackages, eq(schema.servicePackages.id, schema.bookings.packageId))
    .where(eq(schema.bookings.id, bookingId));

  const row = rows[0];
  if (!row) {
    return c.json({ error: "booking_not_found" }, 404);
  }

  const order = await getRazorpayClient().orders.create({
    amount: row.amount,
    currency: "INR",
  });

  return c.json({ orderId: order.id, amount: row.amount, currency: order.currency });
});

export default bookingsRouter;
