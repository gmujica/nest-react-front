import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './Router';
import { NotificationProvider } from './contex/notification.contex';

function App() {
  return (
    <NotificationProvider>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </NotificationProvider>
  );
}

export default App;
