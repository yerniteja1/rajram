"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const dynamic = "force-dynamic";

export default function CreatorDashboardPage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/");
    }
  }, [session, isPending, router]);

  if (isPending) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
        <p className="text-slate-400">Loading creator dashboard…</p>
      </main>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Creator
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Creator Dashboard
        </h1>
        <p className="mt-4 text-slate-400">Assigned projects, availability and earnings.</p>
        <div className="mt-12 rounded-xl border border-dashed border-slate-800 bg-slate-900 p-8 text-center">
          <p className="text-slate-400">Creator workspace coming soon.</p>
        </div>
      </div>
    </main>
  );
}
