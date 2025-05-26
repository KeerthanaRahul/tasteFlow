import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Typography } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const ItemFormModal = ({ open, onClose, onSave, initialData }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name || '');
      setDescription(initialData.description || '');
      setImage(initialData.image || '');
    } else {
      setName('');
      setDescription('');
      setImage('');
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || description.trim() === '' || image.trim() === '') {
      alert('Please fill all fields');
      return;
    }
    onSave({ name, description, image });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={style}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          {initialData ? 'Edit Item' : 'Add New Item'}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />

          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default ItemFormModal;
