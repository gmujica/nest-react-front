import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container } from '@mui/material';
import NavBar from './common/NavBar';

function App() {
  return (
    <Container>
      <NavBar />
      <Button variant='contained'>Hola mundo</Button>
    </Container>
  );
}

export default App;
