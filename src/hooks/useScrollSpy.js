import { useEffect, useState } from 'react'

// Tracks which section is currently under the sticky bar while scrolling.
// `ids` are category ids; each section element is expected to have the DOM id
// `section-<id>`. `offset` is the sticky-bar height so the "active" section is
// the one just below the bar.
export function useScrollSpy(ids, offset = 120) {
  const key = ids.join('|')
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    setActiveId((prev) => (ids.includes(prev) ? prev : ids[0]))

    let raf = 0
    const compute = () => {
      raf = 0
      const atBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2
      if (atBottom) {
        setActiveId(ids[ids.length - 1])
        return
      }
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById('section-' + id)
        if (!el) continue
        if (el.getBoundingClientRect().top - offset <= 1) current = id
      }
      setActiveId(current)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute)
    }

    compute()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, offset])

  return [activeId, setActiveId]
}
