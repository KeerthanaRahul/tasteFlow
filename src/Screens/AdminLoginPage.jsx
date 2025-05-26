import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Alert
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setError('');
      navigate('/home'); // go to home page
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#f7f5f2', // soft beige background
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          padding: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          backgroundColor: '#fffefc',
          boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
        }}
      >
        <Typography
          variant="h4"
          sx={{
            mb: 3,
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#5f4b32', // deep coffee tone
          }}
        >
          Admin Login
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}

        <form onSubmit={handleLogin} noValidate>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 3,
              py: 1.5,
              fontWeight: 'bold',
              backgroundColor: '#a67c52', // warm brown
              '&:hover': {
                backgroundColor: '#8d6744',
              },
            }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default LoginPage;
