import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Deliveries",
};

export default function AdminDeliveriesPage() {
  return (
    <AdminShell
      title="Deliveries"
      description="Deliverable upload, private galleries and download access."
    />
  );
}
