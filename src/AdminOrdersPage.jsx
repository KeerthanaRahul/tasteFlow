import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';

const AdminOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('userOrders')) || [];
    setOrders(storedOrders);
  }, []);

  const handleClearOrders = () => {
    if (window.confirm('Are you sure you want to clear all orders?')) {
      localStorage.removeItem('userOrders');
      setOrders([]);
    }
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
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 3 }}>
        User Orders (Admin View)
      </Typography>

      {orders.length === 0 ? (
        <Typography variant="h6">No orders placed yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {orders.map((order) => (
            <Grid item xs={12} md={6} key={order.id}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    Order ID: {order.id}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'gray' }}>
                    Placed on: {order.time}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    Total Amount: ₹{order.total}
                  </Typography>
                  <Typography variant="body2">
                    Items:
                  </Typography>
                  <ul>
                    {order.items.map((item, idx) => (
                      <li key={idx}>
                        {item.name} x {item.quantity} - ₹{item.price * item.quantity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {orders.length > 0 && (
        <Button
          variant="contained"
          color="error"
          sx={{ marginTop: 3 }}
          onClick={handleClearOrders}
        >
          Clear All Orders
        </Button>
      )}
    </Box>
  );
};

export default AdminOrdersPage;
