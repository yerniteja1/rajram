import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin — Editing Queue",
};

export default function AdminEditingPage() {
  return (
    <AdminShell
      title="Editing Queue"
      description="Wedding film, reel, album and retouching editing pipeline."
    />
  );
}
