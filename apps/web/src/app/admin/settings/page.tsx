import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Settings",
};

export default function AdminSettingsPage() {
  return (
    <AdminShell
      title="Settings"
      description="Operations, contracts, privacy and delivery policy settings."
    />
  );
}
