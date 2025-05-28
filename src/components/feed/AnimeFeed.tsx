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

interface Post {
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

const allPosts: Post[] = [
  // ... seus posts aqui, mantenha os dados originais
]

const genreIcons: Record<string, JSX.Element> = {
  AÇÃO: <Lightning size={14} weight="bold" />,
  FANTASIA: <Star size={14} weight="bold" />,
  AVENTURA: <Compass size={14} weight="bold" />,
  SHOUNEN: <Sword size={14} weight="bold" />,
  'VIDA COTIDIANA': <HouseSimple size={14} weight="bold" />,
}

interface AnimeFeedProps {
  genre: string
}

export default function AnimeFeed({ genre }: AnimeFeedProps): React.JSX.Element {
  const [page, setPage] = React.useState<number>(1)
  const postsPerPage = 6

  const handleImgError = (ev: React.SyntheticEvent<HTMLImageElement>): void => {
    ev.currentTarget.src = DEFAULT_IMAGE_URL
  }

  const handleChange = (_event: React.ChangeEvent<unknown>, value: number): void => {
    setPage(value)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const lighterBorder = 'rgba(0, 0, 0, 0.16)'

  // Filtra os posts pelo gênero passado, comparando em maiúsculas para evitar problemas de case
  const filteredPosts = allPosts.filter(
    (post) => post.genre.toUpperCase() === genre.toUpperCase()
  )

  const startIndex: number = (page - 1) * postsPerPage
  const endIndex: number = startIndex + postsPerPage
  const currentPosts: Post[] = filteredPosts.slice(startIndex, endIndex)

  const totalPages: number = Math.ceil(filteredPosts.length / postsPerPage)

  return (
    <Box sx={{ maxWidth: 1152, mx: 'auto', mt: '-30px', px: 2 }}>
      <Grid container spacing={4} justifyContent="center">
        {currentPosts.map((post: Post): React.JSX.Element => (
          <Grid key={post.id} item sx={{ width: 360 }}>
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
                  icon={genreIcons[post.genre.toUpperCase()]}
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
                    <Typography variant="caption">{post.readingTime}</Typography>
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
