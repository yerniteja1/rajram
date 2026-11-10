import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 p-6 text-center">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
        Creative Services &amp; Media Production
      </p>
      <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:text-6xl">
        Rajram
      </h1>
      <p className="mt-6 max-w-xl text-lg text-slate-400">
        Your moments. Our creativity. Delivered with care.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/services"
          className="rounded-lg bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-950"
        >
          Explore Services
        </Link>
        <Link
          href="/packages"
          className="rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100"
        >
          View Packages
        </Link>
      </div>
    </main>
  );
}
