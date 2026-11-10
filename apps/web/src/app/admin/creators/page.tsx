import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Creators",
};

export default function AdminCreatorsPage() {
  return (
    <AdminShell
      title="Creators"
      description="Freelancer network, onboarding and performance."
    />
  );
}
