import { useState } from 'react'

const STRIP_COUNT = 3

function GridIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-6 w-6 text-green-700" fill="currentColor" aria-hidden="true">
      <rect x="2" y="2" width="7" height="7" rx="1.5" opacity="0.55" />
      <rect x="11" y="2" width="7" height="7" rx="1.5" />
      <rect x="2" y="11" width="7" height="7" rx="1.5" />
      <rect x="11" y="11" width="7" height="7" rx="1.5" opacity="0.55" />
    </svg>
  )
}

function Tile({ c, onJump, className = '' }) {
  return (
    <button
      onClick={() => onJump(c.id)}
      className={`group flex w-full flex-col items-center gap-2 focus:outline-none ${className}`}
    >
      <span className="block aspect-square w-full overflow-hidden rounded-2xl border border-line shadow-card transition-all duration-200 group-hover:-translate-y-0.5 group-hover:shadow-card-hover group-active:translate-y-0">
        {c.navImage ? (
          <img
            src={c.navImage}
            alt={c.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center bg-accent-soft font-display text-2xl font-semibold text-accent">
            {c.name.charAt(0)}
          </span>
        )}
      </span>
      <span className="line-clamp-2 text-center text-xs font-semibold leading-tight text-muted transition-colors group-hover:text-ink">
        {c.name}
      </span>
    </button>
  )
}

export default function CategorySquares({ categories, onJump }) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = categories.length > STRIP_COUNT

  function handleJump(id) {
    onJump(id)
    setExpanded(false)
  }

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <p className="eyebrow">Browse the menu</p>
        {expanded && (
          <button
            onClick={() => setExpanded(false)}
            className="text-xs font-semibold text-accent transition-colors hover:text-accent-dark"
          >
            Show less
          </button>
        )}
      </div>

      {expanded ? (
        <div className="grid animate-fade-up grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 sm:gap-4">
          {categories.map((c) => (
            <Tile key={c.id} c={c} onJump={handleJump} />
          ))}
        </div>
      ) : (
        <div className="flex gap-3">
          {categories.slice(0, STRIP_COUNT).map((c) => (
            <Tile key={c.id} c={c} onJump={onJump} className="flex-1 min-w-0" />
          ))}

          {hasMore && (
            <button
              onClick={() => setExpanded(true)}
              className="group flex flex-1 min-w-0 flex-col items-center gap-2 focus:outline-none"
            >
              <span className="flex aspect-square w-full items-center justify-center rounded-2xl border border-dashed border-green-700/40 bg-green-50/60 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-green-700/70 group-hover:bg-green-50 group-hover:shadow-card group-active:translate-y-0">
                <GridIcon />
              </span>
              <span className="text-xs font-semibold text-green-700">
                See all
              </span>
            </button>
          )}
        </div>
      )}
    </div>
  )
}
