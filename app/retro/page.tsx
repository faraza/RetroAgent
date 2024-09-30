'use client';

import { Container, Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';
import Vapi from "@vapi-ai/web";

const vapi = new Vapi("5903c1e9-194f-4d25-8fa9-5f242f5cc775");

const amorphousAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 20px 10px rgba(255, 102, 102, 0.5); // Softer red glow
  }
  50% {
    box-shadow: 0 0 40px 20px rgba(255, 102, 102, 1);
  }
  100% {
    box-shadow: 0 0 20px 10px rgba(255, 102, 102, 0.5);
  }
`;

export default function Retro() {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isVapiEnabled, setIsVapiEnabled] = useState(true); // State to track if Vapi is enabled or disabled

  // Start Vapi when component mounts
  useEffect(() => {
    console.log("Vapi started");
    vapi.start('a0e47d57-4db1-4d19-b99e-a27920881da2');

    vapi.on('speech-start', () => {
      console.log("speech-start");
      setIsSpeaking(true);
    });

    vapi.on('speech-end', () => {
      console.log("speech-end");
      setIsSpeaking(false);
    });
  }, []);

  // Function to handle orb click
  const handleOrbClick = () => {
    if (isVapiEnabled) {
      console.log("Vapi stopped");
      vapi.stop(); // Disable Vapi
    } else {
      console.log("Vapi restarted");
      vapi.start('a0e47d57-4db1-4d19-b99e-a27920881da2'); // Restart Vapi
    }
    setIsVapiEnabled(!isVapiEnabled); // Toggle the state
  };

  interface OrbProps {
    isSpeaking: boolean;
    isVapiEnabled: boolean;
  }

  const Orb = ({ isSpeaking, isVapiEnabled }: OrbProps) => (
    <Box
      onClick={handleOrbClick} // Add click handler
      sx={{
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: isVapiEnabled ? '#FF6666' : '#000000', // Softer red when enabled, black when disabled
        margin: '0 auto',
        cursor: 'pointer',
        boxShadow: isSpeaking && isVapiEnabled
          ? '0 0 20px 10px rgba(255, 102, 102, 0.5)' // Initial soft glow
          : 'none',
        animation: isSpeaking && isVapiEnabled
          ? `${glowAnimation} 2s ease-in-out infinite`
          : 'none',
        transition: 'background-color 0.5s ease, box-shadow 0.5s ease', // Smooth transition for both color and glow
      }}
    />
  );

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        background: 'linear-gradient(45deg, #FFDEE9, #B5FFFC, #FFDEE9, #B5FFFC)',
        backgroundSize: '400% 400%',
        animation: `${amorphousAnimation} 15s ease infinite`,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box component="main" sx={{ textAlign: 'center', position: 'relative' }}>
        <Typography variant="h1" sx={{ color: '#333333' }}>
          Retro Page
        </Typography>
        <Orb isSpeaking={isSpeaking} isVapiEnabled={isVapiEnabled} />
        {!isVapiEnabled && (
          <Typography
            variant="h6"
            sx={{ color: '#333333', mt: 2, cursor: 'pointer' }}
            onClick={handleOrbClick}
          >
            Click to restart
          </Typography>
        )}
      </Box>
    </Container>
  );
}
