const verticals = [
  {
    name: "Weddings & Celebrations",
    tagline: "Primary launch category",
    description:
      "Weddings, receptions, engagements, pre-wedding shoots, haldi/mehendi/sangeet, birthdays, half saree and naming ceremonies, anniversaries and family functions.",
    startingAt: "₹9,999",
  },
  {
    name: "Business Content Creation",
    tagline: "Recurring revenue opportunity",
    description:
      "Restaurant reels, hotel and resort promotions, gym and fitness content, real estate videos, clinic and hospital promotions, shop and product photography, monthly social media content.",
    startingAt: "₹4,999/mo",
  },
  {
    name: "Professional Media Production",
    tagline: "High-value production",
    description:
      "Product photography, corporate events, company profile videos, interviews and testimonials, industrial photography, drone footage through qualified operators.",
    startingAt: "Custom",
  },
  {
    name: "Editing & Digital Services",
    tagline: "Post-production partner",
    description:
      "Wedding video editing, Instagram reels editing, YouTube editing, photo retouching, album design, short-form promotional videos, white-label editing for other studios.",
    startingAt: "Custom",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-slate-100">
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-400">
          What we do
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
          Our Services
        </h1>
        <p className="mt-4 text-slate-400">
          Four business verticals. One point of contact. Quality-checked
          delivery under the Rajram brand.
        </p>

        <div className="mt-12 space-y-6">
          {verticals.map((v) => (
            <section
              key={v.name}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">{v.name}</h2>
                <p className="text-sm font-medium text-amber-400">{v.startingAt}</p>
              </div>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500">
                {v.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                {v.description}
              </p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
