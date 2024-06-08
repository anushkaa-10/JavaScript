import React from 'react';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';
import ItemList from './ItemList';
import './App.css';

const App = () => {
  return (
    <>
      <AppBar position="sticky" className="app-bar">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            LISTS
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <ItemList />
      </Container>
    </>
  );
};

export default App;