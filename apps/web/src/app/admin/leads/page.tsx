import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Leads",
};

export default function AdminLeadsPage() {
  return (
    <AdminShell
      title="Leads"
      description="Customer acquisition and referral leads."
    />
  );
}
