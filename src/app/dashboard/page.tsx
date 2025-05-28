'use client'

import * as React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import {
  Heart,
  Chat,
  Clock,
  Lightning,
  Star,
  Compass,
  Sword,
  HouseSimple,
} from '@phosphor-icons/react'

type Post = {
  id: string
  imageUrl: string
  genre: string
  likes: number
  comments: number
  readingTime: string
  caption: string
  postedAt: Date
}

const DEFAULT_IMAGE_URL =
  'https://images.pexels.com/photos/1024977/pexels-photo-1024977.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800'

const posts: Post[] = [
  {
    id: 'P1',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'AÇÃO',
    likes: 1280,
    comments: 54,
    readingTime: '2 min',
    caption: 'Novo episódio de “Attack on Titan” 🔥 quem mais está ansioso?',
    postedAt: new Date(Date.now() - 2 * 60 * 60 * 1000),
  },
  {
    id: 'P2',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'FANTASIA',
    likes: 842,
    comments: 12,
    readingTime: '3 min',
    caption: 'Arte incrível de “Demon Slayer” que achei hoje!',
    postedAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
  },
  {
    id: 'P3',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'AVENTURA',
    likes: 579,
    comments: 27,
    readingTime: '1 min',
    caption: 'Vocês já leram o último capítulo de “One Piece”? 🏴‍☠️',
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P4',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'SHOUNEN',
    likes: 1023,
    comments: 33,
    readingTime: '2 min',
    caption: 'Sessão nostálgica de “Naruto” hoje à noite 🍥',
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P5',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'VIDA COTIDIANA',
    likes: 765,
    comments: 8,
    readingTime: '4 min',
    caption: 'Meu cosplay de “Sailor Moon” ficou perfeito! 🌙',
    postedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P6',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'FANTASIA',
    likes: 1340,
    comments: 19,
    readingTime: '3 min',
    caption: 'Maratona de Ghibli no sábado 🍃 quem vai participar?',
    postedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),
  },
  // 6 novos cards gerados
  {
    id: 'P7',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'AÇÃO',
    likes: 900,
    comments: 22,
    readingTime: '2 min',
    caption: 'Review do último episódio de “Jujutsu Kaisen”',
    postedAt: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P8',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'FANTASIA',
    likes: 760,
    comments: 15,
    readingTime: '3 min',
    caption: 'Descobri uma fanart incrível de “Re:Zero”',
    postedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P9',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'AVENTURA',
    likes: 430,
    comments: 10,
    readingTime: '1 min',
    caption: 'Explorando o mundo de “Made in Abyss”',
    postedAt: new Date(Date.now() - 18 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P10',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'SHOUNEN',
    likes: 1140,
    comments: 41,
    readingTime: '2 min',
    caption: '“My Hero Academia” está mais emocionante do que nunca!',
    postedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P11',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'VIDA COTIDIANA',
    likes: 505,
    comments: 6,
    readingTime: '4 min',
    caption: 'Meu diário de viagem no Japão 🇯🇵',
    postedAt: new Date(Date.now() - 22 * 24 * 60 * 60 * 1000),
  },
  {
    id: 'P12',
    imageUrl: DEFAULT_IMAGE_URL,
    genre: 'FANTASIA',
    likes: 880,
    comments: 23,
    readingTime: '3 min',
    caption: 'Recomendo o filme “Vidas ao Vento” do Studio Ghibli',
    postedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),
  },
]

const genreIcons: Record<string, JSX.Element> = {
  AÇÃO: <Lightning size={14} weight="bold" />,
  FANTASIA: <Star size={14} weight="bold" />,
  AVENTURA: <Compass size={14} weight="bold" />,
  SHOUNEN: <Sword size={14} weight="bold" />,
  'VIDA COTIDIANA': <HouseSimple size={14} weight="bold" />,
}

export default function AnimeFeed(): React.JSX.Element {
  const [page, setPage] = React.useState(1)
  const postsPerPage = 6

  const handleImgError = (ev: React.SyntheticEvent<HTMLImageElement>) => {
    ev.currentTarget.src = DEFAULT_IMAGE_URL
  }

  const lighterBorder = 'rgba(0, 0, 0, 0.16)'

  const startIndex = (page - 1) * postsPerPage
  const endIndex = startIndex + postsPerPage
  const currentPosts = posts.slice(startIndex, endIndex)

  const totalPages = Math.ceil(posts.length / postsPerPage)

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Box sx={{ maxWidth: 1152, mx: 'auto', mt: '-30px', px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {currentPosts.map((post) => (
          <Grid
            key={post.id}
            item
            sx={{ width: 360 }}
          >
            <Box
              sx={{
                border: 1,
                borderColor: lighterBorder,
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: 'background.paper',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <Box
                component="img"
                src={post.imageUrl}
                alt={post.caption}
                onError={handleImgError}
                sx={{ width: '360px', height: 240, objectFit: 'cover' }}
              />

              <Box sx={{ px: 2, pt: 2, flex: '1 1 auto' }}>
                <Chip
                  icon={genreIcons[post.genre]}
                  label={post.genre}
                  size="small"
                  sx={{ mb: 1, fontWeight: 700 }}
                  color="primary"
                />
                <Typography variant="body2" sx={{ mb: 1 }}>
                  {post.caption}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {post.postedAt.toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
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
                  gap: 3,
                }}
              >
                <Tooltip title="Curtidas">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Heart weight="fill" size={16} />
                    <Typography variant="caption">
                      {post.likes.toLocaleString()}
                    </Typography>
                  </Box>
                </Tooltip>
                <Tooltip title="Comentários">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Chat size={16} />
                    <Typography variant="caption">{post.comments}</Typography>
                  </Box>
                </Tooltip>
                <Tooltip title="Tempo de leitura">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Clock size={16} />
                    <Typography variant="caption">
                      {post.readingTime}
                    </Typography>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

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
              height: 24,
            },
          }}
        />
      </Stack>
    </Box>
  )
}
