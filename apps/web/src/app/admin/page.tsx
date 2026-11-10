import Link from "next/link";

export const metadata = {
  title: "Admin Dashboard",
};

const sections = [
  { href: "/admin/leads", label: "Leads" },
  { href: "/admin/customers", label: "Customers" },
  { href: "/admin/bookings", label: "Bookings" },
  { href: "/admin/creators", label: "Creators" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/editing", label: "Editing Queue" },
  { href: "/admin/quality", label: "Quality Control" },
  { href: "/admin/deliveries", label: "Deliveries" },
  { href: "/admin/payments", label: "Payments" },
  { href: "/admin/reports", label: "Reports" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Admin
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Admin Dashboard
        </h1>
        <p className="mt-4 max-w-2xl text-slate-400">
          Business operations control room: leads, bookings, freelancers,
          projects, editing, quality control, deliveries, payments, reports and
          settings.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="rounded-xl border border-slate-800 bg-slate-900 p-5 transition hover:border-amber-400/50"
            >
              <p className="text-base font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-xs text-slate-500">{s.href}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
