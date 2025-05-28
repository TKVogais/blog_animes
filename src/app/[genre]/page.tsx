'use client'

import { useEffect, useMemo } from 'react'
import { AnimeFeed } from '@/components/feed/AnimeFeed'

type Props = {
  params: {
    genre: string
  }
}

export default function GenrePage({ params }: Props) {
  const formattedGenre = useMemo(() => {
    const decoded = decodeURIComponent(params.genre).replace(/-/g, ' ')
    return decoded.charAt(0).toUpperCase() + decoded.slice(1).toLowerCase()
  }, [params.genre])

  useEffect(() => {
    document.title = `Otaku Zone | ${formattedGenre}`
  }, [formattedGenre])

  return <AnimeFeed genre={params.genre} />
}
