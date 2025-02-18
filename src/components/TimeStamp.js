import { useEffect, useState } from 'react'

export default function TimeStamp({ timestamp }) {
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
