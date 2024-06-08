import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Container, List, ListItem, ListItemText, Typography, Box, Paper } from '@mui/material';

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setItems(response.data);
        setFilteredItems(response.data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    setFilteredItems(
      items.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, items]);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Item List
      </Typography>
      <Box component={Paper} padding={2} marginY={2}>
        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          margin="normal"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <List>
          {filteredItems.map(item => (
            <ListItem key={item.id}>
              <ListItemText
                primary={item.title}
                secondary={item.body}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

export default ItemList;
