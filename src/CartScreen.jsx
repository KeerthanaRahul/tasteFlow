import React, { useContext } from 'react';
import { Box, Grid, Paper, Typography, IconButton, Button } from '@mui/material';
import { CartContext } from './CartContext'; // Assuming CartContext is properly set up
import DeleteIcon from '@mui/icons-material/Delete'; // Delete icon
import { useNavigate } from 'react-router-dom';

const CartScreen = () => {
  const { cart, deleteFromCart, updateItemQuantity } = useContext(CartContext); // Access cart context
  const navigate = useNavigate();

  const handleDeleteItem = (item) => {
    deleteFromCart(item); // Remove item from the cart
  };

  const handleIncreaseQuantity = (item) => {
    updateItemQuantity(item, 1); // Increase the item quantity
  };

  const handleDecreaseQuantity = (item) => {
    updateItemQuantity(item, -1); // Decrease the item quantity
  };

  const renderCartItems = () => {
    if (cart.length === 0) {
      return <Typography variant="h6">Your cart is empty</Typography>;
    }
    return cart.map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Paper sx={{ padding: 2, textAlign: 'center', borderRadius: 2, boxShadow: 2, overflowY:'auto' }}>
          <img src={item.image} alt={item.name} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: 8 }} />
          <Typography variant="body1">{item.name}</Typography>
          <Typography variant="body2">{item.description}</Typography>
          <Typography variant="body2">Price: ₹{item.price}</Typography>
          
          {/* Quantity controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2,  overflowY:'auto',overflowY:'auto'}}>
            <IconButton onClick={() => handleDecreaseQuantity(item)} disabled={item.quantity === 1}>
              -
            </IconButton>
            <Typography variant="body2" sx={{ margin: '0 10px' }}>
              {item.quantity}
            </Typography>
            <IconButton onClick={() => handleIncreaseQuantity(item)}>
              +
            </IconButton>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2,overflowY:'auto' }}>
            <Button variant="outlined" color="error" onClick={() => handleDeleteItem(item)} startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Typography variant="body2">Total: ₹{item.price * item.quantity}</Typography>
          </Box>
        </Paper>
      </Grid>
    ));
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
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

      <Button variant="outlined" onClick={() => navigate('/')} sx={{ marginBottom: 2 }}>
        Back to Home
      </Button>

      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Your Cart
      </Typography>

      <Grid container spacing={2}>
        {renderCartItems()}
      </Grid>

      <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'space-between',overflowY:'auto' }}>
        <Typography variant="h6">Total Amount: ₹{calculateTotalAmount()}</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/checkout')}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartScreen;
