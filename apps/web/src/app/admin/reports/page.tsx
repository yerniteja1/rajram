import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Reports",
};

export default function AdminReportsPage() {
  return (
    <AdminShell
      title="Reports"
      description="Revenue, profitability and service-category analytics."
    />
  );
}
