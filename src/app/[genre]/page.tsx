'use client'

import React, { useEffect, useMemo } from 'react'
import { AnimeFeed } from '@/components/feed/AnimeFeed'

// ✅ Linha 6: Usando interface em vez de type
interface Props {
  params: {
    genre: string
  }
}

// ✅ Linha 22: React importado para projetos com JSX
export default function GenrePage({ params }: Props): JSX.Element {
  const formattedGenre = useMemo(() => {
    const decoded = decodeURIComponent(params.genre).replace(/-/g, ' ')
    return decoded.charAt(0).toUpperCase() + decoded.slice(1).toLowerCase()
  }, [params.genre])

  useEffect(() => {
    document.title = `Otaku Zone | ${formattedGenre}`
  }, [formattedGenre])

  return <AnimeFeed genre={params.genre} />
}
