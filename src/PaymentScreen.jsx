import React, { useState, useContext } from 'react';
import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Fade,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
// Use your actual path

const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleConfirm = () => {
    if (!paymentMethod) {
      alert('Please select a payment method.');
      return;
    }

    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const newOrder = {
      id: Date.now(),
      items: cart,
      paymentMethod,
      time: new Date().toLocaleString(),
      total: totalAmount,
    };

    const existingOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    existingOrders.push(newOrder);
    localStorage.setItem('userOrders', JSON.stringify(existingOrders));

    clearCart();
    navigate('/orders');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #fefcf9, #f4eee8)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        px: 2,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#5d4632',
          textAlign: 'center',
        }}
      >
        Select Payment Method
      </Typography>

      <RadioGroup
        value={paymentMethod}
        onChange={(e) => setPaymentMethod(e.target.value)}
        sx={{ display: 'flex', flexDirection: 'row', gap: 6, mb: 4 }}
      >
        <FormControlLabel
          value="cash"
          control={<Radio sx={{ color: '#7a5c3e' }} />}
          label={
            <Typography sx={{ fontSize: '1.2rem', color: '#5d4632' }}>Cash</Typography>
          }
        />
        <FormControlLabel
          value="upi"
          control={<Radio sx={{ color: '#7a5c3e' }} />}
          label={
            <Typography sx={{ fontSize: '1.2rem', color: '#5d4632' }}>UPI</Typography>
          }
        />
      </RadioGroup>

      {paymentMethod === 'cash' && (
        <Fade in>
          <Typography variant="h6" sx={{ mb: 3, color: '#6a4b2c' }}>
            Please pay at the counter.
          </Typography>
        </Fade>
      )}

      {paymentMethod === 'upi' && (
        <Fade in>
          <Box sx={{ textAlign: 'center', mb: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#6a4b2c' }}>
              Scan the QR Code to Pay
            </Typography>
            <img
              src={qrImage}
              alt="UPI QR Code"
              style={{
                width: 200,
                height: 200,
                borderRadius: 16,
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              }}
            />
          </Box>
        </Fade>
      )}

      <Button
        variant="contained"
        onClick={handleConfirm}
        sx={{
          mt: 2,
          px: 5,
          py: 1.5,
          fontSize: '1.1rem',
          fontWeight: 'bold',
          backgroundColor: '#a67c52',
          '&:hover': {
            backgroundColor: '#8d6744',
          },
          borderRadius: 3,
          boxShadow: '0 4px 12px rgba(166,124,82,0.3)',
        }}
      >
        Confirm Order
      </Button>
    </Box>
  );
};

export default PaymentScreen;
