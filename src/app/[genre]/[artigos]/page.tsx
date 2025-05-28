'use client'

import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, Typography, Divider, Paper } from '@mui/material'
import { usePost } from '@/contexts/posts-context'

interface ImageWithFallbackProps {
  src?: string
  alt?: string
  height?: number
}

const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  height = 400,
}) => {
  const [error, setError] = useState(false)

  const handleError = () => setError(true)

  if (error || !src) {
    return (
      <Box
        sx={{
          width: '100%',
          height,
          backgroundColor: 'rgba(87, 87, 87, 0.3)',
          borderRadius: 2,
          boxShadow: 3,
          mb: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        <Typography variant="body1" color="black">
          A imagem está indisponível no momento!
        </Typography>
      </Box>
    )
  }

  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      onError={handleError}
      sx={{
        width: '100%',
        height,
        objectFit: 'cover',
        borderRadius: 2,
        boxShadow: 3,
        mb: 5,
      }}
    />
  )
}

const InfoArticlePage: React.FC = () => {
  const { activePost } = usePost()

  useEffect(() => {
    document.title = 'Otaku Zone'
  }, [])

  const paperShadow = '0 4px 20px rgba(0,0,0,0.3)'
  const paragraphStyle = {
    textAlign: 'justify',
    textIndent: '2em',
  }

  if (!activePost) {
    return (
      <Typography variant="h6" sx={{ mt: 8, textAlign: 'center' }}>
        Carregando post...
      </Typography>
    )
  }

  return (
    <Box
      sx={{
        pt: 8,
        pb: 10,
        backgroundColor: '#f5f5f5',
        maxWidth: '800px',
        mx: 'auto',
      }}
    >
      <Paper
        elevation={8}
        sx={{
          p: 3,
          mb: 4,
          backgroundColor: '#ffffff',
          borderRadius: 2,
          boxShadow: paperShadow,
        }}
      >
        <Container maxWidth={false} sx={{ maxWidth: '750px', mx: 'auto' }}>
          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            {activePost.caption}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {activePost.publish}
          </Typography>
          <Divider sx={{ mb: 4 }} />

          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 5 }}>
            {activePost.paragraph1}
          </Typography>

          <ImageWithFallback src={activePost.imagem1} alt="Imagem 1" height={400} />

          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 6 }}>
            {activePost.paragraph2}
          </Typography>

          <Divider sx={{ mb: 4 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {activePost.titulo1}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph3}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph4}
          </Typography>

          <ImageWithFallback src={activePost.imagem2} alt="Imagem 2" height={400} />

          <Divider sx={{ mb: 4 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {activePost.titulo2}
          </Typography>
          <Grid container spacing={2} sx={{ my: 4 }}>
            <Grid item xs={12} sm={6}>
              <ImageWithFallback src={activePost.imagem3} alt="Imagem 3" height={200} />
              <ImageWithFallback src={activePost.imagem4} alt="Imagem 4" height={200} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <ImageWithFallback src={activePost.imagem5} alt="Imagem 5" height={200} />
              <ImageWithFallback src={activePost.imagem6} alt="Imagem 6" height={200} />
            </Grid>
          </Grid>

          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph5}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph6}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph7}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph8}
          </Typography>
          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph9}
          </Typography>

          <Divider sx={{ mb: 4 }} />
          <Typography variant="h4" fontWeight={700} gutterBottom>
            {activePost.titulo3}
          </Typography>
          <ImageWithFallback src={activePost.imagem7} alt="Imagem 7" height={400} />
          <Typography variant="body1" sx={paragraphStyle} paragraph>
            {activePost.paragraph10}
          </Typography>
          <Typography variant="body1" sx={paragraphStyle} paragraph>
            {activePost.paragraph11}
          </Typography>

          <Typography variant="body1" sx={{ ...paragraphStyle, mb: 4 }}>
            {activePost.paragraph12}
          </Typography>
          <Typography variant="body1" fontStyle="italic" sx={{ ...paragraphStyle, mb: 6 }}>
            {activePost.paragraph13}
          </Typography>
        </Container>
      </Paper>
    </Box>
  )
}

export default InfoArticlePage
