import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import { Button, Box, Typography, Paper, Radio, RadioGroup, FormControlLabel, FormControl, Grid, Card, CardContent, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

const CheckoutScreen = () => {
  const { cart, clearCart } = useContext(CartContext); // added clearCart here
  const [selectedOption, setSelectedOption] = useState('takeaway'); // Default selection is "Takeaway"
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('creditcard'); // Default payment method

  const navigate = useNavigate(); // Use navigate hook for redirection

  // Calculate total amount
  const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Handle the "Takeaway" or "Dine-in" option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  
  const handlePayment = () => {
    
    navigate('/payment');
   
   
  };

  const placeOrder = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      total: totalAmount,
      time: new Date().toLocaleString(),
      option: selectedOption,
      paymentMethod: selectedPaymentMethod,
    };

    const existingOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    localStorage.setItem('userOrders', JSON.stringify([...existingOrders, order]));

    clearCart();

    alert('Order placed successfully!');
    navigate('/orders');
  };

  const handleconfirm=() =>{
     order();
     
  }
  const handlecart=() =>{
    navigate('/cart');
  }
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

      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold', color: '#333' }}>
        Checkout
      </Typography>

      {/* Cart Items - Attractive Grid Layout */}
      <Grid container spacing={3}>
        {cart.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.name}>
            <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
              <CardContent sx={{ textAlign: 'center', backgroundColor: '#f5f5f5', padding: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                  {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 1 }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
                  ₹{item.price} x {item.quantity}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Takeaway or Dine-in Selection */}
      <FormControl component="fieldset" sx={{ marginTop: 3, display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Select Your Option
        </Typography>
        <RadioGroup
          value={selectedOption}
          onChange={handleOptionChange}
          row
        >
          <FormControlLabel
            value="takeaway"
            control={<Radio sx={{ color: '#1976d2', '&.Mui-checked': { color: '#1976d2' } }} />}
            label="Takeaway"
            sx={{ marginRight: 4 }}
          />
          <FormControlLabel
            value="dinein"
            control={<Radio sx={{ color: '#1976d2', '&.Mui-checked': { color: '#1976d2' } }} />}
            label="Dine-in"
          />
        </RadioGroup>
      </FormControl>

      {/* Total Amount */}
      <Box sx={{ marginTop: 3, padding: 2, backgroundColor: '#fff', borderRadius: 2, boxShadow: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
          Total Amount: ₹{totalAmount}
        </Typography>
      </Box>

      {/* Payment Method Selection */}
      

      {/* Proceed to Payment Button */}
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: 3,
          width: '100%',
          padding: '12px',
          backgroundColor: '#1976d2',
          '&:hover': { backgroundColor: '#1565c0' },
        }}
        onClick={handlePayment}
      >
        Proceed to Payment
      </Button>


            
      

      {/* Cart Icon at the Bottom */}
      <IconButton
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: '#1976d2',
          color: 'white',
          padding: 1.5,
          '&:hover': { backgroundColor: '#1565c0' },
        }}
        onClick={handlecart}
      >
        <ShoppingCartIcon />
      </IconButton>
    </Box>
  );
};

export default CheckoutScreen;
