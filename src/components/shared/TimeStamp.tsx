import type { ReactNode } from 'react'
import { useEffect, useState } from 'react'

interface TimeStampProps {
  timestamp: string
}

export default function TimeStamp({ timestamp }: TimeStampProps): ReactNode {
  // Use client-side rendering for timestamp, against React Minified React error #418 and #425
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null during SSR
  if (!mounted) {
    return null
  }

  return <time dateTime={timestamp}>{new Date(timestamp).toLocaleDateString()}</time>
}
