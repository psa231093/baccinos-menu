import { useEffect, useRef } from 'react'

// Scroll-spy jump bar: highlights the active section and scrolls the active
// pill into view; tapping a pill jumps the page to that section.
export default function CategoryNav({ categories, activeId, onJump }) {
  const refs = useRef({})

  useEffect(() => {
    const el = refs.current[activeId]
    if (el) el.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [activeId])

  return (
    <nav aria-label="Categories" className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4">
      {categories.map((c) => {
        const isActive = c.id === activeId
        return (
          <button
            key={c.id}
            ref={(el) => (refs.current[c.id] = el)}
            onClick={() => onJump(c.id)}
            aria-current={isActive ? 'true' : undefined}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-semibold transition-all duration-200 ${
              isActive
                ? 'border-accent bg-accent text-white'
                : 'border-line bg-surface text-muted hover:border-accent/40 hover:text-ink'
            }`}
          >
            {c.name}
          </button>
        )
      })}
    </nav>
  )
}
