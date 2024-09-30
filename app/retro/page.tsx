'use client';

import { Container, Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useEffect } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("5903c1e9-194f-4d25-8fa9-5f242f5cc775");

const amorphousAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Retro() {
  
  useEffect(() => {
    console.log("mounting")
    // vapi.start('a0e47d57-4db1-4d19-b99e-a27920881da2')        
  }, []);

  return (
    <Container maxWidth={false} disableGutters sx={{ 
      background: 'linear-gradient(45deg, #FFDEE9, #B5FFFC, #FFDEE9, #B5FFFC)',
      backgroundSize: '400% 400%',
      animation: `${amorphousAnimation} 15s ease infinite`,
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <Box component="main" sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <Typography variant="h1" sx={{ color: '#333333' }}>
          Retro Page
        </Typography>
      </Box>
      {/* Diamond Sparkles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 0,
          overflow: 'hidden',
          '& .sparkle': {
            position: 'absolute',
            width: '15px',
            height: '15px',
            backgroundColor: 'rgba(255, 255, 0, 0.8)', // Yellow color
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', // Diamond shape
            transform: 'translate(-50%, -50%)',
            animation: 'sparkle 1.5s infinite ease-in-out',
          },
          '& .sparkle:nth-of-type(1)': { top: '20%', left: '15%', animationDelay: '0s' },
          '& .sparkle:nth-of-type(2)': { top: '35%', left: '50%', animationDelay: '0.3s' },
          '& .sparkle:nth-of-type(3)': { top: '60%', left: '70%', animationDelay: '0.6s' },
          '& .sparkle:nth-of-type(4)': { top: '80%', left: '30%', animationDelay: '0.9s' },
          '& .sparkle:nth-of-type(5)': { top: '50%', left: '85%', animationDelay: '1.2s' },
          '@keyframes sparkle': {
            '0%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
            '50%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            '100%': { opacity: 0, transform: 'translate(-50%, -50%) scale(0.5)' },
          },
        }}
      >
        {/* Individual Sparkles */}
        <Box className="sparkle" />
        <Box className="sparkle" />
        <Box className="sparkle" />
        <Box className="sparkle" />
        <Box className="sparkle" />
      </Box>
    </Container>
  );
}
