const packages = [
  {
    name: "Pre-wedding shoot",
    price: "₹9,999",
    description:
      "Pre-wedding photography coverage for couples preparing for their wedding day.",
  },
  {
    name: "Birthday photography",
    price: "₹5,999",
    description:
      "Birthday party photography with edited photos delivered within the package timeline.",
  },
  {
    name: "Small function photo + video",
    price: "₹12,999",
    description:
      "Small celebration coverage including photography and cinematic video deliverables.",
  },
  {
    name: "Engagement coverage",
    price: "₹19,999",
    description:
      "Engagement and pre-wedding coverage with defined hours, team size and deliverables.",
  },
  {
    name: "Wedding — basic package",
    price: "₹34,999",
    description:
      "Wedding photography with defined hours, edited photos, delivery timeline and add-ons.",
  },
  {
    name: "Wedding — premium package",
    price: "₹59,999",
    description:
      "Premium wedding coverage with expanded team, deliverables and priority handling.",
  },
];

export default function PackagesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          Packages
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Our Packages
        </h1>
        <p className="mt-4 text-slate-400">
          Transparent pricing. Defined deliverables. Delivery timelines included.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {packages.map((pkg) => (
            <section
              key={pkg.name}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h2 className="text-lg font-semibold text-white">{pkg.name}</h2>
                <p className="text-lg font-semibold text-amber-400">{pkg.price}</p>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {pkg.description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
