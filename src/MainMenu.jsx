import React, { useState, useEffect, useContext } from 'react';
import { Button, Grid, Typography, Paper, Box, IconButton } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import data from './data';
import { CartContext } from './CartContext';

const OrderScreen = () => {
  const { mood: selectedMood } = useParams();
  const [mood, setMood] = useState(selectedMood === "notclear" ? "fullmenu" : selectedMood);
  const [viewFullMenu, setViewFullMenu] = useState(false);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    setMood(selectedMood === "notclear" ? "fullmenu" : selectedMood);
  }, [selectedMood]);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  const getItemCount = (item) => {
    const cartItem = cart.find((cartItem) => cartItem.name === item.name);
    return cartItem ? cartItem.quantity : 0;
  };

  const getItemsForMoodAndCategory = (menuData, mood, category) => {
    if (mood === "fullmenu") {
      // Combine all moods for selected category
      return Object.keys(menuData).flatMap(moodKey =>
        (menuData[moodKey][category] || [])
      );
    } else {
      return (menuData[mood] && menuData[mood][category]) ? menuData[mood][category] : [];
    }
  };

  const renderItems = (items) => (
    <Grid container spacing={2}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, boxShadow: 2 }}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: 8 }}
            />
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body2">{item.description}</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 2, marginTop: 1 }}>
              <IconButton color="secondary" onClick={() => handleRemoveFromCart(item)}>
                <RemoveIcon />
              </IconButton>
              <Typography variant="h6">{getItemCount(item)}</Typography>
              <IconButton color="primary" onClick={() => handleAddToCart(item)}>
                <AddIcon />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );

  const renderMenu = (mood) => {
    return (
      <div>
        {['main', 'side', 'dessert','drinks'].map((category) => {
          const items = getItemsForMoodAndCategory(data, mood, category);

          return (
            <div key={category}>
              <Typography
                variant="h6"
                sx={{ marginTop: 3, marginBottom: 1, fontWeight: 'bold' }}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Typography>
              {items.length > 0 ? renderItems(items) : <Typography variant="body2">No items available</Typography>}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#f4f4f4',
        overflowY: 'auto',
        padding: 3,
        '&::-webkit-scrollbar': {
          width: '8px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '4px'
        },
        '&::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#555'
        }
      }}
    >
      <Button
        variant="outlined"
        onClick={() => navigate('/choose')}
        sx={{ marginBottom: 2 }}
      >
        Back to Mood Selection
      </Button>

      {/* Cart Icon */}
      <IconButton
        onClick={() => navigate('/cart')}
        sx={{ position: 'absolute', top: 16, right: 16 }}
      >
        <ShoppingCartIcon />
        {cart.length > 0 && (
          <span
            style={{
              position: 'absolute',
              top: -8,
              right: -8,
              backgroundColor: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '4px 8px',
              fontSize: '12px',
            }}
          >
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </IconButton>

      <Button
        variant="outlined"
        onClick={() => setViewFullMenu(!viewFullMenu)}
        sx={{ marginBottom: 2 }}
      >
        {viewFullMenu ? "Back to Mood Menu" : "View Full Menu"}
      </Button>

      <Box sx={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {viewFullMenu ? renderMenu('fullmenu') : renderMenu(mood)}
      </Box>
    </Box>
  );
};

export default OrderScreen;
