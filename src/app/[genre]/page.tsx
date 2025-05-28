'use client'

import { useEffect } from 'react'
import { AnimeFeed } from '@/components/feed/AnimeFeed'

type Props = {
  params: {
    genre: string
  }
}

export default function GenrePage({ params }: Props) {
  useEffect(() => {
    const genre = decodeURIComponent(params.genre).replace(/-/g, ' ');
    document.title = `Otaku Zone | ${genre.charAt(0).toUpperCase() + genre.slice(1).toLowerCase()}`
  }, [params.genre])

  return <AnimeFeed genre={params.genre} />
}
