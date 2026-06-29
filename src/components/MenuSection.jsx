import { useEffect, useState } from 'react'

function formatPrice(price) {
  if (!price) return ''
  return isNaN(parseFloat(price)) ? price : `$${price}`
}

const cardClass = 'overflow-hidden rounded-2xl border border-line bg-surface shadow-card'

function ItemModal({ item, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm overflow-hidden rounded-t-3xl bg-surface animate-fade-up sm:max-w-md sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {item.img && (
          <div className="aspect-[4/3] overflow-hidden bg-line">
            <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
          </div>
        )}
        <div className="p-5 pb-8 sm:pb-5">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-display text-xl font-semibold leading-snug text-ink">{item.name}</h2>
            {item.price && (
              <span className="shrink-0 rounded-full bg-accent-soft px-2.5 py-1 text-sm font-bold tabular-nums text-accent">
                {formatPrice(item.price)}
              </span>
            )}
          </div>
          {item.desc && (
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.desc}</p>
          )}
        </div>

        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition-colors hover:bg-black/60"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}

function DishCard({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <article
        className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
        onClick={() => setOpen(true)}
      >
        {item.img && (
          <div className="relative aspect-[4/3] overflow-hidden bg-line">
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute right-2.5 top-2.5 rounded-full bg-white/95 px-2.5 py-1 text-sm font-bold text-accent shadow-sm ring-1 ring-black/5">
              {formatPrice(item.price)}
            </span>
          </div>
        )}
        <div className="flex flex-1 flex-col p-3.5 sm:p-4">
          <h3 className="font-display text-base font-semibold leading-snug text-ink sm:text-lg">
            {item.name}
          </h3>
          {item.desc && (
            <p className="mt-1.5 line-clamp-2 text-[0.8125rem] leading-relaxed text-muted">
              {item.desc}
            </p>
          )}
        </div>
      </article>

      {open && <ItemModal item={item} onClose={() => setOpen(false)} />}
    </>
  )
}

function SimpleRow({ item }) {
  return (
    <li className="flex items-start gap-4 px-4 py-4 sm:px-5">
      <div className="min-w-0 flex-1">
        <p className="font-display text-base font-semibold text-ink">{item.name}</p>
        {item.desc && <p className="mt-0.5 text-[0.8125rem] leading-relaxed text-muted">{item.desc}</p>}
      </div>
      <span className="shrink-0 pt-0.5 text-base font-semibold tabular-nums text-ink">
        {formatPrice(item.price)}
      </span>
    </li>
  )
}

function BeerRow({ item }) {
  return (
    <li className="flex items-center gap-3 px-4 py-3.5 sm:px-5">
      <div className="min-w-0 flex-1">
        <p className="font-display text-base font-semibold leading-snug text-ink">{item.name}</p>
        <p className="mt-0.5 text-xs font-medium uppercase tracking-wide text-muted/80">
          {item.size} · ABV {item.abv}
        </p>
      </div>
      <span className="shrink-0 text-base font-semibold tabular-nums text-ink">
        {formatPrice(item.price)}
      </span>
    </li>
  )
}

function WineGroups({ groups }) {
  return (
    <div className="space-y-8">
      {groups.map((group) => (
        <div key={group.label}>
          <p className="eyebrow mb-2.5 text-accent">{group.label}</p>
          <div className={cardClass}>
            <div className="hidden grid-cols-12 gap-2 border-b border-line px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wider text-muted/70 sm:grid">
              <span className="col-span-6">Wine</span>
              <span className="col-span-3">Region</span>
              <span className="col-span-3 text-right">Glass / Bottle</span>
            </div>
            <ul className="divide-y divide-line">
              {group.items.map((w, i) => (
                <li
                  key={w.name + w.producer + i}
                  className="grid grid-cols-12 items-center gap-2 px-5 py-3.5"
                >
                  <div className="col-span-12 sm:col-span-6">
                    <p className="font-display text-base font-semibold leading-snug text-ink">
                      {w.name}
                    </p>
                    <p className="text-[0.8125rem] text-muted">{w.producer}</p>
                  </div>
                  <p className="col-span-7 text-[0.8125rem] text-muted sm:col-span-3">
                    {w.region}
                    {w.year ? ` · ${w.year}` : ''}
                  </p>
                  <p className="col-span-5 text-right text-sm font-semibold tabular-nums text-ink sm:col-span-3">
                    {w.glass ? `$${w.glass}` : '—'}
                    <span className="text-muted/40"> / </span>
                    {w.bottle ? `$${w.bottle}` : '—'}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function MenuSection({ category, scrollMargin }) {
  return (
    <section
      id={'section-' + category.id}
      style={{ scrollMarginTop: scrollMargin }}
      className="scroll-mt-32"
    >
      <header className="mb-5">
        {category.note && <p className="eyebrow mb-1.5">{category.note}</p>}
        <h2 className="font-display text-[1.75rem] font-semibold leading-none tracking-tight text-ink sm:text-4xl">
          {category.name}
        </h2>
        <div className="mt-3 h-0.5 w-10 rounded-full bg-accent" />
      </header>

      {category.layout === 'cards' && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
          {category.items.map((item) => (
            <DishCard key={item.name} item={item} />
          ))}
        </div>
      )}

      {category.layout === 'list' && (
        <ul className={`${cardClass} divide-y divide-line`}>
          {category.items.map((item) => (
            <SimpleRow key={item.name} item={item} />
          ))}
        </ul>
      )}

      {category.layout === 'beer' && (
        <ul className={`${cardClass} divide-y divide-line`}>
          {category.items.map((item) => (
            <BeerRow key={item.name} item={item} />
          ))}
        </ul>
      )}

      {category.layout === 'wine' && <WineGroups groups={category.groups} />}
    </section>
  )
}
