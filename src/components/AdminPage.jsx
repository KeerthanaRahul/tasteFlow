import React, { useState } from 'react';
import { Box, Typography, Button, Grid, Card, CardMedia, CardContent, IconButton, Dialog, DialogTitle, DialogContent, TextField, DialogActions } from '@mui/material';
import { Delete, Edit, Add } from '@mui/icons-material';
import data from '../data'; // Adjust this path based on your project

const AdminPage = () => {
  const [menuData, setMenuData] = useState(data);
  const [openDialog, setOpenDialog] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [currentMood, setCurrentMood] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);

  const handleEdit = (mood, category, item) => {
    setEditingItem({ ...item });
    setCurrentMood(mood);
    setCurrentCategory(category);
    setOpenDialog(true);
  };

  const handleDelete = (mood, category, itemName) => {
    const updatedMood = {
      ...menuData[mood],
      [category]: menuData[mood][category].filter(item => item.name !== itemName)
    };
    setMenuData({ ...menuData, [mood]: updatedMood });
  };

  const handleAddNew = (mood, category) => {
    setEditingItem({ name: '', description: '', price: '', calories: '', image: '' });
    setCurrentMood(mood);
    setCurrentCategory(category);
    setOpenDialog(true);
  };

  const handleDialogSave = () => {
    const updatedCategory = [...menuData[currentMood][currentCategory]];

    const itemIndex = updatedCategory.findIndex(item => item.name === editingItem.name);
    if (itemIndex >= 0) {
      // Update existing item
      updatedCategory[itemIndex] = editingItem;
    } else {
      // Add new item
      updatedCategory.push(editingItem);
    }

    const updatedMood = { ...menuData[currentMood], [currentCategory]: updatedCategory };
    setMenuData({ ...menuData, [currentMood]: updatedMood });

    setOpenDialog(false);
    setEditingItem(null);
  };

  const handleChange = (e) => {
    setEditingItem({ ...editingItem, [e.target.name]: e.target.value });
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
      <Typography variant="h4" sx={{ mb: 3 }}>Admin Panel</Typography>

      {Object.entries(menuData).map(([mood, categories]) => (
        <Box key={mood} sx={{ mb: 4 }}>
          <Typography variant="h5" sx={{ mb: 2 }}>{mood === 'fullMenu' ? 'Full Menu' : mood.charAt(0).toUpperCase() + mood.slice(1)}</Typography>

          {Object.entries(categories).map(([category, items]) => (
            <Box key={category} sx={{ mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 1 }}>{category.charAt(0).toUpperCase() + category.slice(1)}</Typography>
              <Grid container spacing={2}>
                {items.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.name}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <CardMedia component="img" height="140" image={item.image} alt={item.name} />
                      <CardContent>
                        <Typography variant="h6">{item.name}</Typography>
                        <Typography variant="body2">{item.description}</Typography>
                        <Typography variant="body2">₹{item.price} | {item.calories} cal</Typography>
                      </CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 1 }}>
                        <IconButton color="primary" onClick={() => handleEdit(mood, category, item)}>
                          <Edit />
                        </IconButton>
                        <IconButton color="error" onClick={() => handleDelete(mood, category, item.name)}>
                          <Delete />
                        </IconButton>
                      </Box>
                    </Card>
                  </Grid>
                ))}
                <Grid item xs={12} sm={6} md={4}>
                  <Button variant="outlined" fullWidth startIcon={<Add />} onClick={() => handleAddNew(mood, category)}>
                    Add Item
                  </Button>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      ))}

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <DialogTitle>{editingItem && editingItem.name ? 'Edit Item' : 'Add Item'}</DialogTitle>
        <DialogContent>
          {editingItem && (
            <>
              <TextField margin="dense" label="Name" name="name" fullWidth value={editingItem.name} onChange={handleChange} />
              <TextField margin="dense" label="Description" name="description" fullWidth value={editingItem.description} onChange={handleChange} />
              <TextField margin="dense" label="Price" name="price" type="number" fullWidth value={editingItem.price} onChange={handleChange} />
              <TextField margin="dense" label="Calories" name="calories" type="number" fullWidth value={editingItem.calories} onChange={handleChange} />
              <TextField margin="dense" label="Image URL" name="image" fullWidth value={editingItem.image} onChange={handleChange} />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleDialogSave} variant="contained">Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminPage;
