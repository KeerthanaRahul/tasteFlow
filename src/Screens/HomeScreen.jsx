import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        background: `
          linear-gradient(
            rgba(255, 255, 255, 0.8), 
            rgba(255, 255, 255, 0.8)
          ), 
          url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80') no-repeat center center fixed`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        px: 3,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: '900',
          fontFamily: "'Pacifico', cursive",
          color: '#333',
          textShadow: '0 2px 6px rgba(0,0,0,0.15)',
          mb: 1,
        }}
      >
        TasteFlow
      </Typography>

      <Typography
        variant="h5"
        sx={{
          color: '#555',
          maxWidth: 520,
          mb: 5,
          fontWeight: 500,
          fontStyle: 'italic',
        }}
      >
        Discover flavors that match your mood. Your personal food journey begins here.
      </Typography>

      <Button
        variant="contained"
        size="large"
        onClick={() => navigate('/choose')}
        sx={{
          px: 6,
          py: 1.8,
          fontSize: '1.2rem',
          fontWeight: 'bold',
          borderRadius: 4,
          boxShadow: '0 8px 20px rgba(0,123,255,0.3)',
          backgroundColor: '#007bff',
          color: '#fff',
          '&:hover': {
            backgroundColor: '#0056b3',
            boxShadow: '0 12px 30px rgba(0,86,179,0.6)',
          },
        }}
      >
        Start Ordering
      </Button>
    </Box>
  );
};

export default HomePage;
