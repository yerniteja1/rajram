import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Customers",
};

export default function AdminCustomersPage() {
  return (
    <AdminShell
      title="Customers"
      description="Customer records and preferences."
    />
  );
}
