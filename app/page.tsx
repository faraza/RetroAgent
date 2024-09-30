'use client';

import { Container, Box, Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';  // Updated import

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();  // Same usage

  return (
    <Container maxWidth={false} disableGutters sx={{ 
      background: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box component="main" sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h1" sx={{ color: '#FFD700' }}>
          Scrum Master
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          sx={{ 
            width: '200px', 
            height: '200px', 
            borderRadius: '50%', 
            fontSize: '1.5rem',
            backgroundColor: '#FFD700',
            color: '#000000', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.2s, box-shadow 0.2s',          
            '&:hover': {
              backgroundColor: '#FFC107',
              transform: 'scale(1.05)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
            }
          }}
          onClick={() => router.push('/retro')}  // Same navigation
        >
          Start Retro
        </Button>
      </Box>
    </Container>
  );
}
