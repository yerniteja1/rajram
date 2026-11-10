import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Projects",
};

export default function AdminProjectsPage() {
  return (
    <AdminShell
      title="Projects"
      description="Operational work for confirmed bookings."
    />
  );
}
