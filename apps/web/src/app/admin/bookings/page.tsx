import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Bookings",
};

export default function AdminBookingsPage() {
  return (
    <AdminShell
      title="Bookings"
      description="Customer bookings and quotations."
    />
  );
}
