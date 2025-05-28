'use client'

import * as React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

const genres = [
  'HOME',
  'SHONEN',
  'SHOJO',
  'SEINEN',
  'ISEKAI',
  'MECHA',
  'SLICE OF LIFE',
  'FANTASY',
  'HORROR',
]

export function MainNav(): React.JSX.Element {
  const [underlineProps, setUnderlineProps] = React.useState<{ left: number; width: number }>({
    left: 0,
    width: 0,
  })

  const navRef = React.useRef<HTMLDivElement>(null)

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    const navLeft = navRef.current?.getBoundingClientRect().left || 0
    const targetRect = target.getBoundingClientRect()
    setUnderlineProps({
      left: targetRect.left - navLeft,
      width: targetRect.width,
    })
  }

  const handleMouseLeave = () => {
    setUnderlineProps({ left: 0, width: 0 })
  }

  return (
    <Box
      component="header"
      sx={{
        borderBottom: '1px solid var(--mui-palette-divider)',
        backgroundColor: '#1e3a8a',
        top: 0,
        zIndex: 'var(--mui-zIndex-appBar)',
        px: 2,
        height: '110px',
        display: 'flex',
        alignItems: 'center',
        userSelect: 'none',
        position: 'relative',
      }}
      onMouseLeave={handleMouseLeave}
      ref={navRef}
    >
      <Stack
        direction="row"
        spacing={0} // Reduzido para diminuir o espaçamento entre gêneros
        alignItems="center"
        justifyContent="center"
        width="100%"
      >
        {/* IMAGEM DA LOGO */}
        <Box
          component="img"
          src="/assets/logo_otaku_zone.png"
          alt="Otaku Zone Logo"
          sx={{
            width: '320px',
            height: '80px',
            objectFit: 'contain',
            mr: 18, // Aumenta distância entre logo e gêneros
          }}
        />

        {genres.map((label) => (
          <Box
            key={label}
            onMouseEnter={handleMouseEnter}
            sx={{
              color: 'white',
              fontSize: '0.95rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              px: 1.2, // Reduzido para diminuir distância entre gêneros
              py: 1,
              cursor: 'pointer',
              position: 'relative',
              whiteSpace: 'nowrap',
              userSelect: 'none',
              '&:hover': {
                color: 'white',
              },
            }}
          >
            {label}
          </Box>
        ))}
      </Stack>

      <Box
        sx={{
          position: 'absolute',
          bottom: '-3px',
          left: underlineProps.left,
          width: underlineProps.width,
          height: '3px',
          bgcolor: '#809afc',
          borderRadius: '2px 2px 0 0',
          transition: 'left 0.3s ease, width 0.3s ease',
          pointerEvents: 'none',
        }}
      />
    </Box>
  )
}
