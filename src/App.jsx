import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/index.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
