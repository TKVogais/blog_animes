'use client'

import { useEffect } from 'react'
import { AnimeFeed } from '@/components/feed/AnimeFeed'

export default function HomePage() {
  useEffect(() => {
    document.title = 'Otaku Zone | Home'
  }, [])

  return <AnimeFeed />
}
