'use client'

import React, { useEffect, useMemo } from 'react'
import { AnimeFeed } from '@/components/feed/AnimeFeed'

// 🔧 Interface renomeada para seguir a convenção de nomes
interface GenrePageParams {
  params: {
    genre: string
  }
}

export default function GenrePage({ params }: GenrePageParams): JSX.Element {
  const formattedGenre = useMemo(() => {
    const decoded = decodeURIComponent(params.genre).replace(/-/g, ' ')
    return decoded.charAt(0).toUpperCase() + decoded.slice(1).toLowerCase()
  }, [params.genre])

  useEffect(() => {
    document.title = `Otaku Zone | ${formattedGenre}`
  }, [formattedGenre])

  return <AnimeFeed genre={params.genre} />
}
