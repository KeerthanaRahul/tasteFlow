import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ThankYouScreen = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, letterSpacing: 2 }}>
        🎉 Thank You! 🎉
      </Typography>

      <Typography variant="h5" sx={{ mb: 4, maxWidth: 480, fontWeight: 500 }}>
        Your order has been placed successfully. We’re excited to prepare your meal!
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/home')}
        sx={{
          backgroundColor: '#fff',
          color: '#2575fc',
          fontWeight: 'bold',
          px: 5,
          py: 1.5,
          borderRadius: 3,
          boxShadow: '0 4px 15px rgba(255,255,255,0.4)',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default ThankYouScreen;
