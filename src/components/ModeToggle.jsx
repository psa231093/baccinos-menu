const MODES = [
  {
    id: 'food',
    label: 'Food',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <path d="M7 2v20" />
        <path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Z" />
        <path d="M21 15v7" />
      </svg>
    ),
  },
  {
    id: 'drinks',
    label: 'Drinks',
    icon: (
      <svg className="h-3.5 w-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22h8" />
        <path d="M12 11v11" />
        <path d="m19 3-7 8-7-8h14Z" />
      </svg>
    ),
  },
]

const PILL = {
  food: {
    bg: '#B5232B',
    shadow: '0 4px 18px -4px rgba(181,35,43,0.5)',
  },
  drinks: {
    bg: '#1a7a3c',
    shadow: '0 4px 18px -4px rgba(26,122,60,0.5)',
  },
}

export default function ModeToggle({ mode, onChange }) {
  const activeIdx = MODES.findIndex((m) => m.id === mode)

  return (
    <div className="flex justify-center">
      <div
        role="tablist"
        aria-label="Menu type"
        className="relative inline-flex rounded-full border border-line bg-line/40"
      >
        {/* Sliding animated pill */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-[3px] w-[calc(50%-6px)] rounded-full"
          style={{
            left: '3px',
            backgroundColor: PILL[mode].bg,
            boxShadow: PILL[mode].shadow,
            transform: `translateX(${activeIdx === 0 ? '0' : 'calc(100% + 6px)'})`,
            transition: [
              'transform 400ms cubic-bezier(0.34, 1.56, 0.64, 1)',
              'background-color 260ms ease',
              'box-shadow 260ms ease',
            ].join(', '),
          }}
        />

        {MODES.map((m) => {
          const active = mode === m.id
          return (
            <button
              key={m.id}
              role="tab"
              aria-selected={active}
              onClick={() => onChange(m.id)}
              className={`relative z-10 flex min-w-[7rem] items-center justify-center gap-1.5 rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-200 sm:min-w-[8.5rem] sm:px-6 ${
                active ? 'text-white' : 'text-muted hover:text-ink'
              }`}
            >
              <span className={`transition-opacity duration-200 ${active ? 'opacity-100' : 'opacity-40'}`}>
                {m.icon}
              </span>
              {m.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
