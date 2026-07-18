import { useLayoutEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Returns true when the viewport is below the mobile breakpoint (768px).
 */
export function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    setIsMobile(mq.matches)
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}

/**
 * Matches Tailwind's `lg` breakpoint (1024px).
 * Initial `false` on server and first client paint avoids hydration mismatch; `useLayoutEffect`
 * syncs before paint so the desktop/mobile shortcut split settles almost immediately.
 */
export function useBreakpointLg(): boolean {
  const [matches, setMatches] = useState(false)

  useLayoutEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)')
    setMatches(mq.matches)
    const onChange = () => setMatches(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return matches
}
