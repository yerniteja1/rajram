"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const dynamic = "force-dynamic";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

const packages = [
  { id: "00000000-0000-4000-8000-000000000001", name: "Pre-wedding shoot", price: 9999 },
  { id: "00000000-0000-4000-8000-000000000002", name: "Birthday photography", price: 5999 },
  { id: "00000000-0000-4000-8000-000000000003", name: "Small function photo + video", price: 12999 },
  { id: "00000000-0000-4000-8000-000000000004", name: "Engagement coverage", price: 19999 },
  { id: "00000000-0000-4000-8000-000000000005", name: "Wedding — basic package", price: 34999 },
  { id: "00000000-0000-4000-8000-000000000006", name: "Wedding — premium package", price: 59999 },
];

declare global {
  interface Window {
    Razorpay?: new (options: Record<string, unknown>) => { open: () => void };
  }
}

interface PaymentOrder {
  orderId: string;
  amount: number;
  currency: string;
}

export default function BookPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const [selectedPackageId, setSelectedPackageId] = useState<string>(
    packages[0].id,
  );
  const [eventDate, setEventDate] = useState("");
  const [location, setLocation] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [notes, setNotes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [payment, setPayment] = useState<PaymentOrder | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
        <p className="text-slate-400">Loading booking…</p>
      </main>
    );
  }

  if (!session) {
    return null;
  }

  const openCheckout = (order: PaymentOrder) => {
    const key = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID ?? "";
    if (!key || !order.orderId) return;

    const RazorpayConstructor = window.Razorpay;
    if (!RazorpayConstructor) return;
    const rzp = new RazorpayConstructor({
      key,
      amount: order.amount,
      order_id: order.orderId,
      currency: order.currency,
      name: "Rajram",
      description: "Creative services booking",
      handler: (response: Record<string, unknown>) => {
        setError(null);
        // Payment capture is confirmed later via the Razorpay webhook.
        setBookingId(null);
        setPayment(null);
      },
      prefill: {
        name: session.user?.name ?? undefined,
        email: session.user?.email ?? undefined,
      },
      theme: { color: "#F59E0B" },
    });
    rzp.open();
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPackageId) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: selectedPackageId,
          eventDate: eventDate || undefined,
          location: location || undefined,
          guestCount: guestCount ? Number(guestCount) : undefined,
          notes: notes ? { requirements: notes } : undefined,
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        booking?: { id: string };
      } | null;

      if (!res.ok || !data?.booking?.id) {
        throw new Error("booking_failed");
      }

      const bookingId = data.booking.id;
      setBookingId(bookingId);

      const paymentRes = await fetch(`${API_BASE_URL}/api/bookings/${bookingId}/payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const paymentData = (await paymentRes.json().catch(() => null)) as
        | PaymentOrder
        | { error?: string }
        | null;

      if (paymentRes.ok && paymentData && "orderId" in paymentData) {
        setPayment(paymentData);
        openCheckout(paymentData);
      } else {
        setError("payment_order_failed");
      }
    } catch {
      setError("booking_failed");
    } finally {
      setSubmitting(false);
    }
  };

  const selectedPackage = packages.find((p) => p.id === selectedPackageId);

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Customer
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Book a Service
        </h1>
        <p className="mt-4 text-slate-400">
          Choose a package and share your event requirements. One booking. One
          team. One point of contact.
        </p>

        <form
          onSubmit={onSubmit}
          className="mt-10 space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-6"
        >
          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="package">
              Package
            </label>
            <select
              id="package"
              value={selectedPackageId}
              onChange={(e) => setSelectedPackageId(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
            >
              {packages.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} — ₹{(p.price / 100).toLocaleString("en-IN")}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-slate-200" htmlFor="eventDate">
                Event date
              </label>
              <input
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-200" htmlFor="guestCount">
                Guest count
              </label>
              <input
                id="guestCount"
                type="number"
                min={0}
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="location">
              Location
            </label>
            <input
              id="location"
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
              placeholder="City / venue"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-200" htmlFor="notes">
              Requirements / notes
            </label>
            <textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100"
            />
          </div>

          {error ? <p className="text-sm text-red-400">{error}</p> : null}

          <button
            type="submit"
            disabled={submitting}
            className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950 disabled:opacity-50"
          >
            {submitting ? "Creating booking…" : "Request booking & pay"}
          </button>
        </form>

        {selectedPackage && !payment ? (
          <p className="mt-6 text-sm text-slate-400">
            Selected: <span className="text-slate-200">{selectedPackage.name}</span>
          </p>
        ) : null}
      </div>
    </main>
  );
}
