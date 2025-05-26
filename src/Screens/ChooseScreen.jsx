import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, Card, CardMedia, CardActionArea, CardContent, Button } from '@mui/material';

const moods = [
  {
    name: 'Happy',
    image: '/images/happy-bg.jpg',
    mood: 'happy'
  },
  {
    name: 'Sad',
    image: '/images/sad-bg.jpg',
    mood: 'sad'
  },
  {
    name: 'Excited',
    image: '/images/excited-bg.jpg',
    mood: 'excited'
  },
  {
    name: 'Stressed',
    image: '/images/stressed-bg.jpg',
    mood: 'stressed'
  }
];

const ChooseScreen = () => {
  const navigate = useNavigate();

  const handleSelectMood = (mood) => {
    navigate(`/order/${mood}`);
  };

  const handleFullMenu = () => {
    navigate('/order/fullmenu');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: '#000',
        overflowY: 'auto',
        p: 3,
        color: '#fff'
      }}
    >
      <Typography variant="h3" align="center" sx={{ mb: 4 }}>
        What's Your Mood Today?
      </Typography>

      {moods.map((moodItem) => (
        <Card
          key={moodItem.mood}
          sx={{
            width: '100%',
            height: 200,
            mb: 3,
            position: 'relative',
            borderRadius: 4,
            overflow: 'hidden'
          }}
        >
          <CardActionArea onClick={() => handleSelectMood(moodItem.mood)} sx={{ height: '100%' }}>
            <CardMedia
              component="img"
              height="200"
              image={moodItem.image}
              alt={moodItem.name}
              sx={{
                filter: 'brightness(0.5)'
              }}
            />
            <CardContent
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                color: '#fff',
                textAlign: 'center'
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {moodItem.name}
              </Typography>
              <Typography variant="subtitle1">Tap to explore!</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}

      {/* Full Menu Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 3, width: '100%', borderRadius: 4 }}
        onClick={handleFullMenu}
      >
        View Full Menu
      </Button>
    </Box>
  );
};

export default ChooseScreen;
