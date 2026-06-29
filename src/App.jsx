import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { FOOD, DRINKS } from './data/menu'
import { useScrollSpy } from './hooks/useScrollSpy'
import Header from './components/Header'
import ModeToggle from './components/ModeToggle'
import SearchBar from './components/SearchBar'
import CategorySquares from './components/CategorySquares'
import CategoryNav from './components/CategoryNav'
import MenuSection from './components/MenuSection'
import Footer from './components/Footer'

function matches(text, q) {
  return text && text.toLowerCase().includes(q)
}

// Returns a copy of the categories with only the items matching `query`.
// Empty categories are dropped. Empty query returns the list unchanged.
function filterCategories(categories, query) {
  const q = query.trim().toLowerCase()
  if (!q) return categories
  const out = []
  for (const cat of categories) {
    if (cat.layout === 'wine') {
      const groups = cat.groups
        .map((g) => ({
          ...g,
          items: g.items.filter(
            (w) => matches(w.name, q) || matches(w.producer, q) || matches(w.region, q),
          ),
        }))
        .filter((g) => g.items.length)
      if (groups.length) out.push({ ...cat, groups })
    } else {
      const items = cat.items.filter((i) => matches(i.name, q) || matches(i.desc, q))
      if (items.length) out.push({ ...cat, items })
    }
  }
  return out
}

export default function App() {
  const [mode, setMode] = useState('food')
  const [query, setQuery] = useState('')
  const [showSlimNav, setShowSlimNav] = useState(false)
  const barRef = useRef(null)
  const stripRef = useRef(null)
  const [barH, setBarH] = useState(132)

  const allCategories = mode === 'food' ? FOOD : DRINKS
  const categories = useMemo(() => filterCategories(allCategories, query), [allCategories, query])
  const searching = query.trim().length > 0

  const ids = useMemo(() => categories.map((c) => c.id), [categories])
  const [activeId, setActiveId] = useScrollSpy(ids, barH + 8)

  // measure the sticky bar so jumps and scroll-spy land below it
  useLayoutEffect(() => {
    const el = barRef.current
    if (!el) return
    const update = () => setBarH(el.offsetHeight)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [searching, showSlimNav])

  // show the slim sticky pill bar once the visual browse strip scrolls past the bar
  useEffect(() => {
    const el = stripRef.current
    if (!el || searching) {
      setShowSlimNav(false)
      return
    }
    const io = new IntersectionObserver(([e]) => setShowSlimNav(!e.isIntersecting), {
      rootMargin: '-96px 0px 0px 0px',
      threshold: 0,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [searching, mode])

  function handleMode(next) {
    if (next === mode) return
    setMode(next)
    setQuery('')
    setShowSlimNav(false)
    setActiveId((next === 'food' ? FOOD : DRINKS)[0].id)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  function jumpTo(id) {
    const el = document.getElementById('section-' + id)
    if (!el) return
    setActiveId(id)
    // after the jump the slim pill bar is visible, so reserve its height (~46px)
    // if it isn't showing yet, to keep the section heading clear of the bar.
    const offset = (showSlimNav ? barH : barH + 46) + 6
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-paper">
      <Header />

      <div
        ref={barRef}
        className="sticky top-0 z-20 border-b border-line bg-paper/90 backdrop-blur-md"
      >
        <div className="mx-auto max-w-5xl space-y-2.5 px-4 py-2.5">
          <ModeToggle mode={mode} onChange={handleMode} />
          <SearchBar
            value={query}
            onChange={setQuery}
            placeholder={`Search ${mode === 'food' ? 'food' : 'drinks'}…`}
          />
          {!searching && showSlimNav && (
            <div className="animate-fade-up">
              <CategoryNav categories={allCategories} activeId={activeId} onJump={jumpTo} />
            </div>
          )}
        </div>
      </div>

      {!searching && (
        <div ref={stripRef} className="border-b border-line bg-surface">
          <div className="mx-auto max-w-5xl px-4 py-6">
            <CategorySquares key={mode} categories={allCategories} onJump={jumpTo} />
          </div>
        </div>
      )}

      <main className="mx-auto max-w-5xl px-4 py-8">
        {categories.length === 0 ? (
          <p className="py-16 text-center text-muted">
            No menu items match “{query.trim()}”.
          </p>
        ) : (
          <div className="space-y-12">
            {categories.map((category) => (
              <MenuSection key={category.id} category={category} scrollMargin={barH + 6} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
