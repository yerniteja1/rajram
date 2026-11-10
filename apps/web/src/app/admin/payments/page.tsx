import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Payments",
};

export default function AdminPaymentsPage() {
  return (
    <AdminShell
      title="Payments"
      description="Payment tracking, refunds and creator payouts."
    />
  );
}
