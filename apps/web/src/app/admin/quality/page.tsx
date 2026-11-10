import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Quality Control",
};

export default function AdminQualityPage() {
  return (
    <AdminShell
      title="Quality Control"
      description="Final quality inspection before deliverable handoff."
    />
  );
}
