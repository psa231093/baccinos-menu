import { LOCATIONS, HOURS, ADVISORY } from '../data/menu'

export default function Footer() {
  return (
    <footer className="mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-5xl px-4 py-12">
        <div className="flex flex-col items-center text-center">
          <img
            src="/img/logo.png"
            alt="Bacino's Italian Grill"
            className="h-12 w-auto rounded-lg bg-white px-3 py-1.5"
            width="744"
            height="297"
          />
          <p className="mt-4 text-sm text-paper/70">{HOURS}</p>
          <p className="eyebrow mt-2 text-paper/45">
            Catering · Parties · Anniversaries · Just because
          </p>
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.phone}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 text-center"
            >
              <h3 className="font-display text-lg font-semibold text-white">{loc.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">{loc.address}</p>
              <a
                href={`tel:${loc.tel}`}
                className="mt-4 inline-block rounded-full bg-accent px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Call {loc.phone}
              </a>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-9 max-w-2xl text-center text-xs leading-relaxed text-paper/40">
          {ADVISORY}
        </p>
      </div>
    </footer>
  )
}
