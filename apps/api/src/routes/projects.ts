import { Hono } from "hono";
import { randomUUID } from "node:crypto";
import { eq } from "drizzle-orm";
import { db, schema } from "@rajram/db";
import { getStorage } from "@rajram/storage";

export const projectsRouter = new Hono();

projectsRouter.post("/:bookingId/project", async (c) => {
  const bookingId = c.req.param("bookingId");

  const bookingRows = await db
    .select()
    .from(schema.bookings)
    .where(eq(schema.bookings.id, bookingId));

  const booking = bookingRows[0];
  if (!booking) {
    return c.json({ error: "booking_not_found" }, 404);
  }

  const [project] = await db
    .insert(schema.projects)
    .values({
      bookingId: booking.id,
      status: "planning",
    })
    .returning();

  return c.json({ project }, 201);
});

projectsRouter.post("/:id/deliverables", async (c) => {
  const projectId = c.req.param("id");

  const body = (await c.req.json().catch(() => null)) as {
    kind?: string;
    metadata?: Record<string, unknown>;
  } | null;

  const kind = body?.kind ?? "photos";
  const storage = getStorage();
  const key = `deliveries/${projectId}/${kind}-${Date.now()}-${randomUUID()}`;

  const [deliverable] = await db
    .insert(schema.deliverables)
    .values({
      projectId,
      kind,
      url: key,
      metadata: body?.metadata ?? { kind },
    })
    .returning();

  const signedUrl = await storage.getSignedGetUrl({ key, expiresIn: 86400 });

  return c.json({ deliverable, signedUrl }, 201);
});

export default projectsRouter;
