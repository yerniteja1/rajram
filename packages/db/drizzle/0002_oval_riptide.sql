ALTER TABLE "bookings" ADD COLUMN "payment_order_id" text;--> statement-breakpoint
ALTER TABLE "bookings" ADD COLUMN "payment_payment_id" text;--> statement-breakpoint
ALTER TABLE "bookings" ADD COLUMN "paid_at" timestamp with time zone;