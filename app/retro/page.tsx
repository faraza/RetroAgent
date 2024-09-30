import { Container, Box, Typography } from '@mui/material';

export default function Retro() {
  return (
    <Container maxWidth={false} disableGutters sx={{ 
      background: 'linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%)',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Box component="main" sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h1" sx={{ color: '#FFFFFF' }}>
          Retro Page
        </Typography>
      </Box>
    </Container>
  );
}