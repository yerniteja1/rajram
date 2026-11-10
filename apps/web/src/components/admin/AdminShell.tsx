import Link from "next/link";

export function AdminShell({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Admin
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">{title}</h1>
        <p className="mt-4 text-slate-400">{description}</p>
        <Link href="/admin" className="mt-8 inline-block text-sm text-amber-400">
          ← Back to dashboard
        </Link>
      </div>
    </main>
  );
}
