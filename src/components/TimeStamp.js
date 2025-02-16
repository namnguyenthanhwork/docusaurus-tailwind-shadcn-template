import { useEffect, useState } from 'react'

export default function TimeStamp({ timestamp }) {
  // Use client-side rendering for timestamp
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
