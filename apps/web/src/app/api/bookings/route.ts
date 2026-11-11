import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db, schema } from "@rajram/db";

export async function POST(req: NextRequest) {
  const session = await auth.api.getSession({ headers: req.headers });
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  const body = (await req.json().catch(() => null)) as {
    packageId?: string;
    eventDate?: string;
    location?: string;
    guestCount?: number;
    phone?: string;
    notes?: Record<string, unknown>;
  } | null;

  if (!body?.packageId) {
    return NextResponse.json({ error: "packageId_required" }, { status: 400 });
  }

  const userId = session.user.id;

  const existing = await db
    .select({ customerId: schema.customers.id })
    .from(schema.customers)
    .innerJoin(schema.users, eq(schema.users.id, schema.customers.userId))
    .where(eq(schema.users.id, userId));

  const existingCustomerId = existing[0]?.customerId;
  const customerId =
    existingCustomerId ??
    (
      await db
        .insert(schema.customers)
        .values({
          userId,
          fullName: session.user.name ?? "Rajram Customer",
          phone: body.phone,
        })
        .returning()
    )[0].id;

  const [booking] = await db
    .insert(schema.bookings)
    .values({
      customerId,
      packageId: body.packageId,
      eventDate: body.eventDate ?? null,
      status: "pending",
      notes: body.notes ?? {},
    })
    .returning();

  return NextResponse.json({ booking }, { status: 201 });
}
