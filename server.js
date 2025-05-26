const express = require('express');
const cors = require('cors');
const menuItems = require('./data'); // Import menu data from data.js (static data for now)
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// --- Mock Database with Static Data ---
let items = [...menuItems]; // Static in-memory data (for testing)

// CRUD routes

// Create (POST) a new menu item
app.post('/api/menu', (req, res) => {
  const newItem = req.body; // Create a new MenuItem from the request body
  items.push(newItem); // Push it to the "database"
  res.status(201).json(newItem); // Return the newly created item
});

// Read (GET) all menu items
app.get('/api/menu', (req, res) => {
    console.log('GET/api/menu called');
  res.json(items); // Return the mock data
});

// Update (PUT) an existing menu item
app.put('/api/menu/:id', (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;

  let itemFound = false;
  items = items.map(item => {
    if (item._id === id) {
      itemFound = true;
      return { ...item, ...updatedItem };
    }
    return item;
  });

  if (!itemFound) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json(updatedItem); // Return the updated item
});

// Delete (DELETE) a menu item
app.delete('/api/menu/:id', (req, res) => {
  const { id } = req.params;
  const initialLength = items.length;
  items = items.filter(item => item._id !== id); // Remove the item

  if (items.length === initialLength) {
    return res.status(404).json({ message: 'Item not found' });
  }

  res.json({ message: 'Item deleted' });
});

// Start the server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});