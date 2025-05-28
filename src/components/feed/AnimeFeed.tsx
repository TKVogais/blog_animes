'use client'

import React, { useState } from 'react'
import {
  Box,
  Grid,
  Chip,
  Typography,
  Tooltip,
  Pagination,
  Stack
} from '@mui/material'
import {
  Sword,
  Heart,
  Globe,
  Cpu,
  HouseSimple,
  Ghost,
  Star,
  UserCircle,
  Chat,
  Clock
} from '@phosphor-icons/react'
import { usePost } from '@/contexts/posts-context'

// ✅ type substituído por interface
interface Card {
  id: number
  imageUrl: string
  genre: string
  likes: number
  comments: number
  readingTime: string
  caption: string
  postedAt: string | Date
}

const DEFAULT_IMAGE_URL =
  'https://images.pexels.com/photos/1024977/pexels-photo-1024977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800'

const lighterBorder = 'rgba(0, 0, 0, 0.16)'

const genreIcons: Record<string, JSX.Element> = {
  SHOUNEN: <Sword size={14} weight="bold" />,
  SHOJO: <Heart size={14} weight="bold" />,
  ISEKAI: <Globe size={14} weight="bold" />,
  MECHA: <Cpu size={14} weight="bold" />,
  'SLICE OF LIFE': <HouseSimple size={14} weight="bold" />,
  HORROR: <Ghost size={14} weight="bold" />,
  FANTASY: <Star size={14} weight="bold" />,
  SEINEN: <UserCircle size={14} weight="bold" />
}

// ✅ type substituído por interface
interface EmptyFeedMessageProps {
  genre: string
}

function EmptyFeedMessage({ genre }: EmptyFeedMessageProps) {
  return (
    <Box
      sx={{
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'text.secondary',
        fontWeight: 'bold',
        fontSize: '1.8rem',
        px: 2,
        textAlign: 'center'
      }}
    >
      {`\nNenhum post encontrado para este gênero 😢`}
    </Box>
  )
}

export function AnimeFeed({ genre }: { genre?: string }) {
  // ✅ useState importado corretamente
  const [page, setPage] = useState(1)
  const { posts, cards, setActivePostById } = usePost()
  const cardsPerPage = 6

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleImgError = (ev: React.SyntheticEvent<HTMLImageElement>) => {
    ev.currentTarget.src = DEFAULT_IMAGE_URL
  }

  const genero = (genre || '').replace(/-/g, ' ')

  const Cards: Card[] =
    genero && cards
      ? cards.filter(
          (post: { genre: string }) =>
            post.genre.toLowerCase() === genero.toLowerCase()
        )
      : cards ?? []

  const totalPages = Math.ceil(Cards.length / cardsPerPage)
  const currentCards = Cards.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  )

  if (Cards.length === 0) {
    return <EmptyFeedMessage genre={genre || ''} />
  }

  return (
    <Box sx={{ maxWidth: 1152, mx: 'auto', mt: '80px', px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {currentCards.map(card => {
          const date =
            typeof card.postedAt === 'string'
              ? new Date(card.postedAt)
              : card.postedAt

          return (
            <Grid key={card.id} item sx={{ width: 360 }}>
              <Box
                onClick={() => setActivePostById(card.id)}
                sx={{
                  cursor: 'pointer',
                  border: 1,
                  borderColor: lighterBorder,
                  borderRadius: 2,
                  overflow: 'hidden',
                  backgroundColor: 'background.paper',
                  boxShadow: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <Box
                  component="img"
                  src={card.imageUrl}
                  alt={card.caption}
                  onError={handleImgError}
                  sx={{ width: '360px', height: 240, objectFit: 'cover' }}
                />

                <Box sx={{ px: 2, pt: 2, flex: '1 1 auto' }}>
                  <Chip
                    icon={genreIcons[card.genre]}
                    label={card.genre}
                    size="small"
                    sx={{ mb: 1, fontWeight: 700 }}
                    color="primary"
                  />
                  <Typography variant="body2" sx={{ mb: 1 }}>
                    {card.caption}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {date.toLocaleDateString('pt-BR', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1,
                    borderTop: 1,
                    borderColor: lighterBorder,
                    gap: 3
                  }}
                >
                  <Tooltip title="Curtidas">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Heart weight="fill" size={16} />
                      <Typography variant="caption">
                        {card.likes.toLocaleString()}
                      </Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip title="Comentários">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Chat size={16} />
                      <Typography variant="caption">
                        {card.comments}
                      </Typography>
                    </Box>
                  </Tooltip>
                  <Tooltip title="Tempo de leitura">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Clock size={16} />
                      <Typography variant="caption">
                        {card.readingTime}
                      </Typography>
                    </Box>
                  </Tooltip>
                </Box>
              </Box>
            </Grid>
          )
        })}
      </Grid>

      {totalPages > 1 && (
        <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
          <Pagination
            count={totalPages}
            page={page}
            onChange={handleChange}
            size="small"
            sx={{
              '& .MuiPaginationItem-root': {
                fontSize: '0.65rem',
                minWidth: 24,
                height: 24
              }
            }}
          />
        </Stack>
      )}
    </Box>
  )
}
